import React from 'react';
//import Clients from '../components/Clients';
//import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
//import Cardlist from '../components/Card';
import CardList from '../components/Cardlist';
//import Intro from '../components/Intro';
//import Portfolio from '../components/Portfolio';
//import Services from '../components/Services';
//import Blog from '../components/Blog';
const Home = () => {
    return (
        <>
            <Hero />
            <CardList/>
            <Footer />
            {/*
e            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <Blog />
            <Cta/>*/}
          </>
    )
}
export default Home;

