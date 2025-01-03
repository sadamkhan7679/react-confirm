interface DocsHeaderProps {
  title: string;
  description?: string;
}

export function DocsHeader({ title, description }: DocsHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="inline-block font-heading text-4xl font-bold">{title}</h1>
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}