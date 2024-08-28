import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  InformationCircleIcon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
  ArrowsRightLeftIcon,
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
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-hero-pattern bg-cover bg-center opacity-80">
      <div className="flex w-full justify-center items-end space-x-8 space-y-8">
        <img
          src="/gp360-logo.png"
          alt="Logo"
          height={"200px"}
          width={"200px"}
        />
      </div>
      <div className={"m-3"} />
      <div className="flex w-full justify-center items-end space-x-8 space-y-8">
        <Button
          text="Como Funciona"
          heroIcon={InformationCircleIcon}
          link="/como-funciona"
        />
        <Button text="Darme de Alta" heroIcon={UserPlusIcon} link="/alta" />
      </div>
      <div className="flex w-full justify-center items-end space-x-8 space-y-8">
        <Button
          text="cambia tu Tarifa"
          heroIcon={ArrowsRightLeftIcon}
          link="/cambia-tu-tarifa"
        />
        <Button
          text="Preguntas Frecuentes"
          heroIcon={QuestionMarkCircleIcon}
          link="/faq"
        />
      </div>
      {/* <div className="m-4" /> */}
      <div className="flex w-full ml-40 mt-8">
        <Link
          href={"/info-kids"}
          className="flex flex-row items-end justify-end rounded-lg shadow"
          passHref
        >
          <img
            src="/kids.png"
            alt="Logo"
            height={"50px"}
            width={"50px"}
            className="opacity-60"
          />
          <div className="m-2" />
          <div
            className={
              "text-2xl font-bold tracking-tight text-gray-900 text-white opacity-50"
            }
          >
            INFO KIDS
          </div>
        </Link>
      </div>
    </div>
  );
}
