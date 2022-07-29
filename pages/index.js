import Head from "next/head";
import { Home } from "../components/home/home";
import { About } from "../components/about/about";
import { FeaturedProjects } from "../components/featuredProjects/featuredProjects";
import { OtherProjects } from "../components/OtherProjects/OtherProjects";

const Main = () => {
  return (
    <div>
      <Head>
        <title>Ryan Thomas | Web Developer</title>
      </Head>
      <Home />
      <About />
      <FeaturedProjects />
      <OtherProjects />
    </div>
  );
};

export default Main;
