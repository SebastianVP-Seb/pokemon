import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.scss'
import CardList from '../components/CardList';
import Header from '../components/Header';
import Search from '../components/Search';
import useFetch from '../customHooks/useFetch';

export default function Home({data}) {

  return (
    <div className={styles.container}>

      {/* <Header /> */}

      <Search data={data} />

      {/* <CardList data={data} /> */}

    </div>
  );
};

export async function getStaticProps(context) {
    
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1120`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  };

  return {
    props: { data }, // will be passed to the page component as props
  };
};
