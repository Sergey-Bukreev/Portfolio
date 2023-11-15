import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

 export const Footer = () => {
    return (
        <StyledFooter>
           <FlexWrapper direction={"column"} align={"center"}>
               <Name>Sergey</Name>
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
               <Copyright>© 2023 Sergey Bukreev, All Rights Reserved.</Copyright>
           </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  padding: 40px 0 ; 
`

const Name = styled.span`
font-family: "Josefin Sans", serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`
const SocialList = styled.ul`
display: flex;
  gap: 20px;
  margin: 30px 0 ;
  
`
const SocialItem =styled.li``
const SocialLink = styled.a`
border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.accent};
  
  &:hover {
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
    
  }
`
const Copyright = styled.small`
text-align: center;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.5;
`