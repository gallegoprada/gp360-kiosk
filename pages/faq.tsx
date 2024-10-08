"use client";

import React, { useState, useEffect, use } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        height: childContainerHeight,
        width: childContainerWidth,
        overflowX: "hidden",
        touchAction: "pan-y",
      }}
    >
      {/* <IdleTimerWrapper> */}
      <div
        style={{
          position: "relative",
          height: childContainerHeight,
          width: childContainerWidth,
          overflowX: "hidden",
          touchAction: "pan-y",
        }}
      >
        {isLoading && (
          <div className="w-full h-full rounded-md flex flex-col justify-center items-center block p-6 text-gray-900  bg-white border border-gray-200 rounded-lg shadow  opacity-80 ">
            Loading...
          </div>
        )}

        <iframe
          id={"iframe-content"}
          className="w-full h-full rounded-md"
          style={{
            overflowX: "hidden",
            touchAction: "pan-y",
          }}
          height={childContainerHeight}
          width={childContainerWidth}
          src="https://gallegoprada360.com/faq/"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
      {/* </IdleTimerWrapper> */}
    </div>
  );
};

export default function Faq() {
  return (
    <NavButtonsWrapper>
      <FaqContainer {...({} as FaqContainerProps)} />
    </NavButtonsWrapper>
  );
}
