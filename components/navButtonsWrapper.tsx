"use client";

import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, ReactNode, ReactElement } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ReactPlayer from "react-player/youtube";
const MARGIN = 24;
const VIDEO_FRAME_SIZE = MARGIN + 35 + MARGIN + MARGIN;

interface EnhancedChildProps {
  childContainerHeight: number;
  childContainerWidth: number;
}

export default function NavButtonsWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [childContainerHeight, setchildContainerHeight] = useState(
    Number(
      typeof window !== "undefined" ? window.innerHeight - VIDEO_FRAME_SIZE : 0
    )
  );
  const [childContainerWidth, setChildContainerWidth] = useState(
    Number(typeof window !== "undefined" ? window.innerWidth - MARGIN : 0)
  );

  const router = useRouter();

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      setchildContainerHeight(Number(window.innerHeight - VIDEO_FRAME_SIZE));
      setChildContainerWidth(Number(window.innerWidth - MARGIN));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [childContainerHeight, childContainerWidth]);

  // Assuming the children could be any valid React node
  const enhancedChildren: ReactNode = React.Children.map(children, (child) => {
    // Ensure the child is a valid React element before cloning
    if (React.isValidElement<EnhancedChildProps>(child)) {
      return React.cloneElement(child, {
        childContainerHeight,
        childContainerWidth,
      });
    }
    return child;
  });

  return (
    <div
      className={
        "flex flex-col justify-center items-center min-h-screen bg-hero-pattern bg-cover bg-center"
      }
    >
      <div
        style={{
          width: childContainerWidth,
        }}
      >
        <div className="m-3" />
        <div className={"flex justify-start"}>
          <Link
            href="/"
            className="flex flex-row items-center justify-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80"
          >
            {/* <XMarkIcon className="font-light text-gray-700 dark:text-gray-400 h-10 w-10" /> */}
            <ChevronLeftIcon className="font-light text-gray-700 dark:text-gray-400 h-8 w-8" />
            <div className="text-3xl font-light  text-gray-700 dark:text-gray-400">
              Volver
            </div>
          </Link>
        </div>
        <div className="m-3" />
        <div
          style={{
            height: childContainerHeight,
            width: childContainerWidth,
          }}
        >
          {enhancedChildren}
        </div>
        <div className="m-3" />
        {/* <div className={"flex justify-start"}>
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
        </div> */}
        <div className="m-3" />
      </div>
    </div>
  );
}
