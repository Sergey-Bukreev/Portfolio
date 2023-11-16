import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const HeaderMenuSecond = (props:{menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenuSecond>
            <ul>
                {props.menuItems.map( (item, index)=> {
                    return<ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>

                })
                }


            </ul>

        </StyledHeaderMenuSecond>
    );
};

const StyledHeaderMenuSecond = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    color: black;
  }

`
const ListItem = styled.li`

  &:hover {
    background:${Theme.colors.fontSecond};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transform: scale(1.3);

  }
`
const Link = styled.a`
  text-align: center;
  font-family: DM Sans,serif;;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: ${Theme.colors.fontThird};
  
`