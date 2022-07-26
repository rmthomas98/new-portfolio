import styles from "./projects.module.css";
import { Text, Spacer, Card, Button } from "@geist-ui/core";
import { Code, Link, Github } from "@geist-ui/icons";
import { data } from "../../data/projects";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Text h2 style={{ textAlign: "center" }}>
          My Projects
        </Text>
        <Spacer h={2} />
        <div className={styles.flexContainer}>
          {data.map((project, index) => {
            return (
              <Card shadow>
                <Card.Content>
                  <Text>{project.title}</Text>
                </Card.Content>
                <Card.Footer style={{ justifyContent: "space-between" }}>
                  <Button type="success" auto scale={1 / 2} icon={<Link />}>
                    View Live
                  </Button>
                  <Button
                    type="success"
                    auto
                    ghost
                    scale={1 / 2}
                    margin={0}
                    icon={<Github />}
                    marginRight={0}
                  >
                    View code
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
