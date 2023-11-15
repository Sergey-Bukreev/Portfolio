import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

 export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle>MY Tech Stack</SectionTitle>
                <Text>Technologies I’ve been working with recently</Text>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Icon iconId={"ico1"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico2"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico3"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico4"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico5"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Icon iconId={"ico6"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico7"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico8"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico9"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                    <Icon iconId={"ico10"} width={"120px"} height={"120px"} viewBox={"0, 0, 120, 120"}/>
                </FlexWrapper>

            </Container>


        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
min-height: 60vh;
`
const Text = styled.span``