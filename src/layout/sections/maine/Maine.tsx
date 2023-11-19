import React from 'react';
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "../maine/Maine_Styles"


export const Maine:React.FC = () => {
    return (
        <S.Maine>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Sergey Bukreev</span></S.Name>

                        <S.Text>A Web Developer</S.Text>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={MainePhoto}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.Maine>
    );
};


