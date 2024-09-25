"use client";

import React, { useState, useEffect } from "react";

import NavButtonsWrapper from "../components/navButtonsWrapper";
import IdleTimerWrapper from "../components/idleTimerWrapper";

interface AltaContainerProps {
  childContainerHeight: number;
  childContainerWidth: number;
}

const AltaContainer: React.FC<AltaContainerProps> = ({
  childContainerHeight,
  childContainerWidth,
}) => {
  const [isLoading, setIsLoading] = useState(true);

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
          position: "relative",
          height: childContainerHeight,
          width: childContainerWidth,
        }}
      >
        {isLoading && (
          <div className="w-full h-full rounded-md flex flex-col justify-center items-center block p-6 text-gray-900  bg-white border border-gray-200 rounded-lg shadow   opacity-80 ">
            Loading...
          </div>
        )}
        <iframe
          id={"iframe-content"}
          className="w-full h-full rounded-md"
          height={childContainerHeight}
          width={childContainerWidth}
          src="https://gallegoprada360.com/solicitar-clase-de-prueba"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
      {/* </IdleTimerWrapper> */}
    </div>
  );
};

export default function Alta() {
  return (
    <NavButtonsWrapper>
      <AltaContainer {...({} as AltaContainerProps)} />
    </NavButtonsWrapper>
  );
}
