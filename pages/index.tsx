import React, { useState, useEffect } from "react";
import {
  InformationCircleIcon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/button";

export default function Home() {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hero-pattern ">
      <div className="flex justify-start items-end space-x-6">
        <Button
          text="Como Funciona"
          heroIcon={InformationCircleIcon}
          link="/como-funciona"
        />
        <Button text="Darme de Alta" heroIcon={UserPlusIcon} link="/alta" />
        <Button
          text="Preguntas Frecuentes"
          heroIcon={QuestionMarkCircleIcon}
          link="/faq"
        />
      </div>
    </div>
  );
}
