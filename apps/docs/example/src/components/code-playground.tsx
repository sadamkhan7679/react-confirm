import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { CopyIcon, PlayIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePlaygroundProps {
  code: string;
  preview: React.ReactNode;
}

export function CodePlayground({ code, preview }: CodePlaygroundProps) {
  const [copied, setCopied] = React.useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border bg-background">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={copyCode}
              className="h-8 px-2"
            >
              <CopyIcon className="h-4 w-4 mr-1" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Open in StackBlitz
              }}
              className="h-8 px-2"
            >
              <PlayIcon className="h-4 w-4 mr-1" />
              Open in StackBlitz
            </Button>
          </div>
        </div>
        <TabsContent value="preview" className="p-4">
          <div className="rounded-md border bg-slate-50 p-4">{preview}</div>
        </TabsContent>
        <TabsContent value="code" className="p-0">
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: 0,
              background: "transparent",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </div>
  );
}