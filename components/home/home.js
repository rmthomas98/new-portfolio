import styles from "./home.module.css";
import { Text, Button, Tooltip, Spacer } from "@geist-ui/core";
import { File, Github, Twitter } from "@geist-ui/icons";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import Scroll from "react-scroll";
import { Fade, Bounce } from "react-reveal";
import { useWindowWidth } from "@react-hook/window-size";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const scroller = Scroll.scroller;
  const width = useWindowWidth(60);

  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Fade ssrReveal up>
            <Text
              p
              className={styles.code}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
              }}
              margin={0}
              ml={0.4}
            >
              Welcome, I&#39;m
            </Text>
          </Fade>
          <Fade ssrReveal delay={100} up>
            <Text h1 className={styles.name} margin={0}>
              Ryan Thomas
            </Text>
          </Fade>
          <Fade ssrReveal delay={200} up>
            <Text
              h2
              className={styles.header}
              margin={0}
              style={{ color: "transparent" }}
            >
              I build web apps.
            </Text>
          </Fade>
          <Fade ssrReveal delay={300} up>
            <Text
              p
              style={{ color: theme === "dark" ? "gray" : "GrayText" }}
              className={styles.description}
            >
              I&#39;m a full stack software developer focusing on building
              exceptional web apps along with many other things.
            </Text>
          </Fade>
          <Fade ssrReveal delay={400} up>
            <div className={styles.buttonContainer}>
              <Button
                style={{ minWidth: 150 }}
                type="secondary"
                onClick={() =>
                  scroller.scrollTo(width > 500 ? "work" : "my-work", {
                    smooth: true,
                    offset: -50,
                  })
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
          </Fade>
        </div>
      </div>
    </div>
  );
};
