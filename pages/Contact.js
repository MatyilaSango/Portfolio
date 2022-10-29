import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContactContainer, Myemailcontainer } from '../styles/Contactstyles'
import Image from 'next/image'
import emailLogo from '../icons/logos/emailLogo.png'
import phoneLogo from '../icons/logos/phoneLogo.png'
import whatsappLogo from '../icons/logos/whatsappLogo.png'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Get in touch with me." />
        <link rel="icon" href="/mypic1.jpg" />
      </Head>

      <div className={styles.Mainbodycontainer}>
        <Myemailcontainer>
          <span >Matyila2sango@gmail.com</span>
        </Myemailcontainer>

        <ContactContainer>
            <h2>Contact:</h2>
            <form className={styles.emailForm}>
              <input className={styles.emailInput} type="text" placeholder='Name' required/>
              <input className={styles.emailInput} type="text" placeholder='Email' required/>
              <textarea className={styles.emailTextArea} placeholder='Message' required/>
              <input className={styles.emailSend} type="submit" value="Send" />
            </form>
            

            <div className={styles.picAnimimateContainer}>
              <div className={styles.animateContainer}>
                <div className={styles.emailContainer}>
                  <Image src={emailLogo} alt="pic"></Image>
                </div>
                <div className={styles.phoneContainer}>
                  <Image src={phoneLogo} alt="pic"></Image>
                </div>
                <div className={styles.whatsappContainer}>
                  <Image src={whatsappLogo} alt="pic"></Image>
                </div>

              </div>
            </div>

        </ContactContainer>
        
        
      </div>
      <Footer />
      
    </div>
  )
}