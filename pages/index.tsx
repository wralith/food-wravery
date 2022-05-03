import type { NextPage } from "next";
import Head from "next/head";
import MainSearchBar from "../components/MainSearchBar"

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Wravery 🚀</title>
      </Head>
      <div className="app min-h-screen flex text-center justify-center">
        <MainSearchBar />
      </div>
    </>
  );
};

export default Home;
