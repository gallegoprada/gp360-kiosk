"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavButtonsWrapper from "../components/navButtonsWrapper";

import ReactPlayer from "react-player/youtube";

interface ComoFuncionaContainer {
  childContainerHeight: number;
  childContainerWidth: number;
}

const ComoFuncionaContainer: React.FC<ComoFuncionaContainer> = ({
  childContainerHeight,
  childContainerWidth,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  return (
    <div
      style={{
        position: "relative",
        height: childContainerHeight,
        width: childContainerWidth,
      }}
    >
      {isLoading && (
        <div className="w-full h-full rounded-md flex flex-col justify-center items-center block p-6 text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80 ">
          Loading...
        </div>
      )}

      <ReactPlayer
        style={{ borderRadius: "10px" }}
        height={childContainerHeight}
        width={childContainerWidth}
        onReady={() => setIsLoading(false)}
        playing={true}
        onEnded={() => {
          router.push("/");
        }}
        url="https://youtu.be/61ZrtSxd6kg?autoplay=1&mute=1"
      />
    </div>
  );
};

export default function ComoFuncionaVideo() {
  return (
    <NavButtonsWrapper>
      <ComoFuncionaContainer {...({} as ComoFuncionaContainer)} />
    </NavButtonsWrapper>
  );
}
