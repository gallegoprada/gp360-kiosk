"use client";

import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ReactPlayer from "react-player/youtube";
const VIDEO_FRAME_SIZE = 150;

export default function NavButtonsWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [videoContainerHeight, setVideoContainerHeight] = useState(
    Number(
      typeof window !== "undefined" ? window.innerHeight - VIDEO_FRAME_SIZE : 0
    )
  );
  const [videoContainerWidth, setVideoContainerWidth] = useState(
    Number(
      typeof window !== "undefined" ? window.innerWidth - VIDEO_FRAME_SIZE : 0
    )
  );

  const router = useRouter();

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      setVideoContainerHeight(Number(window.innerHeight - VIDEO_FRAME_SIZE));
      setVideoContainerWidth(Number(window.innerWidth - VIDEO_FRAME_SIZE));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [videoContainerHeight, videoContainerWidth]);

  return (
    <div
      className={
        "flex flex-col justify-center items-center min-h-screen bg-hero-pattern bg-cover bg-center "
      }
    >
      <div
        style={{
          width: videoContainerWidth,
        }}
      >
        <div className={"flex justify-end"}>
          <Link
            href="/"
            className="flex flex-row items-center justify-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80"
          >
            <XMarkIcon className="font-light text-gray-700 dark:text-gray-400 h-10 w-10" />
          </Link>
        </div>
        <div className="m-1" />
        <div
          style={{
            width: videoContainerWidth,
            height: videoContainerHeight,
          }}
        >
          {children}
        </div>
        <div className="m-1" />
        <div className={"flex justify-start"}>
          <Link
            href="/"
            className="flex flex-row items-center justify-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80"
          >
            <ChevronLeftIcon className="font-light text-gray-700 dark:text-gray-400 h-8 w-8" />
            <div className="text-3xl font-light  text-gray-700 dark:text-gray-400">
              Volver
            </div>
            <div className="m-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
