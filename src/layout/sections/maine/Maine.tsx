import React from 'react';
import styled from "styled-components";
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Maine = () => {
    return (
        <StyledMaine>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>My name is Sergey Bukreev</h2>
                    <h2>I build things for WEB</h2>
                </div>
                <Photo src={MainePhoto}/>
            </FlexWrapper>
        </StyledMaine>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: black 1px solid;
`

const StyledMaine = styled.section`
  min-height: 60vh;
  background-color: snow;
`
