import { useCallback, useState } from "react";
import type { DialogOptions } from "../types";

export interface ConfirmationOptions extends DialogOptions {
  onConfirm?: () => Promise<void>;
  onCancel?: () => void;
}

const defaultOptions: DialogOptions = {
  title: "",
  description: "",
  confirmText: "Confirm",
  cancelText: "Cancel",
  variant: "default",
};

export interface IUseConfirmation {
  isOpen: boolean;
  options: DialogOptions;
  confirm: (options?: ConfirmationOptions) => Promise<boolean>;
  updateDialog: (options: Partial<DialogOptions>) => void;
  handleConfirm: () => Promise<void>;
  handleCancel: () => void;
}

export function useConfirmation(): IUseConfirmation {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DialogOptions>(defaultOptions);
  const [resolver, setResolver] = useState<(value: boolean) => void>();

  const updateDialog = useCallback((newOptions: Partial<DialogOptions>) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  const resetDialog = useCallback(() => {
    setOptions(defaultOptions);
    setResolver(undefined);
  }, []);

  const confirm = useCallback(
    (confirmOptions: ConfirmationOptions = {}) => {
      setIsOpen(true);
      setOptions({ ...defaultOptions, ...confirmOptions });

      return new Promise<boolean>((resolve) => {
        setResolver(() => async (confirmed: boolean) => {
          if (confirmed && confirmOptions.onConfirm) {
            await confirmOptions.onConfirm();
          } else if (!confirmed && confirmOptions.onCancel) {
            confirmOptions.onCancel();
          }
          resolve(confirmed);
          setIsOpen(false);
          resetDialog();
        });
      });
    },
    [resetDialog]
  );

  const handleConfirm = useCallback(async () => {
    if (resolver) {
      await resolver(true);
    }
  }, [resolver]);

  const handleCancel = useCallback(() => {
    if (resolver) {
      resolver(false);
    }
    resetDialog();
  }, [resolver, resetDialog]);

  return {
    isOpen,
    options,
    confirm,
    updateDialog,
    handleConfirm,
    handleCancel,
  };
}
