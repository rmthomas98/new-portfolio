import styles from "./otherProjects.module.css";
import { Text, Spacer, Card } from "@geist-ui/core";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import { Folder } from "@geist-ui/icons";

const data = [
  {
    title: "001",
    name: "MiniDoodles",
    description:
      "I made this webiste for a client who wanted to have a website where they would be able to show their dogs.",
    stack: ["React", "CSS"],
    link: "https://cloversminigoldendoodles.com",
    github: "https://github.com/rmthomas98/cloversminigoldendoodles",
  },
  {
    title: "002",
    name: "Dashboard",
    description: "I made this small web app with a big focus on the UI.",
    stack: ["React", "Tailwind CSS"],
    link: "https://adoring-cray-0da24f.netlify.app/",
    github: "https://github.com/rmthomas98/dashboard",
  },
  {
    title: "003",
    name: "Darkpine",
    description:
      "This is a simple landing page with a pricing page and sign up form.",
    stack: ["Next.js", "Node.js", "MongoDB", "CSS"],
    link: "https://darkpine.io",
    github: "https://github.com/rmthomas98/darkpine",
  },
  {
    title: "004",
    name: "Platinum Powerwashing",
    description:
      "I made this website for a client who wanted a website for their business.",
    stack: ["Next.js", "Node.js", "CSS"],
    link: "https://platinumpowerwashing.io",
    github: "https://github.com/rmthomas98/powerwashing",
  },
  {
    title: "005",
    name: "TradeClub",
    description:
      "This was an existing website that I redid and made imporovements on.",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://tradeclub.vercel.net",
    github: "https://github.com/rmthomas98/tradeclub",
  },
  {
    title: "006",
    name: "Movie Explorer",
    description:
      "I made this website using the IMDb REST API, you can search for movies and see their details.",
    stack: ["React", "CSS"],
    link: "https://affectionate-hypatia-176903.netlify.app/",
    github: "https://github.com/rmthomas98/movies",
  },
];

export const OtherProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Text
            span
            className={styles.code}
            style={{ color: theme === "dark" ? "gray" : "GrayText" }}
            margin={0}
          >
            03.
          </Text>
          <Spacer />
          <Text h3 className={styles.header} margin={0}>
            Other Projects
          </Text>
          <Spacer />
          <span
            className={styles.line}
            // style={{ background: theme === "dark" ? "#333" : "#EAEAEA" }}
            style={{ background: theme === "dark" ? "#0070F3" : "#3291FF" }}
          ></span>
        </div>
        <Spacer h={4} />
        <div className={styles.mainFlexContainer}>
          <div className={styles.flexContainer}>
            {data.slice(0, 3).map((project, index) => {
              return (
                <Card
                  key={index}
                  shadow
                  style={{ width: "100%", marginRight: index !== 2 ? 10 : 0 }}
                  className={styles.card}
                >
                  <Card.Content>
                    <Text
                      p
                      small
                      style={{
                        color: theme === "dark" ? "gray" : "GrayText",
                        fontFamily: '"Space Mono", monospace',
                      }}
                      className={styles.title}
                    >
                      {project.title}
                    </Text>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
