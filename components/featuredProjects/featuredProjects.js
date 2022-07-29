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

export const FeaturedProjects = () => {
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
              shadow
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
                  <Badge scale={2 / 3}>Next.js</Badge>
                  <Spacer w={0.3} />
                  <Badge scale={2 / 3}>PostgreSQL</Badge>
                </div>
                <Divider mt={1.4} mb={1.2} />
                <div className={styles.buttonContainer}>
                  <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
                    <Button
                      scale={2 / 3}
                      iconRight={<Github />}
                      auto
                      px={0.6}
                      margin={0}
                    />
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomEnd" py={0.6}>
                    <Button
                      scale={2 / 3}
                      iconRight={<ExternalLink />}
                      auto
                      px={0.6}
                      margin={0}
                    />
                  </Tooltip>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.infoContainer}>
            <Card
              shadow
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
                    <Button
                      scale={2 / 3}
                      iconRight={<Github />}
                      auto
                      px={0.6}
                      margin={0}
                    />
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomStart" py={0.6}>
                    <Button
                      scale={2 / 3}
                      iconRight={<ExternalLink />}
                      auto
                      px={0.6}
                      margin={0}
                    />
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
              shadow
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
                    <Button
                      scale={2 / 3}
                      iconRight={<Github />}
                      auto
                      px={0.6}
                      margin={0}
                    />
                  </Tooltip>
                  <Spacer w={0.6} />
                  <Tooltip text={"Live"} placement="bottomEnd" py={0.6}>
                    <Button
                      scale={2 / 3}
                      iconRight={<ExternalLink />}
                      auto
                      px={0.6}
                      margin={0}
                    />
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
