import React from "react";
import Hero from "./Components/Hero";
import Banner from "../pages/Components/Banner";
import {Link} from 'react-router-dom'
import RoomsContainer from "./Components/RoomsContainer";

export default function Rooms() {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our rooms" >
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
    </div>
  );
}
