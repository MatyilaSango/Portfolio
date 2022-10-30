import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {  Myemailcontainer, NameSpan } from '../styles/Homestyles'
import Image from 'next/image'
import mypic from '../icons/mypic1.jpg'
import Footer from '../components/Footer.js'

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
            To be a developer at SovTech would be a dream come true. I'm very passionate about both mobile and web development. 
            I believe being part of world-class expert team of developers would be a great opportunity for me to acquire new Software Development skills, 
            learn how this industry works and add value to the company in creation of innovative custom software applications.
            
          </p>
        </div>

      </div>
      <Footer />
      
    </div>
  )
}
