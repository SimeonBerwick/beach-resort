import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Great prices for the the very best experiences"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Great prices for the the very best experiences"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Great prices for the the very best experiences"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Great prices for the the very best experiences"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
