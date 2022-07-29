import styles from "./nav.module.css";
import { Text, Tabs, Button, Tooltip, Toggle, Spacer } from "@geist-ui/core";
import { Github, Twitter, Linkedin, Menu } from "@geist-ui/icons";
import { useEffect, useState } from "react";
import { useScrollDirection } from "use-scroll-direction";
import { useWindowWidth } from "@react-hook/window-size";
import { MobileNav } from "../mobileNav/mobileNav";

export const Nav = ({ theme, setTheme }) => {
  const { scrollDirection } = useScrollDirection();
  const [isActive, setIsActive] = useState(true);
  const [navIsActive, setNavIsActive] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (scrollDirection === "UP") {
      setIsActive(true);
    } else if (scrollDirection === "DOWN") {
      setIsActive(false);
    }
  }, [scrollDirection]);

  const handleThemeChange = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          opacity: isActive ? 1 : 0,
          zIndex: isActive ? 9 : -1,
          height: isActive ? 60.33 : 0,
          background: theme === "dark" ? "#000000b7" : "#ffffffb7",
          borderBottom:
            theme === "dark" ? "1px solid #333" : "1px solid #EAEAEA",
        }}
      >
        <div className={styles.container}>
          <Text h4 margin={0}>
            Ryan Thomas
          </Text>
          <div className={styles.centerContainer}>
            <Tabs
              initialValue="html"
              hideDivider
              hideBorder
              style={{ minWidth: 290, overflowY: "hidden" }}
            >
              {/* <Tabs.Item label="Home" value="home"></Tabs.Item> */}
              <Tabs.Item
                label="Work"
                value="work"
                style={{ color: "#fff" }}
                className={styles.tabs}
              ></Tabs.Item>
              <Tabs.Item label="Skills" value="skills"></Tabs.Item>
              <Tabs.Item label="About" value="about"></Tabs.Item>
              <Tabs.Item label="Contact" value="contact"></Tabs.Item>
            </Tabs>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.switchContainer}>
              <Toggle
                mr={1}
                className={styles.switch}
                checked={theme === "dark"}
                scale={0.8}
                onChange={handleThemeChange}
              />
            </div>
            <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
              <a
                href="https://github.com/rmthomas98"
                target="_blank"
                rel="noreferrer"
              >
                <Button icon={<Github />} auto scale={2 / 3} px={0.6} />
              </a>
            </Tooltip>
            <Spacer w={0.4} />
            <Tooltip text={"LinkedIn"} placement="bottomEnd" py={0.6}>
              <a
                href="https://www.linkedin.com/in/ryan-thomas-4b3b961a5/"
                target="_blank"
                rel="noreferrer"
              >
                <Button icon={<Linkedin />} auto scale={2 / 3} px={0.6} />
              </a>
            </Tooltip>
            <Spacer w={0.4} />
            <Tooltip text={"Twitter"} placement="bottomEnd" py={0.6}>
              <a
                href="https://twitter.com/codethematrix"
                target="_blank"
                rel="noreferrer"
              >
                <Button icon={<Twitter />} auto scale={2 / 3} px={0.6} />
              </a>
            </Tooltip>
            <div className={styles.spacerContainer}>
              <Spacer w={0.4} />
            </div>
            <Menu className={styles.menu} />
          </div>
        </div>
      </div>
      {/* <MobileNav navIsActive={navIsActive} setNavIsActive={setNavIsActive} /> */}
    </>
  );
};
