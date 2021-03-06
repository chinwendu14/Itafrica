// import Head from "next/head";
// import Image from "next/image";
import Header from "../components/header/Header";
import Banner from "./components/banner.js/Banner";
import styles from "../styles/Home.module.css";
import PeopleMillion from "./components/peopleMillions/PeopleMillion";
import BestFit from "./components/bestFit/BestFit";
import Tools from "./components/tools/Tools";
import Needs from "./components/needs/Needs";
import Solution from "./components/solution/Solution";
import Contact from "./components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <div className={styles.homepage}>
        <Banner />
        <PeopleMillion />
        <BestFit />
        <Tools />
        <Needs />
        <Solution />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
