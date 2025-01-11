import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogProps, DialogTitleProps, DialogTriggerProps } from '@radix-ui/react-dialog';

/**
 * Action handlers for the dialog. You can use these to handle the confirm and cancel actions.
 * @category Interfaces
 *
 * @example With async/await
 * ```tsx
 * const { confirm, closeDialog } = useConfirm();
 * const handleDelete = async () => {
  *   await confirm({
  *     title: 'Delete Item',
  *    description: 'Are you sure you want to delete this item?',
  *     confirmText: 'Delete',
  *    cancelText: 'Cancel',
  *    onConfirm: async () => {
  *       await deleteItem();
  *    },
  *    onCancel: () => {
  *       closeDialog();
  *    },
  *   });
  *
  *   if (confirmed) {
  *     console.log('Item deleted');
  *   }
  *
  *  if (!confirmed) {
  *     closeDialog();
  * }
  * }
  * ```
  }
 }
 */
interface DialogActions {
    onConfirm: () => Promise<void> | void;
    onCancel: () => void;
}
/**
 * Options for the dialog. You can use these to customize the dialog.
 * @category Interfaces
 *
 * @example
 * ```tsx
 * const { confirm } = useConfirm();
 * const handleDelete = async () => {
 *   await confirm({
 *     title: 'Delete Item',
 *     description: 'Are you sure you want to delete this item?',
 *     confirmText: 'Delete',
 *     cancelText: 'Cancel',
 *     variant: 'destructive',
 *   });
 *
 *   if (confirmed) {
 *     console.log('Item deleted');
 *   }
 * }
 * ```
 })
 */
interface DialogOptions {
    /** The title of the dialog. */
    title?: string;
    /** The description of the dialog. */
    description?: string;
    /** The confirm button text of the dialog. */
    confirmText?: string;
    /** The cancel button text of the dialog. */
    cancelText?: string;
    /** The icon component of the dialog. */
    icon?: ReactNode;
    /** The variant of the dialog. */
    variant?: "default" | "destructive";
}
/**
 * Props for the ConfirmDialog component.
 * @category Interfaces
 */
interface ConfirmDialogProps extends DialogOptions, DialogActions {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

/**
 * Context value interface for the confirmation dialog functionality.
 * @interface ConfirmContextValue
 */
interface ConfirmContextValue {
    /**
     * Shows a confirmation dialog and returns a promise that resolves to boolean.
     * @param {DialogOptions & { onConfirm?: () => Promise<void> }} [options] - Dialog customization options and optional confirmation handler
     * @returns {Promise<boolean>} Resolves to true if confirmed, false if canceled
     */
    confirm: (options?: DialogOptions & {
        onConfirm?: () => Promise<void>;
    }) => Promise<boolean>;
    /**
     * Updates the dialog options while it's displayed.
     * @param {Partial<DialogOptions>} options - New dialog options to apply
     */
    updateDialog: (options: Partial<DialogOptions>) => void;
    /**
     * Closes the currently displayed dialog.
     */
    closeDialog: () => void;
}
/**
 * Provider component that enables confirmation dialog functionality for its children.
 *
 * @component
 * @example
 * ```tsx
 * <ConfirmProvider>
 *   <App />
 * </ConfirmProvider>
 * ```
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to confirmation functionality
 * @returns {JSX.Element} Provider component with confirmation dialog
 */
declare function ConfirmProvider({ children }: {
    children: React__default.ReactNode;
}): react_jsx_runtime.JSX.Element;
/**
 * Hook to access confirmation dialog functionality.
 *
 * @hook
 * @example
 * ```tsx
 * const { confirm, updateDialog, closeDialog } = useConfirm();
 *
 * const handleDelete = async () => {
 *   const confirmed = await confirm({
 *     title: "Delete Item",
 *     message: "Are you sure you want to delete this item?"
 *   });
 *   if (confirmed) {
 *     // Perform delete operation
 *   }
 * };
 * ```
 *
 * @throws {Error} If used outside of ConfirmProvider
 * @returns {ConfirmContextValue} Object containing confirmation dialog controls
 */
declare function useConfirm(): ConfirmContextValue;

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
declare function ConfirmDialog({ open, onOpenChange, onConfirm, onCancel, title, description, confirmText, cancelText, icon, variant, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element;

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

interface ConfirmationOptions extends DialogOptions {
    onConfirm?: () => Promise<void>;
    onCancel?: () => void;
}
interface IUseConfirmation {
    isOpen: boolean;
    options: DialogOptions;
    confirm: (options?: ConfirmationOptions) => Promise<boolean>;
    updateDialog: (options: Partial<DialogOptions>) => void;
    handleConfirm: () => Promise<void>;
    handleCancel: () => void;
}
declare function useConfirmation(): IUseConfirmation;

export { type ConfirmContextValue, ConfirmDialog, type ConfirmDialogProps, ConfirmProvider, Dialog, type DialogActions, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, type DialogOptions, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, type IUseConfirmation, useConfirm, useConfirmation };
