import { ThemeContext } from "./ThemeContext";
import { theme } from "./Theme";

type ThemeContextProviderProps = { children: React.ReactNode };

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
