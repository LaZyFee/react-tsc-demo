import React from "react";

type InputProps = React.ComponentProps<"input">;
export const CustomInput = ({ ...rest }: InputProps) => {
  return <input {...rest} />;
};
