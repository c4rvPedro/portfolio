import Head from "next/head"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Ops, não conseguimos encontrar essa página!</p>
          <span>Clique no botão para ir à Página Inicial.</span>
        </div>
        <Link href="/">Ir para a Página Inicial</Link>
      </div>
    </>
  )
}

export default NotFound
