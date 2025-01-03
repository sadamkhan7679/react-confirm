// "use client";
// import "@razmisoft/react-confirm/styles.css";
// import { Button } from "@razmisoft/react-confirm";
//
// export default function Page() {
//   return (
//     <>
//       <h1>Web</h1>
//       <Button
//         onClick={() => {
//           return console.log("Boopp");
//         }}
//         disabled={false}
//         variant="destructive"
//       >
//         Booppppp
//       </Button>
//     </>
//   );
// }

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Examples } from "@/components/examples";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Features />
      <Examples />
    </div>
  );
}
