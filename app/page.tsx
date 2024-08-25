"use client";

import {
  InformationCircleIcon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import Button from "./components/button";

export default function Home() {
  useEffect(() => {
    // Disable context menus across the entire app
    // const handleContextMenu = (event: MouseEvent) => {
    //   event.preventDefault();
    // };

    // document.addEventListener("contextmenu", handleContextMenu);

    document?.documentElement?.requestFullscreen().catch((e) => {
      console.log("Error attempting to enable full-screen mode:", e);
    });

    // return () => {
    //   document.removeEventListener("contextmenu", handleContextMenu);
    // };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center ">
      <div className="flex justify-start items-end space-x-6">
        <Button
          text="Como Funciona"
          heroIcon={InformationCircleIcon}
          link="/external-pages/como-funciona"
        />
        <Button
          text="Darme de Alta"
          heroIcon={UserPlusIcon}
          link="/external-pages/alta"
        />
        <Button
          text="Preguntas Frecuentes"
          heroIcon={QuestionMarkCircleIcon}
          link="external-pages/faq"
        />
      </div>
    </div>
  );
}
