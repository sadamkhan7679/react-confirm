import { CodePlayground } from '@/components/code-playground';

interface CodeExampleProps {
  title: string;
  description?: string;
  code: string;
  preview?: React.ReactNode;
}

export function CodeExample({ title, description, code, preview }: CodeExampleProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>
      <CodePlayground code={code} preview={preview} />
    </div>
  );
}