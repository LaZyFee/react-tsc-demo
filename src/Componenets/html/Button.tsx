import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button {...rest} className={`btn btn-${variant}`}>
        {children}
      </button>
    </div>
  );
};
