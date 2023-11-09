import './App.css';
import styled from 'styled-components';
import Header from "./layout/header/Header";


function App() {
    return (

            <Header />

    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;