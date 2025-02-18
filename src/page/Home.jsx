import React from "react";
import Hero from '../component/hero'
import AboutSection from '../component/aboutsec'
import StatsSection from '../component/statssec'
import ClientsSection from '../component/clientsec'
import ServiceSec from '../component/servicesec'
import PortfolioSection from '../component/portfoliosec'
import Team from '../component/team' 

function Home() {
    return (
        <div class="home-page">
        <Hero />
        <AboutSection />
        <StatsSection />
        <ServiceSec />
        <ClientsSection />
        <PortfolioSection />
        <Team />
    </div>    
       
    );
}

export default Home;