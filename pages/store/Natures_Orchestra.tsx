import Head from 'next/head'
import React from 'react'
import ProductNavbar from '../../components/ProductNavbar'
import ItemSlider from '../../components/ItemSlider'
import itemData from '../../data/ItemData'


const Natures_Orchestra = () => {
  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>
      <ItemSlider/>

      <ProductNavbar position="absolute" link="https://www.mediafire.com/file/8wynb2v4673hw3w/Natures_Orchestra_-_Myntian.zip/file" row={0} col={0} background='Natures_Orchestra'/>

    </>
  )
}

export default Natures_Orchestra