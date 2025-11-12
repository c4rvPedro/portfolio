import Card from "@/components/card"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Meu Portfolio</title>
      </Head>
      <main>
        <Card children={<p>Card Content</p>} />
      </main>
    </>
  )
}

export default Home
