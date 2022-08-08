import styles from "./mobileFeatured.module.css";
import { Text, Spacer, Card, Badge, Button } from "@geist-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { featured } from "../../data/featured";
import Image from "next/image";
import { Github, ExternalLink } from "@geist-ui/icons";
import { Fade } from "react-reveal";

export const MobileFeatured = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper} id="mobile-work">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Text
            span
            className={styles.code}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            margin={0}
          >
            02.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            Featured Work
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={4} />
        {featured.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Fade ssrReveal up>
                <Card hoverable shadow={theme === "dark" ? false : true}>
                  <Image
                    src={
                      theme === "dark"
                        ? project.images.light
                        : project.images.dark
                    }
                    alt={project.title}
                    className={styles.image}
                    width={500}
                    height={300}
                  />
                  <Card.Content>
                    <Text className={styles.title} h5>
                      {project.title}
                    </Text>
                    <Text
                      p
                      className={styles.descriptionText}
                      style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                      mt={0}
                    >
                      {project.description}
                    </Text>
                    <div className={styles.badgeContainer}>
                      {project.tech.map((tech, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Badge scale={1 / 2} mb={0.4}>
                              {tech}
                            </Badge>
                            <Spacer w={0.3} />
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </Card.Content>
                  <Card.Footer>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.github && (
                        <Button scale={2 / 3} icon={<Github />} auto>
                          Github
                        </Button>
                      )}
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <Button scale={2 / 3} icon={<ExternalLink />} auto>
                        Live
                      </Button>
                    </a>
                  </Card.Footer>
                </Card>
                <Spacer h={2} />
              </Fade>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
