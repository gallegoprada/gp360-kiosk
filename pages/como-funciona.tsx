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
  const router = useRouter();

  return (
    <ReactPlayer
      height={childContainerHeight}
      width={childContainerWidth}
      playing={true}
      onEnded={() => {
        router.push("/");
      }}
      url="https://www.youtube.com/watch?v=iHibnmosKkM?autoplay=1&mute=1"
    />
  );
};

export default function ComoFuncionaVideo() {
  return (
    <NavButtonsWrapper>
      <ComoFuncionaContainer {...({} as ComoFuncionaContainer)} />
    </NavButtonsWrapper>
  );
}
