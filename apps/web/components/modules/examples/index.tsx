"use client";
import { CodePlayground } from "../shared/code-playground";
// import { asyncExample } from "./async";
// import { basicExample } from "./basic";
// import { customExample } from "./custom";
// import { ConfirmDialog } from "@razmisoft/react-confirm";

import { ASYNC_EXAMPLE_MD, ASYNC_EXAMPLE_PREVIEW } from "./async";
import { BASIC_EXAMPLE_MD, BASIC_EXAMPLE_PREVIEW } from "./basic";
import { CUSTOM_EXAMPLE_MD, CUSTOM_EXAMPLE_PREVIEW } from "./custom";

export function Examples() {
  return (
    <section className="container mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore different ways to use React Confirm in your applications.
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Basic Confirmation</h3>
          <CodePlayground
            code={BASIC_EXAMPLE_MD}
            preview={<BASIC_EXAMPLE_PREVIEW />}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Async Operations</h3>
          <CodePlayground
            code={ASYNC_EXAMPLE_MD}
            preview={<ASYNC_EXAMPLE_PREVIEW />}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Custom Dialog</h3>
          <CodePlayground
            code={CUSTOM_EXAMPLE_MD}
            preview={<CUSTOM_EXAMPLE_PREVIEW />}
          />
        </div>
      </div>
    </section>
  );
}
