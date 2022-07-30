import styles from "./tech.module.css";
import { Text, Spacer, Card } from "@geist-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { tech } from "../../data/tech";
import { Fade } from "react-reveal";

export const Tech = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper} id="skills">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Text
            span
            className={styles.code}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            margin={0}
          >
            04.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            Some Tech I Use
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={4} />
        <div className={styles.techContainer}>
          <div className={styles.nestedTechContainerOne}>
            <div className={styles.flexContainer}>
              {tech.slice(0, 4).map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={styles.cardWrapper}>
                      <Fade up ssrReveal>
                        <Card
                          style={{ width: "100%" }}
                          shadow={theme === "dark" ? false : true}
                          hoverable
                          py={0.4}
                        >
                          <Card.Content className={styles.cardContentContainer}>
                            {tech.icon}
                            <Text
                              className={styles.name}
                              style={{
                                color: theme === "dark" ? "gray" : "GrayText",
                              }}
                            >
                              {tech.name}
                            </Text>
                          </Card.Content>
                        </Card>
                      </Fade>
                    </div>
                    {index !== 3 && <Spacer w={3} />}
                  </React.Fragment>
                );
              })}
            </div>
            <div
              className={`${styles.flexContainer} ${styles.flexContainerTwo}`}
            >
              {tech.slice(4, 8).map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={styles.cardWrapper}>
                      <Fade up ssrReveal>
                        <Card
                          style={{ width: "100%" }}
                          shadow={theme === "dark" ? false : true}
                          hoverable
                          py={0.4}
                        >
                          <Card.Content className={styles.cardContentContainer}>
                            {tech.icon}
                            <Text
                              className={styles.name}
                              style={{
                                color: theme === "dark" ? "gray" : "GrayText",
                              }}
                            >
                              {tech.name}
                            </Text>
                          </Card.Content>
                        </Card>
                      </Fade>
                    </div>
                    {index !== 3 && <Spacer w={3} />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.nestedTechContainerTwo}>
            <div
              className={`${styles.flexContainer} ${styles.flexContainerThree}`}
            >
              {tech.slice(8, 12).map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={styles.cardWrapper}>
                      <Fade up ssrReveal>
                        <Card
                          style={{ width: "100%" }}
                          shadow={theme === "dark" ? false : true}
                          hoverable
                          py={0.4}
                        >
                          <Card.Content className={styles.cardContentContainer}>
                            {tech.icon}
                            <Text
                              className={styles.name}
                              style={{
                                color: theme === "dark" ? "gray" : "GrayText",
                              }}
                            >
                              {tech.name}
                            </Text>
                          </Card.Content>
                        </Card>
                      </Fade>
                    </div>
                    {index !== 3 && <Spacer w={3} />}
                  </React.Fragment>
                );
              })}
            </div>
            <div
              className={`${styles.flexContainer} ${styles.flexContainerTwo}`}
            >
              {tech.slice(12, 16).map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className={styles.cardWrapper}>
                      <Fade up ssrReveal>
                        <Card
                          style={{ width: "100%" }}
                          py={0.4}
                          shadow={theme === "dark" ? false : true}
                          hoverable
                        >
                          <Card.Content className={styles.cardContentContainer}>
                            {tech.icon}
                            <Text
                              className={styles.name}
                              style={{
                                color: theme === "dark" ? "gray" : "GrayText",
                              }}
                            >
                              {tech.name}
                            </Text>
                          </Card.Content>
                        </Card>
                      </Fade>
                    </div>
                    {index !== 3 && <Spacer w={3} />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
