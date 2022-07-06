//Importing all my dependencies
import React from 'react';
import NavBar from './navBar';
import Home from './home';
import SearchPage from './searchPage';
import Footer from './footer';

//Creating the Landingpage cmponent that boils down all components that get passed to the App component
const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <Home/>
        <SearchPage/>
        <Footer/>
    </div>
  )
}

export default LandingPage;