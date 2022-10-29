import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContactContainer, Myemailcontainer } from '../styles/Contactstyles'


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
            <p>My contact details are as follows.</p>

            <p>
                Email: Matyila2sango@gmail<br />
                Phone: (+27)&nbsp;61&nbsp;697&nbsp;8172<br />
            </p>

        </ContactContainer>
        
        
      </div>
      
    </div>
  )
}