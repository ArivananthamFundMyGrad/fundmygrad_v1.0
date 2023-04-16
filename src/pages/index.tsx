import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>fundmygrad</title>
      </Head>
      <Header />
      <Stats />
      <Features />
      <About />
      <Partners />
      <Footer />
    </>
  );
}
