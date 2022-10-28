import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Mainbodycontainer, Myemailcontainer } from '../styles/Toolsstyels'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools I Use</title>
        <meta name="description" content="Tools I use to create applications and websites" />
        <link rel="icon" href="/mypic.png" />
      </Head>

      <Mainbodycontainer>
        <Myemailcontainer>
          <span >Matyila2sango@gmail.com</span>
        </Myemailcontainer>
        
      </Mainbodycontainer>
      
    </div>
  )
}