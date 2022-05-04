import { NextPage } from "next";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import RestaurantList from "../../components/RestaurantList";

const restaurantsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Restaurants</title>
      </Head>
      <RestaurantList />
    </Layout>
  );
};

export default restaurantsPage;
