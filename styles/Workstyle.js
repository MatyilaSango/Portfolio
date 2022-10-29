import styled from 'styled-components'

export const Mainbodycontainer = styled.div`
    width: 100%;
    min-height: 940px;
    position: relative;
`;

export const Myemailcontainer = styled.div`
    color: white;
    position: absolute;
    bottom: 150px;
    right: -100px;
    transform: rotate(90deg);
`;

export const Toolscontainer = styled.div`
    width: 100%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
`;

export const SkillBox = styled.div`
    float: left;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    margin-right: 50px;
    margin-bottom: 80px;
    border-radius: 20px;
    box-shadow: 30px 30px 0px 0px #222222, 30px 30px 0px 5px #E67058 ;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
 
export const SkillBoxTrans = styled.div`
    float: left;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    margin-right: 50px;
    margin-bottom: 80px;
    border-radius: 20px;
    box-shadow: 30px 30px 0px 0px #222222, 30px 30px 0px 5px #E67058 ;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const SkillText = styled.p`
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
`;

export const SkillTextBlack = styled.p`
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    color: black;
`;
export const SkillHeadText = styled.div`
    width: 100%
    height: 60px;
    display: flex;
    justify-content: center;
 `;

 export const PText = styled.div`
    width: 100%
    height: 60px;
    display: flex;
    justify-content: center;
`;
export const Projectname = styled.div`
    float: left;
    width: 190px;
    min-height: 40px;
    border: 3px solid #E67058;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
`;
 export const PDiv = styled.div`
    width: 400px;
    height: 120px;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
 `
