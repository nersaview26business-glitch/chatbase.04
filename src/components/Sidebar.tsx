import React from "react";
import { Button } from "./ui/button";

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

export const Sidebar = (): JSX.Element => {
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
