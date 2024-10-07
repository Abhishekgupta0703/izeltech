import React from "react";
import { whyELearning } from "@/assets/data/dummydata";
import { Title } from "./common/Title";

function WhyELearning() {
  return (
    <section className="eLearning">
      <div className="container">
        <div className="heading-title">
          <Title title="Why Choose Our E-Learning Platform?" />
          <p>
            Our E-learning platform is designed to offer flexibility,
            affordability, and high-quality guidance to help you master the
            skills you need.
          </p>
        </div>
        <div className="grid-4">
          {whyELearning.map((item) => (
            <div className="guidance-card gradient-border" key={item.id}>
              <div className="image-cover">
                <img src={item.cover} alt={item.title} layout="responsive" />
              </div>
              <div className="content">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyELearning;
