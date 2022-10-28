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
            My name is <b><NameSpan>Sango Matyila</NameSpan></b>. I am a computer science graduate from university of the western cape.
            I have a passion for programming. I like to code whether it be creating applications or websites.
            <br/><br/>
            My interest in the computing industry started long time ago before I even possesed an electronic device.
            I was always interested about how these devices that people uses work and how are they enables them to do what they want
             just with the strokes of their finders. So, when I grew up I told myself thats what want to do, create applications
             that will benefit the lives of everyone in a good way.
            <br/><br/>
            To be a developer at SovTec would be a dream come true. Working with world-class expert team of developers would be a 
            greate opportunity for me to learn new skills and to learn from my seniors how this industry works and how to create beautiful, functional software.
            <br/><br/>
            One day I want to start my own company. To work with skilled developers at SovTech would enable that dream to come true.
          </p>
        </div>

      </div>

      
    </div>
  )
}
