import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/Photo1.png"
import timerImg from "./../../../assets/images/Photo2.png"
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";

const worksItems = ["ALL", "Landing Page", "React", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                          srs={socialImg}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                          srs={timerImg} />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`
