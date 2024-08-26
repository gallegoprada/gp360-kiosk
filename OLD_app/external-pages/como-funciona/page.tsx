"use client";

import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ReactPlayer from "react-player/youtube";
const VIDEO_FRAME_SIZE = 150;

export default function ComoFuncionaVideo() {
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
    <ReactPlayer
      height={videoContainerHeight}
      width={videoContainerWidth}
      playing={true}
      onEnded={() => {
        router.push("/");
      }}
      url="https://www.youtube.com/watch?v=iHibnmosKkM?autoplay=1&mute=1"
    />
  );
}
