"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyIcon, PlayIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";

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
              // background: "transparent",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </div>
  );
}

/*

Create a Docs page for A React Confirmation Dialog Component....
Here is some information to get you started:
Package Name: @razmisoft/react-confirm
Description: A beautiful, flexible, and fully-featured confirmation dialog component for React applications. Built with TypeScript, Tailwind CSS, and Radix UI for maximum flexibility and accessibility.

Installation
Install the package using your preferred package manager:

npm install @razmisoft/react-confirm
yarn add @razmisoft/react-confirm
pnpm add @razmisoft/react-confirm

Exports and Components
The package exports the following components:

Global Components

1. ConfirmDialogProvider: A context provider that wraps your application to provide the confirm function.
2. useConfirmDialog: A hook that returns the confirm function. Returns the following functions
    -  confirm,
     - updateDialog,
     - closeDialog,

     Here are some important signatures

     export interface ConfirmationOptions extends DialogOptions {
        onConfirm?: () => Promise<void>;
        onCancel?: () => void;
      }

      const defaultOptions: DialogOptions = {
          title: "",
          description: "",
          confirmText: "Confirm",
          cancelText: "Cancel",
          variant: "default",
        };

    isOpen: boolean;
    options: DialogOptions;
    confirm: (options?: ConfirmationOptions) => Promise<boolean>;
    updateDialog: (options: Partial<DialogOptions>) => void;
    handleConfirm: () => Promise<void>;
    handleCancel: () => void;


3. Styles: The package includes a default CSS file that you need to import in your application to style the confirmation dialog. The CSS file is located at @razmisoft/react-confirm/styles.css.

Custom Dialog Components
The package also exports the following components that you can use to create custom dialogs:
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,

4. useConfirmation: A hook that returns the confirm function. Returns the following functions and values:
    isOpen: boolean;
    options: DialogOptions;
    confirm: (options?: ConfirmationOptions) => Promise<boolean>;
    updateDialog: (options: Partial<DialogOptions>) => void;
    handleConfirm: () => Promise<void>;
    handleCancel: () => void;



A user can use this package in two ways:

1. Using the global ConfirmDialogProvider component to wrap the application and use the useConfirmDialog hook to show confirmation dialogs.

2. Using the Dialog component to create custom dialogs. The Dialog component is a low-level component that provides the basic structure for creating custom dialogs.
   User can import and use useConfirmation hook to create custom dialogs.



Create a Comprehensive docs page for the package that includes the following sections:
1. Hero Section: A brief introduction to the package with a code snippet showing how to use the ConfirmDialogProvider and useConfirmDialog hook.
2. Installation: A section that shows how to install the package using npm, yarn, or pnpm.
3. Getting Started: A section that shows how to use the ConfirmDialogProvider and useConfirmDialog hook to show confirmation dialogs.
4. Custom Dialogs: A section that shows how to create custom dialogs using the Dialog component and useConfirmation hook.
5. Examples: A section that shows some examples of using the package to create confirmation dialogs.
6. API Reference: A section that documents the available components, hooks, and types exported by the package.
7. Styling: A section that explains how to style the confirmation dialog using the default CSS file provided by the package.
8. FAQ: A section that answers common questions about the package.
9. License: A section that shows the license information for the package.
10. Contributing: A section that explains how to contribute to the package and provides guidelines for submitting issues and pull requests.
11. Changelog: A section that shows the changelog for the package, including information about new features, bug fixes, and breaking changes.
12. Conclusion: A conclusion section that summarizes the key points of the documentation and encourages users to try the package.


Make sure to include code snippets, examples, and screenshots where necessary to make the documentation comprehensive and easy to understand.
Make sure to use the correct syntax highlighting for code snippets and examples.
Make sure to follow the best practices for writing documentation and provide clear and concise information for each section.
Make sure the guide is easy to follow and provides all the necessary information for users to get started with the package.


For code snippets, you can use the CodePlayground component display code and preview side by side.








 */
