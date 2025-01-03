import { useConfirm } from "@razmisoft/react-confirm";
import { Button } from "@/components/ui/button";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const asyncExample = {
  code: `import { useConfirm } from '@razmisoft/react-confirm';

function SaveButton() {
  const { confirm, updateDialog } = useConfirm();

  const handleSave = async () => {
    try {
      const confirmed = await confirm({
        title: 'Save Changes',
        description: 'Do you want to save all changes?',
        onConfirm: async () => {
          updateDialog({
            title: 'Saving...',
            description: 'Please wait while we save your changes.',
          });

          await saveChanges(); // Your async operation

          updateDialog({
            title: 'Success',
            description: 'Changes saved successfully!',
          });

          // Auto close after success
          setTimeout(() => {
            updateDialog({
              title: 'Save Changes',
              description: 'Do you want to save all changes?',
            });
          }, 1500);
        },
      });
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  return <Button onClick={handleSave}>Save Changes</Button>;
}`,
  preview: function Preview() {
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

            await delay(2000); // Simulate async operation

            updateDialog({
              title: "Success",
              description: "Changes saved successfully!",
            });

            await delay(1500);
          },
        });

        if (confirmed) {
          console.log("Changes saved");
        }
      } catch (error) {
        console.error("Save failed:", error);
      }
    };

    return <Button onClick={handleSave}>Save Changes</Button>;
  },
};