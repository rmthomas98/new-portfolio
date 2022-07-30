import styles from "./home.module.css";
import { Text, Button, Tooltip, Spacer } from "@geist-ui/core";
import { File, Github, Twitter } from "@geist-ui/icons";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import Scroll from "react-scroll";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const scroller = Scroll.scroller;

  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Text
            p
            className={styles.code}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            margin={0}
            ml={0.4}
          >
            Welcome, I&#39;m
          </Text>
          <Text h1 className={styles.name} margin={0}>
            Ryan Thomas
          </Text>
          <Text
            h2
            className={styles.header}
            margin={0}
            style={{ color: "transparent" }}
          >
            I build web apps.
          </Text>
          <Text
            p
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            className={styles.description}
          >
            I&#39;m a full stack software developer focusing on building
            exceptional web apps along with many other things.
          </Text>
          <div className={styles.buttonContainer}>
            <Button
              style={{ minWidth: 150 }}
              type="secondary"
              onClick={() =>
                scroller.scrollTo("work", { smooth: true, offset: -50 })
              }
            >
              View Work
            </Button>
            <Spacer />
            <Button
              style={{ minWidth: 150 }}
              onClick={() =>
                scroller.scrollTo("contact", { smooth: true, offset: -50 })
              }
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
