import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";
import { LoaderIcon } from "./icons/Loader";

/**
 * Style variants for the button component using class-variance-authority
 * @private
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Props interface for the Button component
 * @public
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon element to be displayed before the button text
   * @example
   * ```tsx
   * <Button startIcon={<SearchIcon />}>Search</Button>
   * ```
   */
  startIcon?: React.ReactNode;

  /**
   * Icon element to be displayed after the button text
   * @example
   * ```tsx
   * <Button endIcon={<ArrowRightIcon />}>Next</Button>
   * ```
   */
  endIcon?: React.ReactNode;

  /**
   * Controls the loading state of the button
   * When true, displays a spinner and loading text
   * @default false
   */
  loading?: boolean;

  /**
   * Text to display when the button is in a loading state
   * @default "Loading..."
   */
  loadingText?: string;

  /**
   * The visual variant of the button
   * @default "default"
   */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";

  /**
   * The size variant of the button
   * @default "default"
   */
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * A versatile button component that supports different variants, sizes, loading states, and icon placements.
 *
 * @component
 * @param props - The button component props
 * @returns A styled button element
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 *
 * // With loading state
 * <Button loading loadingText="Saving...">Save</Button>
 *
 * // With icons
 * <Button startIcon={<SaveIcon />} variant="primary" size="lg">
 *   Save Document
 * </Button>
 *
 * // Different variants
 * <Button variant="destructive">Delete</Button>
 * <Button variant="outline">Cancel</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      startIcon,
      endIcon,
      loading = false,
      loadingText = "Loading...",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <LoaderIcon
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            {startIcon && (
              <span className="mr-2" aria-hidden="true">
                {startIcon}
              </span>
            )}
            <span>{children}</span>
            {endIcon && (
              <span className="ml-2" aria-hidden="true">
                {endIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
