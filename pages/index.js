import Head from "next/head";
import { Home } from "../components/home/home";
import { About } from "../components/about/about";
import { FeaturedProjects } from "../components/featuredProjects/featuredProjects";
import { Projects } from "../components/projects/projects";
import { Tech } from "../components/tech/tech";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";

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
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
