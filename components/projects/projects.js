import styles from "./projects.module.css";
import { Text, Spacer, Card, Button, Badge } from "@geist-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { data } from "../../data/projects";
import { ExternalLink, Folder, Github } from "@geist-ui/icons";

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
                <>
                  <Card key={index} className={styles.cardContainer} shadow>
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
                        <Button auto icon={<Github />} scale={1 / 2} px={0.6} />
                        <Spacer w={0.6} />
                        <Button
                          auto
                          icon={<ExternalLink />}
                          scale={1 / 2}
                          px={0.6}
                        />
                      </div>
                    </Card.Content>
                  </Card>
                  {index !== 2 && <Spacer w={3} />}
                </>
              );
            })}
          </div>
          <div className={`${styles.flexContainer} ${styles.flexTwo}`}>
            {data.slice(3).map((project, index) => {
              return (
                <>
                  <Card key={index} className={styles.cardContainer} shadow>
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
                        <Button auto icon={<Github />} scale={1 / 2} px={0.6} />
                        <Spacer w={0.6} />
                        <Button
                          auto
                          icon={<ExternalLink />}
                          scale={1 / 2}
                          px={0.6}
                        />
                      </div>
                    </Card.Content>
                  </Card>
                  {index !== 2 && <Spacer w={3} />}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
