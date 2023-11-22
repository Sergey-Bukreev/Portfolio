import React from 'react';
import MainePhoto from "./../../../assets/images/photo-2.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Maine_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Maine:React.FC = () => {
    return (
        <S.Maine>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Sergey Bukreev</span></S.Name>

                        {/*<S.Text>A Web Developer</S.Text>*/}
                        <S.Text>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ["A Web Developer","A Frontend Developer "],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.Text>
                    </div>
                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={MainePhoto}/>
                        </S.PhotoWrapper>
                    </Tilt>


                </FlexWrapper>
            </Container>

        </S.Maine>
    );
};


