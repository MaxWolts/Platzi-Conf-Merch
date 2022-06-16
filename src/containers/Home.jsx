import React from 'react';
import Meta from '../components/Meta';
import initialState from "../initialState";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <Meta title="Productos"/>
      <Products products={initialState.products} />
    </>
  );
}

export default Home