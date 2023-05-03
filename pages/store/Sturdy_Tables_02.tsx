import Head from 'next/head'
import React from 'react'
import ItemSlider from '../../components/ItemSlider'
import ProductNavbar from '../../components/ProductNavbar'
import itemData from '../../data/ItemData'

const Sturdy_Tables_02 = () => {
  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>
      <ItemSlider/>
      <ProductNavbar position="absolute" link="https://www.mediafire.com/file/tyffb6tetaf24u6/Myntian_Sturdy_Tables_02.zip/file" row={2} col={1} background="Sturdy_Tables_02"/>
    </>
  )
}

export default Sturdy_Tables_02