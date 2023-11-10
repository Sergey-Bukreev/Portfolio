import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

 export const Footer = () => {
    return (
        <StyledFooter>
           <FlexWrapper direction={"column"} align={"center"}>
               <Name>Svetlana</Name>
               <SocialList>
                   <SocialItem>
                       <SocialLink>
                           <Icon iconId={"instygramSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon iconId={"telegramSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon iconId={"vkSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon iconId={"linkedinSvg"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} />
                       </SocialLink>
                   </SocialItem>

               </SocialList>
               <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
           </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: snow
;
  min-height: 20vh;
`

const Name = styled.span``
const SocialList = styled.ul`
display: flex;
  gap: 30px;
`
const SocialItem =styled.li``
const SocialLink = styled.a``
const Copyright = styled.small``