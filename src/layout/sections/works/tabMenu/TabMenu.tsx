import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";


export const TabMenu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map( (item, index)=> {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>

                })
}
            </ul>

        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
 ul {
   display: flex;
   gap: 30px;
   justify-content: center;
   color: black;
 }
`
const ListItem = styled.li`

  
`

