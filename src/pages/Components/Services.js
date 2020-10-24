import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  let services = [
    {
      icon: <FaCocktail />,
      title: "free Cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur accusantium numqua"
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur accusantium numqua"
    },
    {
      icon: <FaShuttleVan />,
      title: "Cold Beers",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur accusantium numqua"
    },
    {
      icon: <FaBeer />,
      title: "Strong Beers",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur accusantium numqua"
    }
  ];
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
