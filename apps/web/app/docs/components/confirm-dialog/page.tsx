import { Metadata } from "next";
import { DocsHeader } from "@/components/modules/docs/header";
import { Section } from "@/components/modules/docs/section";
import { CodeExample } from "@/components/modules/docs/code-examples";
import {
  PropsTable,
  type PropDefinition,
} from "@/components/modules/docs/props-table";
import { FeatureList } from "@/components/modules/docs/feature-list";
import { Button } from "@razmisoft/react-confirm";

export const metadata: Metadata = {
  title: "ConfirmDialog - React Confirm",
  description:
    "A pre-built confirmation dialog component with loading and error states.",
};

const confirmDialogProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    description: "Controls dialog visibility",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when visibility changes",
  },
  {
    name: "onConfirm",
    type: "() => Promise<void>",
    description: "Called when confirmed",
  },
  {
    name: "onCancel",
    type: "() => void",
    description: "Called when cancelled",
  },
  {
    name: "title",
    type: "string",
    defaultValue: "'Confirm Action'",
    description: "Dialog title",
  },
  {
    name: "description",
    type: "string",
    description: "Dialog description",
  },
  {
    name: "confirmText",
    type: "string",
    defaultValue: "'Confirm'",
    description: "Confirm button text",
  },
  {
    name: "cancelText",
    type: "string",
    defaultValue: "'Cancel'",
    description: "Cancel button text",
  },
  {
    name: "variant",
    type: "'default' | 'destructive'",
    defaultValue: "'default'",
    description: "Dialog variant",
  },
];

const features = [
  {
    title: "Loading States",
    description:
      "Built-in support for async operations with loading indicators",
  },
  {
    title: "Error Handling",
    description: "Automatic error display and recovery",
  },
  {
    title: "Success States",
    description: "Visual feedback for successful operations",
  },
  {
    title: "Customizable",
    description: "Configurable buttons, text, and variants",
  },
];

const basicExample = {
  title: "Basic Usage",
  description: "A simple confirmation dialog with async operation",
  code: `import { ConfirmDialog } from '@razmisoft/react-confirm';

function Example() {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    // Your async operation
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete Item</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}`,
  preview: null,
};

export default function ConfirmDialogPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <DocsHeader
        title="ConfirmDialog"
        description="A pre-built confirmation dialog component with loading and error states."
      />

      <Section id="features" title="Features">
        <FeatureList features={features} />
      </Section>

      <Section id="examples" title="Examples">
        <CodeExample {...basicExample} />
      </Section>

      <Section id="props" title="Props">
        <PropsTable props={confirmDialogProps} />
      </Section>
    </div>
  );
}
