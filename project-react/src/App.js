import React from 'react';
import Background from './component/Background';
import Footer from './component/Footer';
import Greetings from './component/Greetings';
import Section2 from './component/Section2';
import Sidenav from './component/Sidenav';
import Title from './component/Title';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';

function App () {
    return (
        <>
        <Sidenav />
        <Background />
        <Title />
        <Greetings />
        <Section2 />
        <AboutUs />
        <Contact />
        <Footer />
        </>
    );
}

export default App;