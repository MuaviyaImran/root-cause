import React from "react";
type props = {
  title: string;
  bgColor?: string;
  filled?: boolean;
  children?: React.ReactNode;
};
const BaseButton = ({ title, filled, children, bgColor }: props) => {
  console.log(title, filled, children, bgColor);
  return (
    <button
      className={`md:px-6 px-4 hover:bg-slate-400 text-xs md:text-sm w-fit py-3 border items-center border-black uppercase flex gap-4 ${
        filled ? `${bgColor}` : "bg-transparent"
      }`}
    >
      {title}
      {children ? <div className="icon text-white">{children}</div> : null}
    </button>
  );
};

export default BaseButton;
