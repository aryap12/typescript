
import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledButtonProps{
    size : string;
    textColor : string;
}
const StyledButton = styled.button<StyledButtonProps>`
    background-color : ${(props)=>props.color};
    padding : 1rem;
    color : ${(props)=>props.textColor};
    border-radius : 10px;
    padding : ${(props)=>props.size};
    font-family : Monospace;
    font-weight : 600;
`;

interface ButtonProps {
    children :ReactNode;
    variant : 'primary' | 'safe' | 'warning' | 'danger' |'netral';
    size : 'small' | 'medium' | 'large';
}
const Button =(props : ButtonProps)=>{
    let buttonColor;
    let buttonSize ='';
    let color =''
    switch(props.variant){
        case "netral":
            buttonColor = "white"
            color = "black"
            break;
        case "primary":
            buttonColor = "blue";
            color = "white"
            break;
        case "safe":
            buttonColor ="green";
            color = "white"
            break;
        case "warning":
            buttonColor ="yellow";
            color = "black"
            break;
        case "danger":
            buttonColor = "red"
            color = "white"
            break;
    }
    switch(props.size){
        case "large":
            buttonSize = "4rem";
            break;
        case "medium":
            buttonSize ="2rem";
            break;
        case "small":
            buttonSize ="1rem";
            break;
    }
    return <StyledButton textColor={color} color={buttonColor} size={buttonSize} >{props.children}</StyledButton>
}
export default Button