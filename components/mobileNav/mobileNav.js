import styles from "./mobileNav.module.css";
import { Drawer, Text, Toggle } from "@geist-ui/core";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import Scroll from "react-scroll";
import { Fade } from "react-reveal";
import { useWindowWidth } from "@react-hook/window-size";

export const MobileNav = ({
  navIsActive,
  setNavIsActive,
  handleThemeChange,
}) => {
  const { theme } = useContext(ThemeContext);
  const scroller = Scroll.scroller;

  const width = useWindowWidth(60);

  const handleScrollTo = (value) => {
    scroller.scrollTo(value, { smooth: true, offset: -50 });
    setNavIsActive(false);
  };

  return (
    <Drawer
      visible={navIsActive}
      onClose={() => setNavIsActive(false)}
      style={{ overflowX: "hidden" }}
    >
      <Drawer.Title>Ryan Thomas</Drawer.Title>
      <Drawer.Subtitle>Site Navigation</Drawer.Subtitle>
      <div className={styles.toggleContainer}>
        <Toggle onChange={handleThemeChange} checked={theme === "dark"} />
      </div>

      <Drawer.Content>
        <Fade cascade right delay={50} ssrReveal>
          <div className={styles.drawerContainer}>
            <Text
              h5
              className={styles.navLink}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
                fontWeight: 400,
              }}
              onClick={() => handleScrollTo("home")}
            >
              Home
            </Text>
            <Text
              h5
              className={styles.navLink}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
                fontWeight: 400,
              }}
              onClick={() => handleScrollTo("about")}
            >
              About me
            </Text>
            <Text
              h5
              className={styles.navLink}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
                fontWeight: 400,
              }}
              onClick={() =>
                handleScrollTo(width > 500 ? "work" : "mobile-work")
              }
            >
              My Work
            </Text>
            <Text
              h5
              className={styles.navLink}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
                fontWeight: 400,
              }}
              onClick={() => handleScrollTo("skills")}
            >
              Skills
            </Text>
            <Text
              h5
              className={styles.navLink}
              style={{
                color: theme === "dark" ? "gray" : "GrayText",
                fontWeight: 400,
              }}
              onClick={() => handleScrollTo("contact")}
            >
              Contact
            </Text>
          </div>
        </Fade>
      </Drawer.Content>
    </Drawer>
  );
};
