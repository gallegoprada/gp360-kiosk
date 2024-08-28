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
        className="flex flex-col justify-center items-center"
      >
        <img src="/Kids_cat_horiz.jpg" alt="Logo" />
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
