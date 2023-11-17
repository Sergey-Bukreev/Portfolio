import React from 'react';
import styled from "styled-components";
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Maine = () => {
    return (
        <StyledMaine>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Sergey Bukreev</span></Name>

                        <Text>A Web Developer</Text>
                    </div>
                    <PhotoWrapper>
                        <Photo src={MainePhoto}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMaine>
    );
};


const StyledMaine = styled.section`
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }

`


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const Text = styled.h2`
  font-family: Poppins,serif;
  font-size: 27px;
  font-weight: 400;
  
  
  
`
const Name = styled.h2`
font-family: Josefin Sans, serif;
  font-size: 50px;
  font-weight: 700;
 letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
      
    }
  }
`
const SmallText = styled.h2`
font-size: 14px ;
  font-weight: 400;
`