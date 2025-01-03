import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TocProps {
  headings: { id: string; text: string; level: number }[];
}

export function TableOfContents({ headings }: TocProps) {
  const [activeId, setActiveId] = useState<string>();
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>({});

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        headingElementsRef.current[entry.target.id] = entry;
      });

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const entry = headingElementsRef.current[key];
        if (entry.isIntersecting) visibleHeadings.push(entry);
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <div className="space-y-1">
        {headings.map(({ id, text, level }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "block text-sm transition-colors hover:text-foreground",
              activeId === id
                ? "text-foreground font-medium"
                : "text-muted-foreground",
              level === 3 && "pl-4"
            )}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}