import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
@function cn
@description A utility function that merges class names using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
