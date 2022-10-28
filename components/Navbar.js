import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gitPic from '../icons/GitHub-Mark-Light-32px.png'
import linkedinPic from '../icons/linkedin.png'
import { Nav, LeftSpan, MidSpan, RightSpan, Navlink } from '../styles/Navstyles'

export const nav = () => {
  return (
    <Nav>
        <LeftSpan>SM</LeftSpan>
        <MidSpan>
            <Navlink>
              <Link href="/" >Home</Link>
              <Link href="/Tools" >Tools</Link>
          </Navlink>
        </MidSpan>
        
        <RightSpan>
          <a href="https://github.com/MatyilaSango"><Image src={gitPic} alt="pic" width={25} /></a>
          <a href="https://www.linkedin.com/in/sango-matyila-b1584a237/"><Image src={linkedinPic} alt="pic" width={25} /></a>
        </RightSpan>
    </Nav>
  )
}

export default nav;
