import styles from "./about.module.css";
import { Text, Spacer, Card, Button, Display } from "@geist-ui/core";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { ChevronsRight } from "@geist-ui/icons";
import { recentTech } from "../../data/recentTech";

export const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Text
            span
            className={styles.code}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            margin={0}
          >
            01.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            About Me
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={3} />
        <div className={styles.flexContainer}>
          <div className={styles.infoContainer}>
            <Text
              p
              style={{ color: theme === "dark" ? "gray" : "GrayText" }}
              className={styles.description}
              margin={0}
              small
            >
              Hello! I&#39;m Ryan, a software developer based out of Dayton,
              Ohio. I really enjoy creating beautiful applications for the web.
              My goal is to build scalable, performant, and user friendly
              applications.
            </Text>
            <Spacer />
            <Text
              small
              style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            >
              Technology I&#39;ve recently been working with:
            </Text>
            <Spacer />
            <div className={styles.techContainer}>
              {recentTech.slice(0, 3).map((tech, index) => {
                return (
                  <div key={index} style={{ width: "100%" }}>
                    <div className={styles.tech}>
                      <ChevronsRight size={14} color="#0070F3" />
                      <Text
                        span
                        font="12px"
                        className={styles.techName}
                        ml={0.3}
                        style={{
                          color: theme === "dark" ? "gray" : "GrayText",
                        }}
                      >
                        {tech}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
            <Spacer h={0.6} />
            <div className={styles.techContainer}>
              {recentTech.slice(3).map((tech, index) => {
                return (
                  <div key={index} style={{ width: "100%" }}>
                    <div className={styles.tech}>
                      <ChevronsRight size={14} color="#0070F3" />
                      <Text
                        span
                        font="12px"
                        className={styles.techName}
                        ml={0.3}
                        style={{
                          color: theme === "dark" ? "gray" : "GrayText",
                        }}
                      >
                        {tech}
                      </Text>
                    </div>
                    <Spacer />
                  </div>
                );
              })}
            </div>
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
