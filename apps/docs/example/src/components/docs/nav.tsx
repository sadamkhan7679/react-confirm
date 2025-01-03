import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "ConfirmDialog", href: "/docs/components/confirm-dialog" },
    ],
  },
  {
    title: "Hooks",
    items: [
      { title: "useConfirm", href: "/docs/hooks/use-confirm" },
      { title: "useConfirmation", href: "/docs/hooks/use-confirmation" },
      { title: "useConfirmDialog", href: "/docs/hooks/use-confirm-dialog" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Basic Usage", href: "/docs/examples/basic" },
      { title: "Async Operations", href: "/docs/examples/async" },
      { title: "Custom Dialog", href: "/docs/examples/custom" },
      { title: "Error Handling", href: "/docs/examples/error-handling" },
    ],
  },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="space-y-6 py-6">
        {items.map((section) => (
          <div key={section.title} className="px-3">
            <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 hover:underline",
                    pathname === item.href
                      ? "bg-muted font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}