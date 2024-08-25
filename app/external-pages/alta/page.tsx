"use client";

import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IdleTimerWrapper from "@/app/components/idleTimerWrapper";

const VIDEO_FRAME_SIZE = 150;

export default function Alta() {
  const [containerHeight, setContainerHeight] = useState(
    Number(
      typeof window !== "undefined" ? window.innerHeight - VIDEO_FRAME_SIZE : 0
    )
  );
  const [containerWidth, setContainerWidth] = useState(
    Number(
      typeof window !== "undefined" ? window.innerWidth - VIDEO_FRAME_SIZE : 0
    )
  );

  const router = useRouter();

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      setContainerHeight(Number(window.innerHeight - VIDEO_FRAME_SIZE));
      setContainerWidth(Number(window.innerWidth - VIDEO_FRAME_SIZE));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerHeight, containerWidth]);

  return (
    <div
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      {/* <IdleTimerWrapper> */}
      <div
        style={{
          height: containerHeight,
          width: containerWidth,
        }}
      >
        <iframe
          id={"iframe-content"}
          className="w-full h-full"
          height={containerHeight}
          width={containerWidth}
          src="https://gallegoprada360.com/nueva-alta/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* </IdleTimerWrapper> */}
    </div>
  );
}
