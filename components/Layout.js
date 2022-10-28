import Navbar from './Navbar'
import styled from 'styled-components'

const MainBody = styled.div`
    width: 1080px;
    height: 640px;
`;

export default function Layout({ children }){
    return(
        <MainBody>
            <Navbar />
            {children}
        </MainBody>        
    )
}