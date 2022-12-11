import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import MiddleNav from '../MidNav/MiddleNav';
import Latestnews from '../LatestNews/Latestnews';
import Reference from '../Reference/References';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';


const Home=()=>{
 
    return(
        <>
        <Header/>
        <Banner/>
        <MiddleNav/>
        <Latestnews/>
        <Reference/>
        <Subscribe/>
        <Footer/>
         
        </>
    )
}

export default Home;