import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

 export const TechStack = () => {
    return (
        <StyledTechStack>
            <SectionTitle>MY Tech Stack</SectionTitle>
            <Text>Technologies I’ve been working with recently</Text>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"ico1"}/>
                <Icon iconId={"ico2"}/>
                <Icon iconId={"ico3"}/>
                <Icon iconId={"ico4"}/>
                <Icon iconId={"ico5"}/>
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"ico6"}/>
                <Icon iconId={"ico7"}/>
                <Icon iconId={"ico8"}/>
                <Icon iconId={"ico9"}/>
                <Icon iconId={"ico10"}/>
            </FlexWrapper>


        </StyledTechStack>
    );
};

const StyledTechStack = styled.div`
min-height: 30vh;
`
const Text = styled.span``