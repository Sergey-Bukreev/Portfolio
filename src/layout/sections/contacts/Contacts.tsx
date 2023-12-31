import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={"contacts"}>
           <Container>
               <SectionTitle>Contacts</SectionTitle>
               <S.Form>
                   <S.Field placeholder={"Name"} />
                   <S.Field placeholder={"Subject"} />
                   <S.Field placeholder={"Massage"} as={"textarea"}/>
                   <StyledButton type={"submit"}>Send Message</StyledButton>

               </S.Form>
           </Container>
        </S.Contacts>
    );
};

