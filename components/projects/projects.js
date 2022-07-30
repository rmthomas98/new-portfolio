import styles from "./projects.module.css";
import { Text, Spacer, Card, Button, Badge, Tooltip } from "@geist-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { data } from "../../data/projects";
import { ExternalLink, Folder, Github } from "@geist-ui/icons";
import { Fade } from "react-reveal";

export const Projects = () => {
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
            03.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            Other Projects
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={4} />
        <div className={styles.projectContainer}>
          <div className={styles.flexContainer}>
            {data.slice(0, 3).map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={styles.cardWrapper}>
                    <Fade up ssrReveal>
                      <Card
                        className={styles.cardContainer}
                        shadow={theme === "dark" ? false : true}
                        hoverable
                      >
                        <Card.Content>
                          <Text
                            className={styles.code}
                            font="12px"
                            style={{
                              color: theme === "dark" ? "gray" : "GrayText",
                            }}
                          >
                            {project.title}
                          </Text>
                          <div className={styles.nameContainer}>
                            <Folder color="#0070F3" />
                            <Text margin={0} ml={0.6} h5>
                              {project.name}
                            </Text>
                          </div>
                          <Spacer />
                          <Text
                            small
                            font="12px"
                            style={{
                              color: theme === "dark" ? "gray" : "GrayText",
                              minHeight: "200px !important",
                            }}
                          >
                            {project.description}
                          </Text>
                          <div className={styles.badgeContainer}>
                            {project.stack.map((tech, index) => {
                              return (
                                <Badge scale={1 / 2} key={index} mr={0.4}>
                                  {tech}
                                </Badge>
                              );
                            })}
                          </div>
                          <div className={styles.buttonContainer}>
                            <Tooltip
                              text={"Github"}
                              placement="bottom"
                              color="invert"
                              py={0.6}
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button
                                  auto
                                  icon={<Github />}
                                  scale={1 / 2}
                                  px={0.6}
                                />
                              </a>
                            </Tooltip>
                            <Spacer w={0.6} />
                            <Tooltip
                              text={"Live"}
                              placement="bottom"
                              color="invert"
                              py={0.6}
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button
                                  auto
                                  icon={<ExternalLink />}
                                  scale={1 / 2}
                                  px={0.6}
                                />
                              </a>
                            </Tooltip>
                          </div>
                        </Card.Content>
                      </Card>
                    </Fade>
                  </div>
                  {index !== 2 && <Spacer w={3} />}
                </React.Fragment>
              );
            })}
          </div>
          <div className={`${styles.flexContainer} ${styles.flexTwo}`}>
            {data.slice(3).map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={styles.cardWrapper}>
                    <Fade up ssrReveal>
                      <Card
                        className={styles.cardContainer}
                        shadow={theme === "dark" ? false : true}
                        hoverable
                      >
                        <Card.Content>
                          <Text
                            className={styles.code}
                            font="12px"
                            style={{
                              color: theme === "dark" ? "gray" : "GrayText",
                            }}
                          >
                            {project.title}
                          </Text>
                          <div className={styles.nameContainer}>
                            <Folder color="#0070F3" />
                            <Text margin={0} ml={0.6} h5>
                              {project.name}
                            </Text>
                          </div>
                          <Spacer />
                          <Text
                            small
                            font="12px"
                            style={{
                              color: theme === "dark" ? "gray" : "GrayText",
                              minHeight: "200px !important",
                            }}
                          >
                            {project.description}
                          </Text>
                          <div className={styles.badgeContainer}>
                            {project.stack.map((tech, index) => {
                              return (
                                <Badge scale={1 / 2} key={index} mr={0.4}>
                                  {tech}
                                </Badge>
                              );
                            })}
                          </div>
                          <div className={styles.buttonContainer}>
                            <Tooltip
                              text={"Github"}
                              placement="bottom"
                              color="invert"
                              py={0.6}
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button
                                  auto
                                  icon={<Github />}
                                  scale={1 / 2}
                                  px={0.6}
                                />
                              </a>
                            </Tooltip>
                            <Spacer w={0.6} />
                            <Tooltip
                              text={"Live"}
                              placement="bottom"
                              color="invert"
                              py={0.6}
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button
                                  auto
                                  icon={<ExternalLink />}
                                  scale={1 / 2}
                                  px={0.6}
                                />
                              </a>
                            </Tooltip>
                          </div>
                        </Card.Content>
                      </Card>
                    </Fade>
                  </div>
                  {index !== 2 && <Spacer w={3} />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
