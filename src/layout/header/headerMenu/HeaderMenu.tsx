import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


export const HeaderMenu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map( (item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>

                })
                }
            </ul>

        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
 ul {
   display: flex;
   gap: 30px;
   justify-content: center;
   color: black;
 }
`

const Link = styled.a`
  text-align: center;
  font-family: Josefin Sans,serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`
const Mask = styled.span`
position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  
  color:${Theme.colors.accent};
  
  & + & {
    top:50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`
const ListItem = styled.li`
position: relative;
 &::before {
   content: "";
   display: inline-block;
   height: 3px;
   background-color: ${Theme.colors.accent} ;
   position: absolute;
   top: 50%;
   left: -10px;
   right: -10px;
   z-index: 1;
   transform: scale(0);
 }
 &:hover {
   &::before {
     transform: scale(1);
   }
 }
  
  &:hover {
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${Theme.colors.font};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
    }
   
    }
  }
`