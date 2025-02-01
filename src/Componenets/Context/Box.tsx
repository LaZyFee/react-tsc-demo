import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.Primary.main }}>
      <h2 style={{ color: theme.Primary.Text }}>Theme Context</h2>
    </div>
  );
};
