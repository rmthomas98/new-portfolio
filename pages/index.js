import Head from "next/head";
import { Home } from "../components/home/home";
import { About } from "../components/about/about";

const Main = () => {
  return (
    <div>
      <Head>
        <title>Ryan Thomas | Web Developer</title>
      </Head>
      <Home />
      <About />
    </div>
  );
};

export default Main;
