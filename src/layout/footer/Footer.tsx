import React from 'react';
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const SocialItemData = [
    {
        iconId: "instygramSvg"
    },
    {
        iconId: "telegramSvg"
    },
    {
        iconId: "vkSvg"
    },
    {
        iconId: "linkedinSvg"
    },
]
 export const Footer:React.FC = () => {
    return (
        <S.Footer>
           <FlexWrapper direction={"column"} align={"center"}>
               <S.Name>Sergey</S.Name>
               <S.SocialList>
                   {SocialItemData.map((i, index) => {
                       return  (
                           <S.SocialItem key={index}>
                           <S.SocialLink>
                               <Icon  iconId={i.iconId} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                           </S.SocialLink>
                       </S.SocialItem>
                       )
                   })}

               </S.SocialList>
               <S.Copyright>© 2023 Sergey Bukreev, All Rights Reserved.</S.Copyright>
           </FlexWrapper>

        </S.Footer>
    );
};

