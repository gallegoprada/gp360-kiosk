import React, { ComponentType } from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  heroIcon: ComponentType<{ className?: string }>;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, heroIcon: Icon, link }) => {
  return (
    <Link
      href={link}
      className="w-96 h-48 flex flex-col justify-center items-center block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  opacity-80"
      passHref
    >
      <Icon className="font-light text-gray-700  h-14 w-14" />
      <div className="m-2" />
      <div className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 "}>
        {text}
      </div>
    </Link>
  );
};

export default Button;
