import Head from 'next/head'
import Main from '../components/Main'
// 
export default function Home() {
  return (
    <>
      <Head>
        <title>Myntian</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/dog.png" />
      </Head>
      <Main />
    </>
  )
}
