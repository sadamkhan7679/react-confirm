interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-2">
        {children}
      </div>
    </section>
  );
}