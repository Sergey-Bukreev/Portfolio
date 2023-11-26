import React from 'react';
import {S} from "../HeaderMenu_Styles"


const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contacts",
        href: "contacts"
    }
]
export const Menu : React.FC = () => {
    return (
        <ul>
            {items.map( (item, index)=> {
                return <S.ListItem key={index}>
                    <S.NavLink to = {item.href} smooth={true} activeClass={"active"} spy={true}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>

            })
            }
        </ul>
    );
};

