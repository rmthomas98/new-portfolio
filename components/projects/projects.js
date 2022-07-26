import styles from "./projects.module.css";
import { Text, Spacer, Card, Button } from "@geist-ui/core";
import { Code, Link } from "@geist-ui/icons";

export const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Text h2 style={{ textAlign: "center" }}>
          My Projects
        </Text>
        <Spacer h={2} />
        <div className={styles.flexContainer}>
          <Card shadow>
            <Card.Footer style={{ justifyContent: "space-between" }}>
              <Button type="success" auto scale={1 / 3} icon={<Link />}>
                View Live
              </Button>
              <Button
                type="success"
                auto
                ghost
                scale={1 / 3}
                margin={0}
                icon={<Code />}
                marginRight={0}
              >
                View code
              </Button>
            </Card.Footer>
          </Card>
          <Card shadow>
            <Card.Footer>
              <Button type="success" auto scale={1 / 3} icon={<Link />}>
                View Live
              </Button>
              <Spacer w={0.4} />
              <Button
                type="success"
                auto
                ghost
                scale={1 / 3}
                margin={0}
                icon={<Code />}
              >
                View code
              </Button>
            </Card.Footer>
          </Card>
          <Card shadow>
            <Card.Footer>
              <Button type="success" auto scale={1 / 3} icon={<Link />}>
                View Live
              </Button>
              <Spacer w={0.4} />
              <Button
                type="success"
                auto
                ghost
                scale={1 / 3}
                margin={0}
                icon={<Code />}
              >
                View code
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};
