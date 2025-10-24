import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { CheckIcon, PlusIcon, SettingsIcon, UserPlusIcon } from "lucide-react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const menuItems = [
  {
    icon: SettingsIcon,
    label: "Settings",
  },
  {
    icon: UserPlusIcon,
    label: "Invite members",
  },
];

const workspaces = [
  {
    name: "Kirichat",
    isSelected: true,
  },
];

export const DropdownMenu = (): JSX.Element => {
  return (
    <nav className="flex flex-col gap-[7px] bg-white w-64 h-[250.11px]">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/kirichat.png" alt="Kirichat" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <span className="[font-family:'Inter',Helvetica] font-medium text-neutral-900 text-[13.1px] leading-5">
              Kirichat
            </span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-[10.7px] leading-[15px]">
              Free
            </span>
          </div>
        </div>

        <Separator className="bg-neutral-200" />

        <div className="flex flex-col py-1">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto justify-start gap-3 px-3 py-2 rounded-md hover:bg-neutral-100"
            >
              <item.icon className="w-4 h-4 text-neutral-700" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-[12.8px] leading-5">
                {item.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center px-3 py-1">
        <span className="[font-family:'Inter',Helvetica] font-medium text-neutral-500 text-[10.9px] text-center leading-4">
          Workspaces
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {workspaces.map((workspace, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`h-auto justify-between px-3 py-2 rounded-md ${
              workspace.isSelected ? "bg-[#e5e5e580]" : ""
            }`}
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-900 text-[12.8px] leading-5">
              {workspace.name}
            </span>
            {workspace.isSelected && (
              <CheckIcon className="w-4 h-4 text-neutral-900" />
            )}
          </Button>
        ))}

        <Button
          variant="ghost"
          className="h-auto justify-start gap-3 px-3 py-2 rounded-md hover:bg-neutral-100"
        >
          <PlusIcon className="w-4 h-4 text-neutral-700" />
          <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-[12.7px] text-center leading-5">
            Create new workspace
          </span>
        </Button>
      </div>
    </nav>
  );
};
