import styled from 'styled-components'

export const Mainbodycontainer = styled.div`
    width: 100%;
    height: 640px;
    position: relative;
`;

export const Mypiccontainer = styled.div`
    width: 300px;
    height: 400px;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    right: 20%;
    top: 40%;
    transform: translate(20%, -40%);
    box-shadow: 30px 30px 0px 0px #222222, 30px 30px 0px 5px #E67058 ;
    border-radius: 20px;
`;

export const Myemailcontainer = styled.div`
color: white;
position: absolute;
bottom: 150px;
right: -100px;
transform: rotate(90deg);
`;

export const Aboutcontainer = styled.div`
width: 500px;
height: 90%;
position: absolute;
top: 30px;
left: 30px;
color: white;
font-size: 14px;
`;
