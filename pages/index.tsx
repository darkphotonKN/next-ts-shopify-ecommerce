import type { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';

import getAllProducts from '../framework/shopify/product/get-all-products';

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 60 * 5, // automatically revalidates data every 5 minutes
  };
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      Home
      <div>
        <ul>{JSON.stringify(products, null, 4)}</ul>
      </div>
    </div>
  );
};

export default Home;
