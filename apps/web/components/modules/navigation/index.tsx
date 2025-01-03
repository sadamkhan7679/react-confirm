import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/modules/theme/theme-toggle";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/razmisoft/react-confirm"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block"
          >
            <div className="sr-only">GitHub</div>
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
