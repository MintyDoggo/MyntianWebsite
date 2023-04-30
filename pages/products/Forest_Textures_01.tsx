import Head from 'next/head'
import React from 'react'
import ProductNavbar from '../../components/ProductNavbar'
import ItemSlider from '../../components/ItemSlider'

const Forest_Textures_01 = () => {

  return (
    <>
      <Head>
        <title>MYNTIAN STORE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/dog.png" />
      </Head>
      <ItemSlider/>
      <ProductNavbar position="absolute" link="https://www.mediafire.com/file/suajjftrkit8v15/Myntian_Forest_Textures_01.zip/file"/>

    </>
  )
}

export default Forest_Textures_01