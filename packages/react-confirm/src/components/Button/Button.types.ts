import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon to display before the button text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  endIcon?: React.ReactNode;

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;

  /**
   * Text to display when loading
   */
  loadingText?: string;
}
