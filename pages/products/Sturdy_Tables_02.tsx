import Head from 'next/head'
import React from 'react'
import ItemSlider from '../../components/ItemSlider'
import ProductNavbar from '../../components/ProductNavbar'

const Sturdy_Tables_02 = () => {
  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>
      <ItemSlider/>
      <ProductNavbar position="absolute" link="https://www.mediafire.com/file/tyffb6tetaf24u6/Myntian_Sturdy_Tables_02.zip/file"/>
    </>
  )
}

export default Sturdy_Tables_02