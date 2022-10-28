import Navbar from './Navbar'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const MainBody = styled.div`
    width: 1080px;
    
`;

export default function Layout({ children }){
    return(
        <div className={styles.page}>
            <Navbar />
            {children}
        </div>        
    )
}