import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CheckIcon, PlusIcon, SettingsIcon, UserPlusIcon } from "lucide-react";

const navigationLinks = [
  { label: "Changelog", href: "https://www.chatbase.co/changelog" },
  { label: "Docs", href: "https://www.chatbase.co/docs" },
  { label: "Help", href: "https://www.chatbase.co/help" },
];

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

export const Topbar = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between px-5 py-4 bg-wwwchatbasecoalabaster border-b border-zinc-200 h-16">
      <nav className="flex items-center gap-2">
        <img className="w-6 h-6" alt="Logo" src="/component-1.svg" />

        <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray-30 text-base">
          /
        </span>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 max-w-[200px] rounded-lg">
            <a
              className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecowoodsmoke text-sm leading-5 whitespace-nowrap"
              href="https://www.chatbase.co/dashboard/habib-dwi-ks-workspace/chatbots"
              rel="noopener noreferrer"
              target="_blank"
            >
              Habib Dwi K's works…
            </a>

            <Badge
              variant="outline"
              className="rounded-[14px] border-zinc-200"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray text-xs leading-4">
                Free
              </span>
            </Badge>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0.5 rounded-lg"
          >
            <img
              className="w-4 h-4"
              alt="Dropdown"
              src="/component-1-3.svg"
            />
          </Button>
        </div>
      </nav>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecoscarpa-flow text-sm text-center leading-5 whitespace-nowrap"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Separator
          orientation="vertical"
          className="h-4 bg-wwwchatbasecoscarpa-flow"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer outline-none">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" />
                <AvatarFallback>HD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-0" align="end">
            <nav className="flex flex-col gap-[7px] bg-white">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 px-3 py-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" alt="Kirichat" />
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

              <div className="flex flex-col gap-1 pb-1">
                {workspaces.map((workspace, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`h-auto justify-between px-3 py-2 mx-1 rounded-md ${
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
                  className="h-auto justify-start gap-3 px-3 py-2 mx-1 rounded-md hover:bg-neutral-100"
                >
                  <PlusIcon className="w-4 h-4 text-neutral-700" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-[12.7px] text-center leading-5">
                    Create new workspace
                  </span>
                </Button>
              </div>
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
