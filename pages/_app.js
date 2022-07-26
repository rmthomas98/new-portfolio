import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useEffect, useState } from "react";
import { Nav } from "../components/nav/nav";
import "../styles/globals.css";
import { ThemeContext } from "../components/themeContext";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Nav theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </GeistProvider>
  );
};

export default MyApp;
