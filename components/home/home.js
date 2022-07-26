import styles from "./home.module.css";
import { Text, Button, Tooltip, Spacer } from "@geist-ui/core";
import { File, Github, Twitter } from "@geist-ui/icons";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}></div>
    </div>
  );
};
