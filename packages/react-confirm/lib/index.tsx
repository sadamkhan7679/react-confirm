// Components
export { ConfirmProvider } from "./hooks/useConfirm";
export { ConfirmDialog } from "./components/ConfirmDialog";
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/Dialog";

// Hooks

export { useConfirm, type ConfirmContextValue } from "./hooks/useConfirm";
export {
  useConfirmation,
  type IUseConfirmation,
} from "./hooks/useConfirmation";

// Types
export type {
  DialogProps,
  DialogPortalProps,
  DialogOverlayProps,
  DialogCloseProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from "@radix-ui/react-dialog";

export type { DialogActions, DialogOptions, ConfirmDialogProps } from "./types";
