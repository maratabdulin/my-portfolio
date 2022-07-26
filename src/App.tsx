import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./my-works/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
