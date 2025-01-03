import Link from "next/link";

const links = [
  { href: "/docs", label: "Documentation" },
  { href: "/examples", label: "Examples" },
  { href: "/playground", label: "Playground" },
];

export function NavLinks() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="transition-colors hover:text-foreground/80"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}