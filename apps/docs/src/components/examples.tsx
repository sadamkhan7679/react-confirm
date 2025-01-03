import { CodePlayground } from "./code-playground";
import { basicExample, asyncExample, customExample } from "@/examples";

export function Examples() {
  return (
    <section className="container space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore different ways to use React Confirm in your applications.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Basic Confirmation</h3>
          <CodePlayground code={basicExample.code} preview={basicExample.preview} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Async Operations</h3>
          <CodePlayground code={asyncExample.code} preview={asyncExample.preview} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Custom Dialog</h3>
          <CodePlayground
            code={customExample.code}
            preview={customExample.preview}
          />
        </div>
      </div>
    </section>
  );
}