// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   InformationCircleIcon,
//   UserPlusIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import Button from "./components/button"; // Ensure this path is correct

// export default function Home() {
//   // State to manage whether the fullscreen button is shown
//   const [showFullScreenButton, setShowFullScreenButton] = useState(true);

//   const handleFullScreen = () => {
//     const docElement = document?.documentElement;
//     // debugger;
//     if (docElement) {
//       if (docElement.requestFullscreen) {
//         docElement.requestFullscreen();
//       } else if (docElement.webkitRequestFullscreen) {
//         docElement.webkitRequestFullscreen();
//       }
//     }

//     // Hide the button after requesting fullscreen
//     setShowFullScreenButton(false);
//   };

//   useEffect(() => {
//     // Disable context menus across the entire app
//     const handleContextMenu = (event: MouseEvent) => {
//       event.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center">
//       {showFullScreenButton ? (
//         <button
//           onClick={handleFullScreen}
//           className="mb-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-150 ease-in-out"
//         >
//           Enter Fullscreen
//         </button>
//       ) : null}
//       <div className="flex justify-start items-end space-x-6">
//         <Button
//           text="Como Funciona"
//           heroIcon={InformationCircleIcon}
//           link="/external-pages/como-funciona"
//         />
//         <Button
//           text="Darme de Alta"
//           heroIcon={UserPlusIcon}
//           link="/external-pages/alta"
//         />
//         <Button
//           text="Preguntas Frecuentes"
//           heroIcon={QuestionMarkCircleIcon}
//           link="/external-pages/faq"
//         />
//       </div>
//     </div>
//   );
// }
