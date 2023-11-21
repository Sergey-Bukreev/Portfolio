import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/Photo1.png"
import timerImg from "./../../../assets/images/Photo2.png"
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./Work_Styles"

const tabsItems:Array<{status: "all" | "react" | "landing" | "spa", title: string}> = [
    {
        title: "ALL",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]

const workData =[
    {
        title : "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"

    },
    {
        title : "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type : "react"
    }
]
const worksItems = ["ALL", "Landing Page", "React", "SPA"]
export const Works:React.FC = () => {

    const [currentFilterStatus,setCurrentFilterStatus] = useState("all");

    let filteredWorks = workData;

    if (currentFilterStatus === "landing") {
        filteredWorks = workData.filter(work => work.type === "landing" )
    }
    if (currentFilterStatus === "react") {
        filteredWorks = workData.filter(work => work.type === "react" )
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = workData.filter(work => work.type === "spa" )
    }

    function changeFilterStatus (value:TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu TabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} align={"flex-start"}>
                    {filteredWorks.map((w,index)=>{
                        return <Work title={w.title} srs={w.src} text={w.text} key={index}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


