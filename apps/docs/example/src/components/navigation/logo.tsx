import Link from "next/link";
import { BoxesIcon } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <BoxesIcon className="h-6 w-6" />
      <span className="font-bold">React Confirm</span>
    </Link>
  );
}