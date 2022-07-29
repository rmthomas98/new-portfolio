import Head from "next/head";
import { Home } from "../components/home/home";
import { About } from "../components/about/about";
import { FeaturedProjects } from "../components/featuredProjects/featuredProjects";
import { Projects } from "../components/projects/projects";

const Main = () => {
  return (
    <div>
      <Head>
        <title>Ryan Thomas | Web Developer</title>
      </Head>
      <Home />
      <About />
      <FeaturedProjects />
      <Projects />
    </div>
  );
};

export default Main;
