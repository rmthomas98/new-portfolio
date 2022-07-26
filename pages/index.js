import Head from "next/head";
import { Home } from "../components/home/home";
import { Projects } from "../components/projects/projects";

const Main = () => {
  return (
    <div>
      <Head>
        <title>Ryan Thomas | Portfolio</title>
      </Head>
      <Home />
      <Projects />
    </div>
  );
};

export default Main;
