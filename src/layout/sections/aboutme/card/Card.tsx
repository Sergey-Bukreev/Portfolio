import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
type CardPropsType ={
    speciality: string
    description: string
    place: string
    period: string
}

 export const Card = (props:CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper align={"center"}>
                <UpElementTitle>{props.speciality}</UpElementTitle>
                <UpElementText>{props.description}</UpElementText>
            </FlexWrapper>
            <FlexWrapper align={"center"}>
                <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                <DownElementTitle>{props.place}</DownElementTitle>
                <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0, 0, 16, 12"} />
                <DownElementText>{props.period}</DownElementText>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
border: black 1px solid;
  min-width: 100vh;
  
`
const UpElementTitle = styled.p``
const UpElementText = styled.span`
  font-size: 12px;
  
`
const DownElementTitle = styled.p`
  font-size: 12px;
`

const DownElementText = styled.span`
  font-size: 12px;
`