export function Features() {
  const features = [
    {
      title: "Type-Safe",
      description: "Built with TypeScript for better developer experience and fewer bugs.",
    },
    {
      title: "Accessible",
      description: "ARIA compliant and keyboard navigable for all users.",
    },
    {
      title: "Customizable",
      description: "Flexible theming and styling options to match your brand.",
    },
    {
      title: "Lightweight",
      description: "Small bundle size with zero external dependencies.",
    },
  ];

  return (
    <section className="container">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-lg border bg-card p-6 text-card-foreground"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}