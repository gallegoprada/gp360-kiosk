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
          src="https://gallegoprada360.com/nueva-alta/"
          frameBorder="0"
          allowFullScreen
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
