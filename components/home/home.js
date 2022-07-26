import styles from "./home.module.css";
import { Text, Button, Tooltip, Spacer } from "@geist-ui/core";
import { File, Github, Twitter } from "@geist-ui/icons";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.buttonContainer}>
            <Tooltip text={"Github"} placement="top" py={0.6}>
              <Button auto icon={<Github />} scale={2 / 3} px={0.6} />
            </Tooltip>
            <Spacer />
            <Tooltip text={"Resume"} placement="top" py={0.6}>
              <Button auto icon={<File />} scale={2 / 3} px={0.6} />
            </Tooltip>
            <Spacer />
            <Tooltip text={"Twitter"} placement="top" py={0.6}>
              <Button auto icon={<Twitter />} scale={2 / 3} px={0.6} />
            </Tooltip>
          </div>
          <Text
            h6
            margin={0}
            mt={1}
            font="11px"
            style={{
              color: "#999",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Welcome to My Portfolio
          </Text>
          <Text h2 margin={0} pb={1}>
            Ryan Thomas
          </Text>
          <Button type="success" shadow>
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
};
