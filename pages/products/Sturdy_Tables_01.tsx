import Head from 'next/head'
import React from 'react'
import ItemSlider from '../../components/ItemSlider'
import ProductNavbar from '../../components/ProductNavbar'

const Sturdy_Tables_01 = () => {
  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>
      <ItemSlider/>
      <ProductNavbar position="absolute" link="https://www.mediafire.com/file/y95o128iau4dl60/Myntian_Sturdy_Tables_1.zip/file"/>

    </>
  )
}

export default Sturdy_Tables_01