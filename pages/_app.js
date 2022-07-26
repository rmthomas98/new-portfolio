import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useState } from "react";
import { Nav } from "../components/nav/nav";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Nav theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default MyApp;
