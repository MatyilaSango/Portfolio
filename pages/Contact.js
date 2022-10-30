import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContactContainer, Myemailcontainer } from '../styles/Contactstyles'
import Image from 'next/image'
import emailLogo from '../icons/logos/emailLogo.png'
import phoneLogo from '../icons/logos/phoneLogo.png'
import whatsappLogo from '../icons/logos/whatsappLogo.png'
import Footer from '../components/Footer.js'


export default function Home() {

  async function onSubmitHandler(e){
    e.preventDefault();
    const dataForm = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if(!field.name) return;
      dataForm[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(dataForm)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        
      }
    })
    
  }

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
            <form className={styles.emailForm} onSubmit={onSubmitHandler}>
              <input className={styles.emailInput} name="name" type="text" placeholder='Name' required/>
              <input className={styles.emailInput} name="email" type="text" placeholder='Email' required/>
              <textarea className={styles.emailTextArea} name="message" placeholder='Message' required/>
              <input className={styles.emailSend} id="form" type="submit" value="Send" />
            </form>

            
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script>
              {
                  function sendMail(){
                      e.preventDefault();
                  
                      const name = document.getElementById("name"),
                            email = document.getElementById("email"),
                            message = document.getElementById("message");
                  
                      Email.send({
                          SecureToken : "91f08c82-a8f0-4a30-88a8-70a8bb71b8c1",
                          To : 'matyila2sango@gmail.com',
                          From : email.innerText,
                          Subject : name.innerText+": Sent mail from portfolio.",
                          Body : message.innerText
                      }).then(
                          message => alert(message)
                      );
                  
                  }
                
              }
            </script>
            

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