
import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledIcon = styled.p`
    font-family : Monospace;
    color : white;
    font-size :32px;
    font-weight : 600;
`

interface IconProps{
    children :ReactNode;
}

const Icon = (props : IconProps)=>{
    return (
        <StyledIcon>{props.children}</StyledIcon>
    )
}
export default Icon