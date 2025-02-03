import React from "react";

type textOenProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type textProps<E extends React.ElementType> = textOenProps<E> &
  Omit<React.ComponentProps<E>, keyof textOenProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: textProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`text-${size} text-${color}`}>{children}</Component>
  );
};
