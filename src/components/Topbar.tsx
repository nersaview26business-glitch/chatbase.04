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
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Settings, LogOut } from "lucide-react";

const navigationLinks = [
  { label: "Changelog", href: "https://www.chatbase.co/changelog" },
  { label: "Docs", href: "https://www.chatbase.co/docs" },
  { label: "Help", href: "https://www.chatbase.co/help" },
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
          <DropdownMenuContent className="w-56" align="end">
            <div className="flex items-center gap-3 px-2 py-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/acg8oclj3xcdooeofjefstr-jbo0vrq-awvwtezvxh9g2yhlrgvj5o83-s96-c.png" />
                <AvatarFallback>HD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-sm text-wwwchatbasecowoodsmoke leading-tight">
                  Habib Dwi K
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-xs text-wwwchatbasecostorm-gray leading-tight">
                  habibdwik8@gmail.com
                </span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                Settings
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                Logout
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
