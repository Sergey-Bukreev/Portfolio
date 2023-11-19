import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/Photo1.png"
import timerImg from "./../../../assets/images/Photo2.png"
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import {S} from "./Work_Styles"

const workData =[
    {
        title : "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title : "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
]
const worksItems = ["ALL", "Landing Page", "React", "SPA"]
export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} align={"flex-start"}>
                    {workData.map((w,index)=>{
                        return <Work title={w.title} srs={w.src} text={w.text} key={index}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


