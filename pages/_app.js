import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useEffect, useState } from "react";
import { Nav } from "../components/nav/nav";
import "../styles/globals.css";
import { ThemeContext } from "../components/themeContext";
import Head from "next/head";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1WCQEG8J7M`}
      ></Script>
      <Script strategy="lazyOnload" id="my-script-2">
        {`window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-1WCQEG8J7M");`}
      </Script>
      <GeistProvider themeType={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Nav theme={theme} setTheme={setTheme} />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </GeistProvider>
    </>
  );
};

export default MyApp;
