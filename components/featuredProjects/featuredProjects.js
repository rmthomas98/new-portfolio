import styles from "./featuredProjects.module.css";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import {
  Text,
  Spacer,
  Card,
  Button,
  Badge,
  Tooltip,
  Divider,
} from "@geist-ui/core";
import Image from "next/image";
import { Github, ExternalLink } from "@geist-ui/icons";
import { featured } from "../../data/featured";
import React from "react";

export const FeaturedProjects = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper} id="work">
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
        <div className={styles.projectContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={
                theme === "dark"
                  ? "/images/assistantai.PNG"
                  : "/images/assistantai-dark.PNG"
              }
              alt="assistantai"
              height={280}
              width={460}
            />
          </div>
          <div className={styles.infoContainer}>
            <Card
              shadow={theme === "dark" ? false : true}
              hoverable
              className={`${styles.descriptionOne} ${styles.description}`}
            >
              <Card.Content>
                <Text
                  className={styles.title}
                  h5
                  // style={{ textAlign: "right" }}
                >
                  AssistantAI
                </Text>
                <Text
                  p
                  className={styles.descriptionText}
                  style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                  mt={0}
                >
                  Assistant AI is an application that can assist you in writing
                  better tweets with the power of AI. You can also send tweets
                  and threads.
                </Text>
                <div className={styles.badgeContainer}>
                  {featured[0].tech.map((tech, index) => {
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
                <Divider mt={1.4} mb={1.2} />
                <div className={styles.buttonContainer}>
                  <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
                    <a
                      href="https://github.com/rmthomas98/assistantai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<Github />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomEnd" py={0.6}>
                    <a
                      href="https://assistantai.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<ExternalLink />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.infoContainer}>
            <Card
              shadow={theme === "dark" ? false : true}
              hoverable
              className={`${styles.description} ${styles.descriptionTwo}`}
            >
              <Card.Content>
                <Text
                  className={styles.title}
                  h5
                  // style={{ textAlign: "right" }}
                >
                  Accounts Receivable
                </Text>
                <Text
                  p
                  className={styles.descriptionText}
                  style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                  mt={0}
                >
                  This was made for a company that was looking for a way to keep
                  track of their accounts receivable while saving time.
                </Text>
                <div className={styles.badgeContainerTwo}>
                  <Badge scale={2 / 3}>Next.js</Badge>
                  <Spacer w={0.3} />
                  <Badge scale={2 / 3}>MongoDB</Badge>
                </div>
                <Divider mt={1.4} mb={1.2} />
                <div className={styles.buttonContainerTwo}>
                  <Tooltip text={"Github"} placement="bottomStart" py={0.6}>
                    <a
                      href="https://github.com/rmthomas98/aoneadmin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<Github />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomStart" py={0.6}>
                    <a
                      href="https://aoneadmin.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<ExternalLink />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                </div>
              </Card.Content>
            </Card>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={
                theme === "dark" ? "/images/aone-light.PNG" : "/images/aone.PNG"
              }
              alt="accounts receivable"
              height={280}
              width={460}
            />
          </div>
        </div>
        <div
          className={`${styles.projectContainer} ${styles.lastProjectContainer}`}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/images/skyyon.PNG"
              alt="skyyon"
              height={280}
              width={460}
            />
          </div>
          <div className={styles.infoContainer}>
            <Card
              shadow={theme === "dark" ? false : true}
              hoverable
              className={`${styles.descriptionOne} ${styles.description}`}
            >
              <Card.Content>
                <Text
                  className={styles.title}
                  h5
                  // style={{ textAlign: "right" }}
                >
                  Skyyon Liquor
                </Text>
                <Text
                  p
                  className={styles.descriptionText}
                  style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                  mt={0}
                >
                  I was contracted out to build the backend for this website.
                  Signup, login, email verification, and password reset were
                  integrated.
                </Text>
                <div className={styles.badgeContainer}>
                  <Badge scale={2 / 3}>Node.js</Badge>
                  <Spacer w={0.3} />
                  <Badge scale={2 / 3}>PostgreSQL</Badge>
                </div>
                <Divider mt={1.4} mb={1.2} />
                <div className={styles.buttonContainer}>
                  <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
                    <a
                      href="https://github.com/rmthomas98/skyyon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<Github />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomEnd" py={0.6}>
                    <a
                      href="https://skyyon.herokuapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        scale={2 / 3}
                        iconRight={<ExternalLink />}
                        auto
                        px={0.6}
                        margin={0}
                      />
                    </a>
                  </Tooltip>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
