import { ReactNode } from "react";
import { SVGProps } from "react";

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
export interface DialogActions {
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
export interface DialogOptions {
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
export interface ConfirmDialogProps extends DialogOptions, DialogActions {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}
