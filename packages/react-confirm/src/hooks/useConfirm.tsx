import React, { createContext, useCallback, useContext } from "react";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { useConfirmation } from "./useConfirmation";
import type { DialogOptions } from "../types";

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
  confirm: (
    options?: DialogOptions & { onConfirm?: () => Promise<void> }
  ) => Promise<boolean>;

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
 * Context for sharing confirmation dialog functionality throughout the app.
 * @type {React.Context<ConfirmContextValue | undefined>}
 */
const ConfirmContext: React.Context<ConfirmContextValue | undefined> =
  createContext<ConfirmContextValue | undefined>(undefined);

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
export function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const {
    isOpen,
    options,
    confirm,
    updateDialog,
    handleConfirm,
    handleCancel,
  } = useConfirmation();

  const closeDialog = useCallback(() => {
    handleCancel();
  }, [handleCancel]);

  const value = React.useMemo(
    () => ({
      confirm,
      updateDialog,
      closeDialog,
    }),
    [confirm, updateDialog, closeDialog]
  );

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      <div id="react-confirm-dialog-portal">
        <ConfirmDialog
          open={isOpen}
          onOpenChange={(open) => !open && handleCancel()}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          {...options}
        />
      </div>
    </ConfirmContext.Provider>
  );
}

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
export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context;
}
