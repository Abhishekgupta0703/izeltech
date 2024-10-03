import { expertise } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="services bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" />
            <br />
            <Title
              title="Unique technologies & modern approach"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
      <Banner />
      <br />
      <br />
    </>
  );
};

export default Services;
