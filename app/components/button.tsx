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
      className="w-80 h-44 flex flex-col justify-center items-center block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-80"
      passHref
    >
      <Icon className="font-light text-gray-700 dark:text-gray-400 h-14 w-14" />
      <div className="m-2" />
      <div
        className={
          "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        }
      >
        {text}
      </div>
    </Link>
  );
};

export default Button;
