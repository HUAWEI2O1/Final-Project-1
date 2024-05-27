import React from 'react';
import Background from './component/Background';
import Footer from './component/Footer';
import Greetings from './component/Greetings';
import Section2 from './component/Section2';
import Sidenav from './component/Sidenav';
import Title from './component/Title';

function App () {
    return (
        <>
        <Sidenav />
        <Background />
        <Title />
        <Greetings />
        <Section2 />
        <Footer />
        </>
    );
}

export default App;