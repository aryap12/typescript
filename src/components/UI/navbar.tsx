import React, { ReactNode } from "react";
import styled from "styled-components";
import Button from "../button";
import Icon from "../Icon";

const StyledUl = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
`
const StyledLi = styled.li`
float: right;
`
const Navbar = ()=>{
    return(
        
        <StyledUl>
            <div style={{float:'left'}}>
                <Icon>My App</Icon>
            </div>
            <StyledLi> <Button variant='netral' size='small'>Home</Button></StyledLi>
            <StyledLi> <Button variant='netral' size='small'>Career</Button></StyledLi>
            <StyledLi> <Button variant='netral' size='small'>About</Button></StyledLi>
            <StyledLi> <Button variant='netral' size='small'>My Plan</Button></StyledLi>
        </StyledUl>
    )
}
export default Navbar;