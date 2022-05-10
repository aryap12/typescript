import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledHeaderProps{
    size : string;
}

const StyledTypography = styled.p<StyledHeaderProps>`
    font-size : ${(props)=>props.size};
    color : black;
`

interface HeaderProps {
    children : ReactNode;
    size : 'small' | 'medium' | 'large';
}
const Typography =(props : HeaderProps)=>{
    let fontSize =''
    switch(props.size){
        case "large":
            fontSize = "4rem";
            break;
        case "medium":
            fontSize ="2rem";
            break;
        case "small":
            fontSize ="1rem";
            break;
    }
    return <StyledTypography size={fontSize}>{props.children}</StyledTypography>
}
export default Typography;