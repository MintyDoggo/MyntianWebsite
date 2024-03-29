import Head from 'next/head'
import React from 'react'
import Row from '../components/Row'
import FeaturedItem from '../components/FeaturedItem'
import itemData from '../data/ItemData'

const store = () => {
  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>

      <div className='store'>
        <FeaturedItem />
        <Row title="Kontakt Libraries" items={itemData[0]} />
        <Row title="Sample Packs" items={itemData[1]} />
        <Row title="Wavetable Packs" items={itemData[2]} />
      </div>
    </>
  )
}

export default store