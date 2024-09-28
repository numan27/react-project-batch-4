import React from "react";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import { Container } from "react-bootstrap";
import AnimeSection from "./components/AnimeSection";
import BrandsSection from "./components/BrandsSection";
import StatsSection from "./components/StatsSection/index";
import ReviewSection from "./components/ReviewSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <CardsSection />
        <AnimeSection />
        <BrandsSection />
      </Container>
      <StatsSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
