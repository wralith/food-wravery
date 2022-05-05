import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import MainSearchBar from "../components/MainSearchBar";
import RestaurantCard from "../components/RestaurantCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wravery 🚀</title>
      </Head>
      <Layout>
        <div id="app" className="w-[95%] lg:w-1/2 flex flex-col justify-start gap-3 m-auto mb-10 ">
          <MainSearchBar />
          <div className="flex flex-col gap-5 lg:flex-row flex-wrap justify-center">
          <RestaurantCard product="burger" />
          <RestaurantCard product="pizza" />
          <RestaurantCard product="drink" />
          <RestaurantCard product="burger" />
          <RestaurantCard product="pizza" />
          <RestaurantCard product="burger" />
          </div>
          
          
        </div>
      </Layout>
    </>
  );
};

export default Home;
