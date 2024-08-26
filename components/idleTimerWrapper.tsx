"use client";

import React, { useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useRouter } from "next/navigation";

const IdleTimerComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const handleOnIdle = () => {
    console.log("User is idle");
    router.push("/");
  };

  const idleTimer = useIdleTimer({
    // timeout: 1000 * 60 * 2, // 2 minutes in milliseconds
    timeout: 1000 * 2,
    onIdle: handleOnIdle,
    onActive: () => {
      console.log("User is active");
    },
    debounce: 500,
  });

  return <div>{children}</div>;
};

export default IdleTimerComponent;
