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
  title: "Button - React Confirm",
  description: "Flexible button component with multiple variants and states.",
};

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
    defaultValue: "'default'",
    description: "Visual style variant of the button",
  },
  {
    name: "size",
    type: "'default' | 'sm' | 'lg' | 'icon'",
    defaultValue: "'default'",
    description: "Size of the button",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the button is in a loading state",
  },
  {
    name: "loadingText",
    type: "string",
    defaultValue: "'Loading...'",
    description: "Text to display when loading",
  },
];

const features = [
  {
    title: "Multiple Variants",
    description: "Six different style variants to match your design needs",
  },
  {
    title: "Loading States",
    description: "Built-in support for loading states with customizable text",
  },
  {
    title: "Flexible Sizing",
    description: "Four size options including an icon-only variant",
  },
  {
    title: "Accessible",
    description: "ARIA compliant with keyboard navigation support",
  },
];

const variantsExample = {
  title: "Button Variants",
  description: "Different visual styles for various contexts",
  code: `import { Button } from '@razmisoft/react-confirm';

function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`,
  preview: (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

const loadingExample = {
  title: "Loading State",
  description: "Buttons with loading indicators and custom loading text",
  code: `import { Button } from '@razmisoft/react-confirm';

function LoadingExample() {
  return (
    <div className="flex gap-4">
      <Button loading>Loading</Button>
      <Button loading loadingText="Saving...">Save</Button>
    </div>
  );
}`,
  preview: (
    <div className="flex gap-4">
      <Button loading>Loading</Button>
      <Button loading loadingText="Saving...">
        Save
      </Button>
    </div>
  ),
};

export default function ButtonPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <DocsHeader
        title="Button"
        description="A flexible button component with multiple variants and states."
      />

      <Section id="features" title="Features">
        <FeatureList features={features} />
      </Section>

      <Section id="examples" title="Examples">
        <div className="space-y-6">
          <CodeExample {...variantsExample} />
          <CodeExample {...loadingExample} />
        </div>
      </Section>

      <Section id="props" title="Props">
        <PropsTable props={buttonProps} />
      </Section>
    </div>
  );
}
