"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import NavButtonsWrapper from "../components/navButtonsWrapper";
import IdleTimerWrapper from "../components/idleTimerWrapper";

interface FaqContainerProps {
  childContainerHeight: number;
  childContainerWidth: number;
}

const FaqContainer: React.FC<FaqContainerProps> = ({
  childContainerHeight,
  childContainerWidth,
}) => {
  return (
    <div
      style={{
        height: childContainerHeight,
        width: childContainerWidth,
      }}
    >
      {/* <IdleTimerWrapper> */}
      <div
        style={{
          height: childContainerHeight,
          width: childContainerWidth,
        }}
      >
        <iframe
          id={"iframe-content"}
          className="w-full h-full"
          height={childContainerHeight}
          width={childContainerWidth}
          src="https://gallegoprada360.com/faq/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* </IdleTimerWrapper> */}
    </div>
  );
};

export default function Faq() {
  const router = useRouter();

  return (
    <NavButtonsWrapper>
      <FaqContainer />
    </NavButtonsWrapper>
  );
}
