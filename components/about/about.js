import styles from "./about.module.css";
import { Text, Spacer, Card, Button, Display } from "@geist-ui/core";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Text
            span
            className={styles.code}
            style={{ color: "GrayText" }}
            margin={0}
          >
            01.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            About Me
          </Text>
          <Spacer />
          <span className={styles.line}></span>
        </div>
        <Spacer h={3} />
        <div className={styles.flexContainer}>
          <div className={styles.infoContainer}>
            <Text
              p
              style={{ color: "GrayText" }}
              className={styles.description}
              margin={0}
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </div>
          <Spacer />
          <div className={styles.imageContainer}>
            <span className={styles.backgroundBorder}>
              <span
                className={styles.background}
                style={{ background: theme === "dark" ? "#000" : "#fff" }}
              ></span>
            </span>
            <Image
              src="/images/headshot.jpg"
              height={300}
              width={275}
              className={styles.image}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
