import React from "react";

import "./button.css";

export interface Props {
  primary?: boolean;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "md",
  backgroundColor,
  label,
  ...props
}: Props) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
