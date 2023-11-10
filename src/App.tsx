import './App.css';
import styled from 'styled-components';
import Header from "./layout/header/Header";
import React from "react";
import {Maine} from "./layout/sections/maine/Maine";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";



function App() {
    return (
            <div className="App">
                <Header />
                <Maine />
                <Skills />
                <Works />
                <Testimony />`
                <Contacts />
                <Slogan />
            </div>


    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;