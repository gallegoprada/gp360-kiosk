"use client";

import React, { useState, useEffect, use } from "react";

import NavButtonsWrapper from "../components/navButtonsWrapper";
import IdleTimerWrapper from "../components/idleTimerWrapper";

interface FaqContainerProps {
  childContainerHeight: number;
  childContainerWidth: number;
}

interface IframeContainerProps {
  childContainerHeight: number;
  childContainerWidth: number;
  onFinishLoading: any;
}

const IframeContainer: React.FC<IframeContainerProps> = ({
  childContainerHeight,
  childContainerWidth,
  onFinishLoading,
}) => {
  useEffect(() => {
    const iframeWrapper = document.querySelector(".iframe-wrapper");

    if (iframeWrapper) {
      let startX = 0;
      let startY = 0;

      // Use React.TouchEvent<HTMLDivElement> if handling events on a div
      const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
      };

      const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const moveX = e.touches[0].pageX;
        const moveY = e.touches[0].pageY;

        const diffX = Math.abs(moveX - startX);
        const diffY = Math.abs(moveY - startY);

        if (diffX > diffY) {
          e.preventDefault();
        }
      };

      if (iframeWrapper) {
        iframeWrapper.addEventListener("touchstart", handleTouchStart as any, {
          passive: false,
        });
        iframeWrapper.addEventListener("touchmove", handleTouchMove as any, {
          passive: false,
        });
      }

      return () => {
        if (iframeWrapper) {
          iframeWrapper.removeEventListener(
            "touchstart",
            handleTouchStart as any
          );
          iframeWrapper.removeEventListener(
            "touchmove",
            handleTouchMove as any
          );
        }
      };
    }
  }, []);

  return (
    <iframe
      id={"iframe-content"}
      className="w-full h-full rounded-md"
      style={{
        overflowX: "hidden",
        touchAction: "pan-y",
        pointerEvents: "none",
      }}
      height={childContainerHeight}
      width={childContainerWidth}
      src="https://gallegoprada360.com/faq/"
      frameBorder="0"
      allowFullScreen
      onLoad={() => onFinishLoading()}
    ></iframe>
  );
};

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
        id={"iframe-wrapper"}
        style={{
          position: "relative",
          height: childContainerHeight,
          width: childContainerWidth,
          overflowX: "hidden",
          touchAction: "pan-y",
        }}
      >
        {/* {isLoading && (
          <div className="w-full h-full rounded-md flex flex-col justify-center items-center block p-6 text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80 ">
            Loading...
          </div>
        )} */}
        {/*  */}

        <IframeContainer
          childContainerHeight={childContainerHeight}
          childContainerWidth={childContainerWidth}
          onFinishLoading={() => setIsLoading(false)}
        />
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
