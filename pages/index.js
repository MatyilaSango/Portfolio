import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {  Myemailcontainer, NameSpan } from '../styles/Homestyles'
import Image from 'next/image'
import mypic from '../icons/mypic1.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page about myself" />
        <link rel="icon" href="/mypic1.jpg" />
      </Head>

      <div className={styles.Mainbodycontainer}>
        <div className={styles.Mypiccontainer}>
          <Image className={styles.Image} src={mypic} alt="pic" height={400} />
        </div>
        <Myemailcontainer>
          <span >Matyila2sango@gmail.com</span>
        </Myemailcontainer>
        <div className={styles.Aboutcontainer}>
          <h2>About me 😊 -------</h2>
          <p>
            My name is <b><NameSpan>Sango Matyila</NameSpan></b>. I am a computer science graduate from University of the Western Cape.
            I have a passion for programming. I like to code, whether it be creating applications or websites. I&apos;ve been involved in a
            number of projects: the creation of a library system and a tutoring web application. 
            <br/><br/>
            To be a developer at SovTec would be a dream come true. Working with a world-class expert team of developers would be a 
            great opportunity for me to learn skills and to learn from my seniors how this industry works and how to create beautiful, functional software.
            <br/><br/>
            In addition, I like the mission of SovTech, &quot;Innovative custom software that gives our clients the opportunity to start, run and grow world-class businesses&quot;,
            and I want to be part of that.
            
          </p>
        </div>

      </div>

      
    </div>
  )
}
