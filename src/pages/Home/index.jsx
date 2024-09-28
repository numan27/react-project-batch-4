import React from "react";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import { Container } from "react-bootstrap";
import AnimeSection from "./components/AnimeSection";
import BrandsSection from "./components/BrandsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <CardsSection />
        <AnimeSection />
        <BrandsSection />
      </Container>
    </div>
  );
};

export default Home;
