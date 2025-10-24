import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Topbar } from "../../components/Topbar";
import { Sidebar } from "../../components/Sidebar";

export const ChatbaseAdaAgent = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-wwwchatbasecowhite-white">
      <Topbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-auto">
          <div className="max-w-screen-2xl">
            <div className="flex items-center justify-between p-8">
              <h1 className="font-www-chatbase-co-semantic-heading-1 font-[number:var(--www-chatbase-co-semantic-heading-1-font-weight)] text-wwwchatbasecowoodsmoke text-[length:var(--www-chatbase-co-semantic-heading-1-font-size)] tracking-[var(--www-chatbase-co-semantic-heading-1-letter-spacing)] leading-[var(--www-chatbase-co-semantic-heading-1-line-height)] [font-style:var(--www-chatbase-co-semantic-heading-1-font-style)]">
                Agents
              </h1>

              <Button className="h-auto gap-2 px-4 py-2 bg-wwwchatbasecowoodsmoke rounded-lg shadow-[inset_0px_-1.5px_0px_#0000000a]">
                <img className="w-5 h-5" alt="Plus" src="/component-1-6.svg" />
                <span className="font-www-chatbase-co-semantic-button font-[number:var(--www-chatbase-co-semantic-button-font-weight)] text-wwwchatbasecoalabaster text-[length:var(--www-chatbase-co-semantic-button-font-size)] tracking-[var(--www-chatbase-co-semantic-button-letter-spacing)] leading-[var(--www-chatbase-co-semantic-button-line-height)] [font-style:var(--www-chatbase-co-semantic-button-font-style)]">
                  New AI agent
                </span>
              </Button>
            </div>

            <div className="px-8 pb-8">
              <Card className="max-w-[540px] rounded-[14px] border border-zinc-200 overflow-hidden shadow-sm">
                <CardContent className="p-0">
                  <div className="relative h-[190px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
                    <img
                      src="/image.png"
                      alt="Card preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-start justify-between p-5">
                    <div className="flex flex-col gap-1">
                      <a
                        className="font-www-chatbase-co-semantic-link font-[number:var(--www-chatbase-co-semantic-link-font-weight)] text-wwwchatbasecowoodsmoke text-[length:var(--www-chatbase-co-semantic-link-font-size)] tracking-[var(--www-chatbase-co-semantic-link-letter-spacing)] leading-[var(--www-chatbase-co-semantic-link-line-height)] [font-style:var(--www-chatbase-co-semantic-link-font-style)]"
                        href="https://www.chatbase.co/dashboard/habib-dwi-ks-workspace/chatbot/ssiMpNXQLWFvzhcTKptYM"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Belajar 30 Hari Cara Ngejokes Yang Benar.txt
                      </a>

                      <a
                        className="[font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray text-xs tracking-[0] leading-4 whitespace-nowrap"
                        href="https://www.chatbase.co/dashboard/habib-dwi-ks-workspace/chatbot/ssiMpNXQLWFvzhcTKptYM"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Last trained 2 days ago
                      </a>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-auto p-[7px] bg-wwwchatbasecowhite-02 rounded-lg border border-zinc-200 shadow-[inset_0px_-1.5px_0px_1px_#0000000a]"
                    >
                      <img
                        className="w-6 h-6"
                        alt="More options"
                        src="/component-1-7.svg"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      <Button
        size="icon"
        className="fixed bottom-4 left-4 w-[55px] h-[55px] bg-wwwchatbasecoblack rounded-[27.5px] shadow-[0px_4px_8px_#00000033]"
      >
        <img
          className="w-[55px] h-[55px]"
          alt="Chat"
          src="/component-1-1.svg"
        />
      </Button>
    </div>
  );
};
