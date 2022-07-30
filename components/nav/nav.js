import styles from "./nav.module.css";
import { Text, Tabs, Button, Tooltip, Toggle, Spacer } from "@geist-ui/core";
import { Github, Twitter, Linkedin, Menu } from "@geist-ui/icons";
import { useEffect, useState } from "react";
import { useScrollDirection } from "use-scroll-direction";
import { useWindowWidth } from "@react-hook/window-size";
import { MobileNav } from "../mobileNav/mobileNav";
import Scroll from "react-scroll";
import useScrollPosition from "@react-hook/window-scroll";

export const Nav = ({ theme, setTheme }) => {
  const { scrollDirection } = useScrollDirection();
  const [isActive, setIsActive] = useState(true);
  const [navIsActive, setNavIsActive] = useState(false);
  const scroller = Scroll.scroller;
  const scrollPos = useScrollPosition(60);

  useEffect(() => {
    if (scrollDirection === "UP") {
      setIsActive(true);
    } else if (scrollDirection === "DOWN" && scrollPos > 60) {
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
          <Text
            h4
            margin={0}
            style={{ cursor: "pointer" }}
            onClick={() => scroller.scrollTo("home", { smooth: true })}
          >
            Ryan Thomas
          </Text>
          <div className={styles.centerContainer}>
            <Tabs
              initialValue="html"
              hideDivider
              hideBorder
              style={{ minWidth: 290, overflowY: "hidden" }}
              onChange={(value) => {
                scroller.scrollTo(value, { smooth: true, offset: -50 });
              }}
            >
              {/* <Tabs.Item label="Home" value="home"></Tabs.Item> */}
              <Tabs.Item
                label="Work"
                value="work"
                className={styles.tabs}
              ></Tabs.Item>
              <Tabs.Item label="Skills" value="skills"></Tabs.Item>
              <Tabs.Item
                label="About"
                value="about"
                onClick={() => console.log("hello")}
              ></Tabs.Item>
              <Tabs.Item label="Contact" value="contact"></Tabs.Item>
            </Tabs>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.switchContainer}>
              <Toggle
                mr={1}
                className={styles.switch}
                checked={theme === "dark"}
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
              <Spacer w={0.6} />
            </div>
            <Menu
              className={styles.menu}
              onClick={() => setNavIsActive(true)}
            />
          </div>
        </div>
      </div>
      <MobileNav
        navIsActive={navIsActive}
        setNavIsActive={setNavIsActive}
        handleThemeChange={handleThemeChange}
      />
    </>
  );
};
