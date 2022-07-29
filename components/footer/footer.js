import styles from "./footer.module.css";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { Button, Spacer, Text } from "@geist-ui/core";
import { Github, Linkedin, Twitter } from "@geist-ui/icons";

export const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.wrapper}
      style={{
        borderTop: theme === "dark" ? "1px solid #333" : "1px solid #EAEAEA",
      }}
    >
      <div className={styles.container}>
        <Text h4 margin={0}>
          Ryan Thomas
        </Text>
        {/* <Text
          font="12px"
          style={{
            color: theme === "dark" ? "gray" : "GrayText",
          }}
          margin={0}
        >
          &copy; Ryan 2022
        </Text> */}
        <div className={styles.buttonContainer}>
          <Button icon={<Github />} auto scale={1 / 2} px={0.6} />
          <Spacer w={0.4} />
          <Button icon={<Linkedin />} auto scale={1 / 2} px={0.6} />
          <Spacer w={0.4} />
          <Button icon={<Twitter />} auto scale={1 / 2} px={0.6} />
        </div>
      </div>
    </div>
  );
};
