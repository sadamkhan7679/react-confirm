import { Metadata } from "next";
import { DocsHeader } from "@/components/modules/docs/header";
import { Section } from "@/components/modules/docs/section";
import { CodeExample } from "@/components/modules/docs/code-examples";
import {
  PropsTable,
  type PropDefinition,
} from "@/components/modules/docs/props-table";
import { FeatureList } from "@/components/modules/docs/feature-list";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@razmisoft/react-confirm";

export const metadata: Metadata = {
  title: "Dialog - React Confirm",
  description: "A modal dialog component built on top of Radix UI Dialog.",
};

const dialogProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    description: "Controls the open state of the dialog",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback fired when the open state changes",
  },
];

const dialogContentProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content to be rendered inside the dialog",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply to the dialog content",
  },
];

const features = [
  {
    title: "Composable",
    description: "Build custom dialogs using individual components",
  },
  {
    title: "Accessible",
    description: "Built on Radix UI primitives for full accessibility",
  },
  {
    title: "Animated",
    description: "Smooth enter/exit animations",
  },
  {
    title: "Responsive",
    description: "Adapts to different screen sizes",
  },
];

const basicExample = {
  title: "Basic Dialog",
  description: "A simple dialog with header, content, and footer",
  code: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@razmisoft/react-confirm';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="col-span-3"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}`,
  preview: null,
};

export default function DialogPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <DocsHeader
        title="Dialog"
        description="A modal dialog component built on top of Radix UI Dialog."
      />

      <Section id="features" title="Features">
        <FeatureList features={features} />
      </Section>

      <Section id="installation" title="Installation">
        <CodeExample
          title="Import"
          code={`import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@razmisoft/react-confirm';`}
        />
      </Section>

      <Section id="examples" title="Examples">
        <CodeExample {...basicExample} />
      </Section>

      <Section id="props" title="Props">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dialog</h3>
            <PropsTable props={dialogProps} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">DialogContent</h3>
            <PropsTable props={dialogContentProps} />
          </div>
        </div>
      </Section>
    </div>
  );
}
