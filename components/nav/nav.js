import styles from "./nav.module.css";
import { Text, Tabs, Button, Tooltip, Toggle, Spacer } from "@geist-ui/core";
import { Github, Twitter, Linkedin } from "@geist-ui/icons";

export const Nav = ({ theme, setTheme }) => {
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
      <div className={styles.wrapper}>
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
            <Toggle
              mr={1}
              className={styles.switch}
              checked={theme === "dark"}
              scale={0.8}
              onChange={handleThemeChange}
            />
            <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
              <Button icon={<Github />} auto scale={2 / 3} px={0.6} />
            </Tooltip>
            <Spacer w={0.4} />
            <Tooltip text={"LinkedIn"} placement="bottomEnd" py={0.6}>
              <Button icon={<Linkedin />} auto scale={2 / 3} px={0.6} />
            </Tooltip>
            {/* <Spacer w={0.4} />
            <Tooltip text={"Resume"} placement="bottomEnd" py={0.6}>
              <Button icon={<File />} auto scale={2 / 3} px={0.6} />
            </Tooltip> */}
            <Spacer w={0.4} />
            <Tooltip text={"Twitter"} placement="bottomEnd" py={0.6}>
              <Button icon={<Twitter />} auto scale={2 / 3} px={0.6} />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
