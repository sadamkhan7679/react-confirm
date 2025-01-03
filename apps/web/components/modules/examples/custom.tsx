import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@razmisoft/react-confirm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CUSTOM_EXAMPLE_MD = `
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@razmisoft/react-confirm';

function CustomDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Custom Dialog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="col-span-3"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}`;

export const CUSTOM_EXAMPLE_PREVIEW = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Custom Dialog</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="col-span-3 rounded-md border px-3 py-2"
                placeholder="John Doe"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// export const customExample = {
//   code: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@razmisoft/react-confirm';
//
// function CustomDialog() {
//   const [open, setOpen] = useState(false);
//
//   return (
//     <>
//       <Button onClick={() => setOpen(true)}>
//         Open Custom Dialog
//       </Button>
//
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Profile</DialogTitle>
//             <DialogDescription>
//               Make changes to your profile here.
//             </DialogDescription>
//           </DialogHeader>
//
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 className="col-span-3"
//                 placeholder="John Doe"
//               />
//             </div>
//           </div>
//
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setOpen(false)}>
//               Cancel
//             </Button>
//             <Button onClick={() => setOpen(false)}>
//               Save changes
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }`,
//   preview: function Preview() {
//     const [open, setOpen] = useState(false);
//
//     return (
//       <>
//         <Button onClick={() => setOpen(true)}>Open Custom Dialog</Button>
//
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Edit Profile</DialogTitle>
//               <DialogDescription>
//                 Make changes to your profile here.
//               </DialogDescription>
//             </DialogHeader>
//
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   id="name"
//                   className="col-span-3 rounded-md border px-3 py-2"
//                   placeholder="John Doe"
//                 />
//               </div>
//             </div>
//
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setOpen(false)}>Save changes</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </>
//     );
//   },
// };
