import React from 'react';
import styled from "styled-components";
import MainePhoto from "./../../../assets/images/MainePhoto.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Maine = () => {
    return (
        <StyledMaine>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyabla</h2>
                    <h2>A Web Developer</h2>
                </div>
                <Photo src={MainePhoto}/>
            </FlexWrapper>
        </StyledMaine>
    );
};

const Photo = styled.img`
width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledMaine = styled.div`
min-height: 100vh;
  background-color: snow;
`
