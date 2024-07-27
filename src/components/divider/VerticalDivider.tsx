import React from "react";

interface DividerProps {
  style?: string;
  variant?: "vertical" | "horizontal";
}
export default function VerticalDivider(props: DividerProps) {
  const style = props.style || "h-[64px]";
  return (
    <div className="w-[10px] ">
      <hr className={`  w-[2px] bg-gray-200  dark:bg-gray-700 ${style}`} />
    </div>
  );
}
