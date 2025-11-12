import Card from "@/components/card"
import Head from "next/head"
import styles from "@/styles/Home.module.css"

const Home = () => {
  const fibonacciSequence = [1, 1, 2, 3, 5, 8]

  const renderFibonacciCards = () => {
    const reversedSequence = [...fibonacciSequence].reverse()
    return reversedSequence.map((fiboNumber, index) => {
      return (
        <div 
          className={styles.fibCard} 
          key={index} 
        >
          <Card>
            <div className={styles.cardContent}>
              <span className={styles.fibNumber}>{fiboNumber}</span>
            </div>
          </Card>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.fibonacciContainer}>
          {renderFibonacciCards()}
        </div>
      </main>
    </>
  )
}

export default Home
