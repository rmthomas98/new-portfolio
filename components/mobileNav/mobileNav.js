import styles from "./mobileNav.module.css";
import { Button, Drawer, Text } from "@geist-ui/core";
import { Home } from "@geist-ui/icons";
import { ThemeContext } from "@geist-ui/core/esm/use-theme/theme-context";
import { useContext } from "react";

export const MobileNav = ({ navIsActive, setNavIsActive }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Drawer visible={navIsActive} onClose={() => setNavIsActive(false)}>
      <Drawer.Title>Ryan Thomas</Drawer.Title>
      <Drawer.Subtitle>Site Navigation</Drawer.Subtitle>
      <Drawer.Content>
        <div className={styles.drawerContainer}>
          <div
            className={styles.linkContainer}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
          >
            <Home size={18} />
            <Text h5 margin={0} ml={0.6}>
              Home
            </Text>
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
