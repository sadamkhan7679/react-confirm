"use client";
import { useConfirm } from "@razmisoft/react-confirm";
import { Button } from "@/components/ui/button";

export const BASIC_EXAMPLE_MD = `
import { useConfirm } from '@razmisoft/react-confirm';

function DeleteButton() {
  const { confirm } = useConfirm();

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: 'Delete Item',
      description: 'Are you sure you want to delete this item?',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'destructive',
    });

    if (confirmed) {
      console.log('Item deleted');
    }
  };

  return <Button onClick={handleDelete}>Delete Item</Button>;
    `;

export const BASIC_EXAMPLE_PREVIEW = () => {
  const { confirm } = useConfirm();

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: "Delete Item",
      description: "Are you sure you want to delete this item?",
      confirmText: "Delete",
      cancelText: "Cancel",
      variant: "destructive",
    });

    if (confirmed) {
      console.log("Item deleted");
    }
  };

  return <Button onClick={handleDelete}>Delete Item</Button>;
};

// export const basicExample = {
//   code: `
// import { useConfirm } from '@razmisoft/react-confirm';
//
// function DeleteButton() {
//   const { confirm } = useConfirm();
//
//   const handleDelete = async () => {
//     const confirmed = await confirm({
//       title: 'Delete Item',
//       description: 'Are you sure you want to delete this item?',
//       confirmText: 'Delete',
//       cancelText: 'Cancel',
//       variant: 'destructive',
//     });
//
//     if (confirmed) {
//       console.log('Item deleted');
//     }
//   };
//
//   return <Button onClick={handleDelete}>Delete Item</Button>;
// }`,
//   preview: function Preview() {
//     const { confirm } = useConfirm();
//
//     const handleDelete = async () => {
//       const confirmed = await confirm({
//         title: "Delete Item",
//         description: "Are you sure you want to delete this item?",
//         confirmText: "Delete",
//         cancelText: "Cancel",
//         variant: "destructive",
//       });
//
//       if (confirmed) {
//         console.log("Item deleted");
//       }
//     };
//
//     return <Button onClick={handleDelete}>Delete Item</Button>;
//   },
// };

// Add more examples...
