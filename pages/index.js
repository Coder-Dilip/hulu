import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/request'
import Image from 'next/image'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Eat watch repeat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="">
          <Header />
          <Nav />
          <Results results={results}/>
        </h1>
    </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  const genre = context.query.genre;

  const req = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json())


  return{
    props: {
      results: req.results
    }
  }

}

