import React from "react";
import VerticalDivider from "./VerticalDivider";

interface DividerProps {
  style?: string;
  variant?: "vertical" | "horizontal";
}
export default function Divider(props: DividerProps) {
  const { style } = props;
  const variant = props.variant || "horizontal";
  if (variant === "horizontal") {
    return (
      <hr
        className={`w-full h-[2px] mt-4 bg-gray-200 border-1 dark:bg-gray-700  ${style}`}
      />
    );
  }
  return <VerticalDivider style={style}/>;
}
