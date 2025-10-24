import React from "react";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { CheckIcon, PlusIcon, SettingsIcon, UserPlusIcon } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  {
    icon: "/component-1-4.svg",
    label: "Agents",
    href: "https://www.chatbase.co/dashboard/habib-dwi-ks-workspace/chatbots",
    active: true,
  },
  {
    icon: "/component-1-5.svg",
    label: "Workspace settings",
    hasDropdown: true,
  },
  {
    icon: "/component-1-8.svg",
    label: "Usage",
    href: "https://www.chatbase.co/dashboard/habib-dwi-ks-workspace/usage",
  },
];

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

const Sidebar = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-60 bg-wwwchatbasecoalabaster border-r border-wwwchatbasecoiron">
      <nav className="flex flex-col gap-2 p-2 overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            {item.active ? (
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 h-auto px-2.5 py-1.5 bg-wwwchatbasecowhite rounded-lg border border-zinc-200 shadow-[inset_0px_-1.5px_0px_1px_#0000000a]"
                asChild={!!item.href}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5"
                      alt={item.label}
                      src={item.icon}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecowoodsmoke text-sm leading-5">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <>
                    <img
                      className="w-5 h-5"
                      alt={item.label}
                      src={item.icon}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecowoodsmoke text-sm leading-5">
                      {item.label}
                    </span>
                  </>
                )}
              </Button>
            ) : item.hasDropdown ? (
              <Button
                variant="ghost"
                className="w-full justify-between gap-2 h-auto px-2.5 py-1.5 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="w-5 h-5"
                    alt={item.label}
                    src={item.icon}
                  />
                  <span className="font-www-chatbase-co-semantic-button font-[number:var(--www-chatbase-co-semantic-button-font-weight)] text-wwwchatbasecostorm-gray text-[length:var(--www-chatbase-co-semantic-button-font-size)] tracking-[var(--www-chatbase-co-semantic-button-letter-spacing)] leading-[var(--www-chatbase-co-semantic-button-line-height)] [font-style:var(--www-chatbase-co-semantic-button-font-style)]">
                    {item.label}
                  </span>
                </div>
                <img
                  className="w-4 h-4"
                  alt="Dropdown"
                  src="/component-1-2.svg"
                />
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 h-auto px-2.5 py-1.5 rounded-lg"
                asChild={!!item.href}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5"
                      alt={item.label}
                      src={item.icon}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray text-sm leading-5">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <>
                    <img
                      className="w-5 h-5"
                      alt={item.label}
                      src={item.icon}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray text-sm leading-5">
                      {item.label}
                    </span>
                  </>
                )}
              </Button>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

const Topbar = (): JSX.Element => {
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
          <DropdownMenuContent className="w-56 p-0" align="end">
            <nav className="flex flex-col gap-[6px] bg-white">
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5 px-2.5 py-1.5">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" alt="Kirichat" />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-neutral-900 text-[11.5px] leading-[18px]">
                      Kirichat
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-[9.5px] leading-[13px]">
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
                      className="h-auto justify-start gap-2.5 px-2.5 py-1.5 rounded-md hover:bg-neutral-100"
                    >
                      <item.icon className="w-3.5 h-3.5 text-neutral-700" />
                      <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-[11.2px] leading-[18px]">
                        {item.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center px-2.5 py-1">
                <span className="[font-family:'Inter',Helvetica] font-medium text-neutral-500 text-[9.5px] text-center leading-[14px]">
                  Workspaces
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-1">
                {workspaces.map((workspace, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`h-auto justify-between px-2.5 py-1.5 mx-1 rounded-md ${
                      workspace.isSelected ? "bg-[#e5e5e580]" : ""
                    }`}
                  >
                    <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-900 text-[11.2px] leading-[18px]">
                      {workspace.name}
                    </span>
                    {workspace.isSelected && (
                      <CheckIcon className="w-3.5 h-3.5 text-neutral-900" />
                    )}
                  </Button>
                ))}

                <Button
                  variant="ghost"
                  className="h-auto justify-start gap-2.5 px-2.5 py-1.5 mx-1 rounded-md hover:bg-neutral-100"
                >
                  <PlusIcon className="w-3.5 h-3.5 text-neutral-700" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-[11px] text-center leading-[18px]">
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

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
