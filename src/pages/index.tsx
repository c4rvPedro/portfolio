import Card from "@/components/card"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { ReactNode } from "react"

interface FibonacciCardData {
  number: number;
  content: ReactNode;
}

const Home = () => {
  const fibonacciCards: FibonacciCardData[] = [
    { 
      number: 1, 
      content: (
        <div>
          <h3>Sobre Mim</h3>
          <p>Desenvolvedor apaixonado por tecnologia</p>
        </div>
      ) 
    },
    { 
      number: 1, 
      content: (
        <div>
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      ) 
    },
    { 
      number: 2, 
      content: (
        <div>
          <h3>Projetos</h3>
          <p>Veja meus trabalhos realizados</p>
          <button>Ver Portfolio</button>
        </div>
      ) 
    },
    { 
      number: 3, 
      content: (
        <div>
          <h3>Experiência</h3>
          <p>+3 anos de desenvolvimento web</p>
        </div>
      ) 
    },
    { 
      number: 5, 
      content: (
        <div>
          <h3>Educação</h3>
          <p>Ciência da Computação</p>
        </div>
      ) 
    },
    { 
      number: 8, 
      content: (
        <div>
          <h3>Sobre Mim</h3>
          <p>Desenvolvedor apaixonado por tecnologia</p>
        </div>
      )  
    },
  ]

  const renderFibonacciCards = () => {
    const reversedCards = [...fibonacciCards].reverse()
    return reversedCards.map((cardData, index) => {
      return (
        <div 
          className={styles.fibCard} 
          key={index} 
        >
          <Card>
            <div className={styles.cardContent}>
              {cardData.content}
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
