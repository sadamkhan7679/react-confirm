# @razmisoft/react-confirm

A beautiful, flexible, and fully-featured confirmation dialog component for React applications. Built with TypeScript, Tailwind CSS, and Radix UI for maximum flexibility and accessibility.

![GitHub](https://img.shields.io/github/license/sadamkhan7679/react-confirm)
![npm](https://img.shields.io/npm/v/@razmisoft/react-confirm)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@razmisoft/react-confirm)
![GitHub stars](https://img.shields.io/github/stars/sadamkhan7679/react-confirm)

[//]: # "![React Confirm Dialog Demo]()"

![React Confirm Dialog](react-confirm.png "React Confirm Dialog")

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [License](#license)
- [Author](#author)
- [Contributors](#contributors)

## Installation

Using npm:

```bash
npm install @razmisoft/react-confirm
```

Using yarn:

```bash
yarn add @razmisoft/react-confirm
```

Using pnpm:

```bash
pnpm add @razmisoft/react-confirm
```

## Usage

### Global Provider and Dialog

Wrap your app with `ConfirmProvider`:

```tsx
import { ConfirmProvider } from "@razmisoft/react-confirm";

function App() {
  return (
    <ConfirmProvider>
      <YourApp />
    </ConfirmProvider>
  );
}
```

Use the `useConfirm` hook anywhere in your app:

```tsx
import { useConfirm } from "@razmisoft/react-confirm";

function DeleteButton() {
  const { confirm } = useConfirm();

  const handleDelete = async () => {
    try {
      const confirmed = await confirm({
        title: "Delete Item",
        description: "Are you sure you want to delete this item?",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "destructive",
        onConfirm: async () => {
          await deleteItem();
        },
      });

      if (confirmed) {
        console.log("Item deleted successfully");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return <Button onClick={handleDelete}>Delete</Button>;
}
```

### Custom Dialog Component

Create a custom dialog with all UI elements:

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@razmisoft/react-confirm";

function CustomDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name">Name</label>
            <input id="name" className="col-span-3" placeholder="John Doe" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Async Operations with Loading States

```tsx
function SaveButton() {
  const { confirm, updateDialog } = useConfirm();

  const handleSave = async () => {
    try {
      const confirmed = await confirm({
        title: "Save Changes",
        description: "Do you want to save all changes?",
        onConfirm: async () => {
          updateDialog({
            title: "Saving...",
            description: "Please wait while we save your changes.",
          });

          await saveChanges();

          updateDialog({
            title: "Success",
            description: "Changes saved successfully!",
          });

          // Auto close after success
          setTimeout(() => {
            updateDialog({
              title: "Save Changes",
              description: "Do you want to save all changes?",
            });
          }, 1500);
        },
      });
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return <Button onClick={handleSave}>Save Changes</Button>;
}
```

## API Reference

### Components

#### Button

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}
```

Default values:

- `variant`: 'default'
- `size`: 'default'
- `loading`: false
- `loadingText`: 'Loading...'

#### Dialog

```tsx
interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}
```

Required props:

- `children`

#### ConfirmDialog

```tsx
interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
}
```

Required props:

- `open`
- `onOpenChange`
- `onConfirm`
- `onCancel`

Default values:

- `title`: 'Confirm Action'
- `confirmText`: 'Confirm'
- `cancelText`: 'Cancel'
- `variant`: 'default'

### Providers

#### ConfirmProvider

```tsx
interface ConfirmProviderProps {
  children: React.ReactNode;
}
```

Required props:

- `children`

### Hooks

#### useConfirm

```tsx
interface UseConfirmReturn {
  confirm: (
    options?: DialogOptions & { onConfirm?: () => Promise<void> }
  ) => Promise<boolean>;
  updateDialog: (options: Partial<DialogOptions>) => void;
  closeDialog: () => void;
}

interface DialogOptions {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
}
```

#### useConfirmation

```tsx
interface UseConfirmationReturn {
  isOpen: boolean;
  options: DialogOptions;
  confirm: (options?: ConfirmationOptions) => Promise<boolean>;
  updateDialog: (options: Partial<DialogOptions>) => void;
  handleConfirm: () => Promise<void>;
  handleCancel: () => void;
}

interface ConfirmationOptions extends DialogOptions {
  onConfirm?: () => Promise<void>;
  onCancel?: () => void;
}
```

#### useConfirmDialog

```tsx
interface UseConfirmDialogReturn {
  confirm: (options?: ConfirmDialogOptions) => Promise<boolean>;
}

interface ConfirmDialogOptions {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
  onConfirm?: () => Promise<void>;
}
```

## Best Practices

1. **Global vs Local Dialogs**

- Use `useConfirm` for app-wide confirmations
- Use `useConfirmation` with custom UI for localized dialogs

2. **Error Handling**

- Always handle async operations in `onConfirm`
- Use try/catch blocks for error states

3. **Accessibility**

- Provide descriptive titles and descriptions
- Use appropriate ARIA labels
- Ensure keyboard navigation works

4. **UI/UX Guidelines**

- Use appropriate variants for different actions
- Keep descriptions clear and concise
- Show loading states during async operations

## License

MIT © [Razmisoft](https://github.com/razmisoft)

## Author

Razmisoft (https://github.com/razmisoft)

## Contributors

- [List of contributors](https://github.com/razmisoft/react-confirm/graphs/contributors)

Want to contribute? Check out our [Contributing Guide](CONTRIBUTING.md).
