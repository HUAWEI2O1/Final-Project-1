import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesPage from './component/RecipesPage';
import Background from './component/Background';
import Footer from './component/Footer';
import Greetings from './component/Greetings';
import Sidenav from './component/Sidenav';
import Title from './component/Title';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tubio-yburan"
          element={
            <>
              <Sidenav />
              <Background />
              <Title />
              <Greetings />
              <AboutUs />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/tubio-yburan/RecipesPage" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
        
export default App;
II
