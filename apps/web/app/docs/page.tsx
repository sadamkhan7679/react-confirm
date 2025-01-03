import { Metadata } from "next";
import { DocsHeader } from "@/components/modules/docs/header";
import { CodePlayground } from "@/components/modules/shared/code-playground";
import {
  BASIC_EXAMPLE_PREVIEW,
  BASIC_EXAMPLE_MD,
} from "@/components/modules/examples/basic";

export const metadata: Metadata = {
  title: "Documentation - React Confirm",
  description: "Learn how to use React Confirm in your projects.",
};

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <DocsHeader
        title="Getting Started"
        description="Learn how to use React Confirm in your projects."
      />

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold">Installation</h2>
        <CodePlayground
          code="npm install @razmisoft/react-confirm"
          preview={
            <div className="prose max-w-none">
              <p>Install React Confirm using your preferred package manager:</p>
              <div className="not-prose grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md border p-4">
                  <p className="font-mono text-sm">
                    npm install @razmisoft/react-confirm
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <p className="font-mono text-sm">
                    yarn add @razmisoft/react-confirm
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <p className="font-mono text-sm">
                    pnpm add @razmisoft/react-confirm
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold">Quick Start</h2>
        <CodePlayground
          code={BASIC_EXAMPLE_MD}
          preview={<BASIC_EXAMPLE_PREVIEW />}
        />
      </div>
    </div>
  );
}
