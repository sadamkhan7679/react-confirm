import { Metadata } from "next";
import { DocsHeader } from "@/components/modules/docs/header";
import { Section } from "@/components/modules/docs/section";
import { CodeExample } from "@/components/modules/docs/code-examples";
import {
  PropsTable,
  type PropDefinition,
} from "@/components/modules/docs/props-table";
import { FeatureList } from "@/components/modules/docs/feature-list";

export const metadata: Metadata = {
  title: "useConfirm - React Confirm",
  description:
    "Hook for managing confirmation dialogs with loading and error states.",
};

const hookReturnProps: PropDefinition[] = [
  {
    name: "confirm",
    type: "(options?: DialogOptions) => Promise<boolean>",
    description:
      "Shows the confirmation dialog and returns a promise that resolves with the result",
  },
  {
    name: "updateDialog",
    type: "(options: Partial<DialogOptions>) => void",
    description: "Updates the dialog content while it's open",
  },
  {
    name: "closeDialog",
    type: "() => void",
    description: "Closes the dialog programmatically",
  },
];

const dialogOptionsProps: PropDefinition[] = [
  {
    name: "title",
    type: "string",
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
  {
    name: "onConfirm",
    type: "() => Promise<void>",
    description: "Async function to run when confirmed",
  },
];

const features = [
  {
    title: "Promise-based API",
    description: "Simple async/await usage pattern",
  },
  {
    title: "Type-safe",
    description: "Full TypeScript support with IntelliSense",
  },
  {
    title: "Flexible Updates",
    description: "Update dialog content during async operations",
  },
  {
    title: "Context-based",
    description: "Access confirmation dialog anywhere in your app",
  },
];

const basicExample = {
  title: "Basic Usage",
  description: "Simple confirmation dialog with async operation",
  code: `import { useConfirm } from '@razmisoft/react-confirm';

function DeleteButton() {
  const { confirm } = useConfirm();

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: 'Delete Item',
      description: 'Are you sure you want to delete this item?',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'destructive',
    });

    if (confirmed) {
      console.log('Item deleted');
    }
  };

  return <Button onClick={handleDelete}>Delete Item</Button>;
}`,
};

const asyncExample = {
  title: "Async Operations",
  description: "Update dialog during async operations",
  code: `function SaveButton() {
  const { confirm, updateDialog } = useConfirm();

  const handleSave = async () => {
    try {
      const confirmed = await confirm({
        title: 'Save Changes',
        description: 'Do you want to save all changes?',
        onConfirm: async () => {
          updateDialog({
            title: 'Saving...',
            description: 'Please wait while we save your changes.',
          });

          await saveChanges();

          updateDialog({
            title: 'Success',
            description: 'Changes saved successfully!',
          });

          setTimeout(() => {
            updateDialog({
              title: 'Save Changes',
              description: 'Do you want to save all changes?',
            });
          }, 1500);
        },
      });
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  return <Button onClick={handleSave}>Save Changes</Button>;
}`,
};

export default function UseConfirmPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <DocsHeader
        title="useConfirm"
        description="A React hook for managing confirmation dialogs with loading and error states."
      />

      <Section id="features" title="Features">
        <FeatureList features={features} />
      </Section>

      <Section id="examples" title="Examples">
        <div className="space-y-6">
          <CodeExample {...basicExample} />
          <CodeExample {...asyncExample} />
        </div>
      </Section>

      <Section id="api" title="API Reference">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hook Return Value</h3>
            <PropsTable props={hookReturnProps} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Dialog Options</h3>
            <PropsTable props={dialogOptionsProps} />
          </div>
        </div>
      </Section>
    </div>
  );
}
