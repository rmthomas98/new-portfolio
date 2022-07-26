import styles from "./nav.module.css";
import { Text, Tabs, Button, Tooltip, Toggle } from "@geist-ui/core";
import { Github, File, Twitter, Divider } from "@geist-ui/icons";

export const Nav = ({ theme, setTheme }) => {
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
              style={{ minWidth: 280, overflowY: "hidden" }}
            >
              {/* <Tabs.Item label="Home" value="home"></Tabs.Item> */}
              <Tabs.Item label="Projects" value="projects"></Tabs.Item>
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
              onChange={(e) =>
                e.target.checked ? setTheme("dark") : setTheme("light")
              }
            />
            <Tooltip text={"Github"} placement="bottomEnd" py={0.6}>
              <Button icon={<Github />} auto scale={2 / 3} px={0.6} mr={0.5} />
            </Tooltip>
            <Tooltip text={"Resume"} placement="bottomEnd" py={0.6}>
              <Button icon={<File />} auto scale={2 / 3} px={0.6} />
            </Tooltip>
            {/* <Tooltip text={"Twitter"} placement="bottomEnd">
              <Button icon={<Twitter />} auto scale={2 / 3} px={0.6} />
            </Tooltip> */}
          </div>
        </div>
      </div>
    </>
  );
};
