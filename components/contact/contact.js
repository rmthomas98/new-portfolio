import styles from "./contact.module.css";
import {
  Text,
  Spacer,
  Card,
  Button,
  Input,
  Textarea,
  useToasts,
} from "@geist-ui/core";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext";
import { Mail, Phone, Send } from "@geist-ui/icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, Fade } from "react-reveal";

export const Contact = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const { setToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = async (data) => {
    setIsLoading(true);
    const response = await axios.post("/api/send-message", data);
    if (response.data === "success") {
      reset();
      setIsLoading(false);
      setToast({
        type: "success",
        text: "Message sent successfully!",
        delay: 6000,
      });
    } else {
      setIsLoading(false);
      setToast({
        type: "error",
        text: "Error sending message!",
        delay: 6000,
      });
    }
  };

  return (
    <div className={styles.wrapper} id="contact">
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
          <div className={styles.cardWrapper}>
            <Fade up ssrReveal>
              <Card
                shadow={theme === "dark" ? false : true}
                hoverable
                style={{ width: "100%" }}
              >
                <Card.Content className={styles.cardContentContainer}>
                  <Mail />
                  <Text
                    className={styles.name}
                    style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                  >
                    ryanmthomas01@gmail.com
                  </Text>
                  <a href="mailto:ryanmthomas01@gmail.com">
                    <Button scale={1 / 2}>Send Message</Button>
                  </a>
                </Card.Content>
              </Card>
            </Fade>
          </div>
          <Spacer w={2} />
          <div className={styles.cardWrapper}>
            <Fade up ssrReveal>
              <Card
                shadow={theme === "dark" ? false : true}
                hoverable
                style={{ width: "100%" }}
              >
                <Card.Content className={styles.cardContentContainer}>
                  <Phone />
                  <Text
                    className={styles.name}
                    style={{ color: theme === "dark" ? "gray" : "GrayText" }}
                  >
                    (937)-789-8988
                  </Text>
                  <a href="tel:9377898988">
                    <Button scale={1 / 2}>Call Now</Button>
                  </a>
                </Card.Content>
              </Card>
            </Fade>
          </div>
        </div>
        <Spacer h={2} />
        <Fade up ssrReveal>
          <Text
            style={{
              textAlign: "center",
              // color: theme === "dark" ? "gray" : "GrayText",
            }}
            className={styles.name}
          >
            Send Direct Message
          </Text>
        </Fade>
        <Spacer />
        <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
          <div className={styles.formFlexContainer}>
            <div className={styles.inputContainer}>
              <Fade up ssrReveal>
                <Input
                  htmlType="text"
                  placeholder="Your Name"
                  width="100%"
                  {...register("name", { required: true })}
                />
                <Text
                  font="12px"
                  type="error"
                  className={styles.error}
                  style={{ opacity: errors.name ? 1 : 0 }}
                >
                  * Please enter your name
                </Text>
              </Fade>
            </div>
            <Spacer w={2} h={2} />
            <div className={styles.inputContainer}>
              <Fade up ssrReveal>
                <Input
                  htmlType="email"
                  placeholder="Your Email"
                  width="100%"
                  {...register("email", { required: true })}
                />
                <Text
                  font="12px"
                  type="error"
                  className={styles.error}
                  style={{ opacity: errors.email ? 1 : 0 }}
                >
                  * Please enter your email
                </Text>
              </Fade>
            </div>
          </div>
          <Spacer h={2} />
          <div className={styles.inputContainer}>
            <Fade up ssrReveal>
              <Textarea
                placeholder="Your message"
                width="100%"
                height={8}
                {...register("message", { required: true })}
              />
              <Text
                font="12px"
                type="error"
                className={`${styles.error} ${styles.messageError}`}
                style={{ opacity: errors.message ? 1 : 0 }}
              >
                * Please enter a message
              </Text>
            </Fade>
          </div>
          <Spacer h={2} />
          <Fade ssrReveal up>
            <Button
              auto
              htmlType="submit"
              type="secondary"
              iconRight={<Send />}
              loading={isLoading}
              disabled={isLoading}
            >
              Send Message
            </Button>
          </Fade>
        </form>
      </div>
    </div>
  );
};
