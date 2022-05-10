import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
list-style-type: none;
margin-left : 5%;
padding: 0;
width: 200px;
background-color: #f1f1f1;
`
const StyledLi = styled.li`
display: block;
color: #000;
padding: 8px 16px;
text-decoration: none;
`
const Menu = ()=>{
    return(
        <StyledUl>
            <h4>My Shopping List</h4>
            <StyledLi>Bread</StyledLi>
            <StyledLi>Butter</StyledLi>
            <StyledLi>Oil</StyledLi>
            <StyledLi>Banana</StyledLi>
        </StyledUl>
    )
}
export default Menu;