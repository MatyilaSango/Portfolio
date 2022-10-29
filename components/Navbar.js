import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gitPic from '../icons/GitHub-Mark-Light-32px.png'
import linkedinPic from '../icons/linkedin.png'
import { Nav, LeftSpan, RightSpan, Navlink } from '../styles/Navstyles'
import styles from '../styles/Home.module.css'

export const nav = () => {
  return (
    <Nav className={styles.navStyle}>
        <LeftSpan>SM</LeftSpan>
        
        <Navlink>
          <Link href="/" className={styles.links}>Home</Link>
          <Link href="/Skills" className={styles.links}>Skills</Link>
          <Link href="/Contact" className={styles.links}>Contact</Link>
        </Navlink>
        
        <RightSpan>
          <a href="https://github.com/MatyilaSango"><Image src={gitPic} alt="pic" width={25} /></a>
          <a href="https://www.linkedin.com/in/sango-matyila-b1584a237/"><Image src={linkedinPic} alt="pic" width={25} /></a>
        </RightSpan>
    </Nav>
  )
}

export default nav;
