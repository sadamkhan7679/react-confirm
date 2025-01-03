import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pt-20 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
      <a
        href="https://github.com/razmisoft/react-confirm"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
      >
        Follow along on GitHub
      </a>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Beautiful Confirmation Dialogs
        <br className="hidden sm:inline" />
        for React Applications
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        A flexible and customizable confirmation dialog component. Built with
        TypeScript, Tailwind CSS, and Radix UI for maximum flexibility and
        accessibility.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="/docs">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/razmisoft/react-confirm"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            Star on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}