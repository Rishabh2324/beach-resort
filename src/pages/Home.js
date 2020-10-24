import React from "react";
import Hero from "../pages/Components/Hero";
import Banner from "../pages/Components/Banner";
import { Link } from "react-router-dom";
import Services from "./Components/Services";
import FeaturedRooms from "./Components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          children=""
          title="luxurious room"
          subtitle="deluxe room starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
