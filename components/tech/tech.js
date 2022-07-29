import styles from "./tech.module.css";
import { Text, Spacer, Card } from "@geist-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { tech } from "../../data/tech";

export const Tech = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
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
                  <>
                    <Card key={index} style={{ width: "100%" }} shadow py={0.4}>
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
                    {index !== 3 && <Spacer w={3} />}
                  </>
                );
              })}
            </div>
            <div
              className={`${styles.flexContainer} ${styles.flexContainerTwo}`}
            >
              {tech.slice(4, 8).map((tech, index) => {
                return (
                  <>
                    <Card key={index} style={{ width: "100%" }} shadow py={0.4}>
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
                    {index !== 3 && <Spacer w={3} />}
                  </>
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
                  <>
                    <Card key={index} style={{ width: "100%" }} shadow py={0.4}>
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
                    {index !== 3 && <Spacer w={3} />}
                  </>
                );
              })}
            </div>
            <div
              className={`${styles.flexContainer} ${styles.flexContainerTwo}`}
            >
              {tech.slice(12, 16).map((tech, index) => {
                return (
                  <>
                    <Card key={index} style={{ width: "100%" }} shadow py={0.4}>
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
                    {index !== 3 && <Spacer w={3} />}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
