import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import MainSearchBar from "../components/MainSearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wravery 🚀</title>
      </Head>
      <Layout>
        <MainSearchBar />
      </Layout>
    </>
  );
};

export default Home;
