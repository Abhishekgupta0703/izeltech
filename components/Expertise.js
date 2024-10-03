import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              We excel in delivering top-tier digital
              services that drive business success. Our expertise spans across
              various domains, ensuring we provide solutions that are not only
              innovative but also tailored to your specific needs.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" path={"services"} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
