import { Input } from "../ui/input";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CommandK } from "lucide-react";

export function DocsSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-between w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
      >
        <div className="inline-flex items-center gap-2">
          <CommandK className="h-4 w-4" />
          <span>Search documentation...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0">
          <div className="p-4 border-b">
            <Input
              placeholder="Search documentation..."
              className="h-10"
              autoFocus
            />
          </div>
          <div className="min-h-[300px] p-4">
            <p className="text-sm text-muted-foreground">
              No results found. Try searching for something else.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}