import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./Dialog";
import { Button } from "./Button/Button";
import { AlertTriangleIcon, LoaderIcon, CheckIcon, XIcon } from "./icons";
import type { ConfirmDialogProps as IConfirmDialogProps } from "../types";

export interface ConfirmDialogProps extends IConfirmDialogProps {}

/** 
 * @group Components
 * @module ConfirmDialog
 * 
 * ConfirmDialog component - A pre-built confirmation dialog component with loading and error states.
 * 
 * /*
Our ConfirmDialog component is a simple and accessible confirm dialog component for React applications.
It provides a way to display a confirmation dialog with a title, description, confirm button, and cancel button.
The dialog can be customized with an icon and a variant (default or destructive).
The component is used in the ConfirmDialog component in the react-confirm package.
@typedef {Object} ConfirmDialogProps
@prop {boolean} open - Whether the dialog is open or not
@prop {function} onOpenChange - Function to handle open state change
@prop {function} onConfirm - Function to handle confirm action
@prop {function} onCancel - Function to handle cancel action
@prop {string} title - Title of the dialog
@prop {string} description - Description of the dialog
@prop {string} confirmText - Text for the confirm button
@prop {string} cancelText - Text for the cancel button
@prop {React.ReactNode} icon - Icon to display in the dialog
@prop {string} variant - Variant of the dialog (default or destructive)
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
  title = "Confirm Action",
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  icon,
  variant = "default",
}: ConfirmDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setIsLoading(false);
      setError(undefined);
      setSuccess(undefined);
    }
  }, [open]);

  const handleConfirm = async () => {
    setIsLoading(true);
    setError(undefined);
    setSuccess(undefined);

    try {
      await onConfirm();
      setSuccess("Operation completed successfully");
      setTimeout(() => onOpenChange(false), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    if (isLoading)
      return (
        <LoaderIcon className="animate-spin text-blue-600" aria-hidden="true" />
      );
    if (error) return <XIcon className="text-red-600" aria-hidden="true" />;
    if (success)
      return <CheckIcon className="text-green-600" aria-hidden="true" />;
    return (
      icon || (
        <AlertTriangleIcon className="text-yellow-600" aria-hidden="true" />
      )
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            {getStatusIcon()}
          </div>
          <DialogTitle className="text-center">{title}</DialogTitle>
          {description && !error && !success && (
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          )}
          {error && (
            <DialogDescription className="text-center text-red-600">
              {error}
            </DialogDescription>
          )}
          {success && (
            <DialogDescription className="text-center text-green-600">
              {success}
            </DialogDescription>
          )}
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={onCancel} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button
            variant={variant}
            onClick={handleConfirm}
            loading={isLoading}
            loadingText="Loading..."
            disabled={isLoading}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
