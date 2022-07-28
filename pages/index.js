import Head from "next/head";
import { Home } from "../components/home/home";
import { About } from "../components/about/about";
import { FeaturedProjects } from "../components/featuredProjects/featuredProjects";

const Main = () => {
  return (
    <div>
      <Head>
        <title>Ryan Thomas | Web Developer</title>
      </Head>
      <Home />
      <About />
      <FeaturedProjects />
    </div>
  );
};

export default Main;
