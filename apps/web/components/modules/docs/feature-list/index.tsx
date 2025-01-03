interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="mt-4 list-disc pl-6 space-y-2">
      {features.map(({ title, description }) => (
        <li key={title}>
          <span className="font-medium">{title}</span>
          {description && <span className="text-muted-foreground"> - {description}</span>}
        </li>
      ))}
    </ul>
  );
}