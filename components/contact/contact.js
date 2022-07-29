import styles from "./contact.module.css";
import { Text, Spacer, Card, Button, Input, Textarea } from "@geist-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { Mail, Phone, Send } from "@geist-ui/icons";

export const Contact = () => {
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
            05.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            Get In Touch
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={4} />
        <div className={styles.flexContainer}>
          <Card shadow style={{ width: "100%" }}>
            <Card.Content className={styles.cardContentContainer}>
              <Mail />
              <Text
                className={styles.name}
                style={{ color: theme === "dark" ? "gray" : "GrayText" }}
              >
                ryanmthomas01@gmail.com
              </Text>
              <Button scale={1 / 2}>Send Message</Button>
            </Card.Content>
          </Card>
          <Spacer w={2} />
          <Card shadow style={{ width: "100%" }}>
            <Card.Content className={styles.cardContentContainer}>
              <Phone />
              <Text
                className={styles.name}
                style={{ color: theme === "dark" ? "gray" : "GrayText" }}
              >
                (937)-789-8988
              </Text>
              <Button scale={1 / 2}>Call Now</Button>
            </Card.Content>
          </Card>
        </div>
        <Spacer h={2} />
        <Text
          style={{
            textAlign: "center",
            color: theme === "dark" ? "gray" : "GrayText",
          }}
          className={styles.name}
        >
          Send Direct Message
        </Text>
        <Spacer />
        <form className={styles.formContainer}>
          <div className={styles.formFlexContainer}>
            <Input htmlType="text" placeholder="Your Name" width="100%" />
            <Spacer w={2} />
            <Input htmlType="email" placeholder="Your Email" width="100%" />
          </div>
          <Spacer h={2} />
          <Textarea placeholder="Your message" width="100%" height={8} />
          <Spacer h={2} />
          <Button auto htmlType="submit" type="secondary" iconRight={<Send />}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};
