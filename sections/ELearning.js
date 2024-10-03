import { eLearning } from "@/assets/data/dummydata";
import { Certifcation } from "@/components/Certifcation";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import WhyELearning from "@/components/WhyELearning";
import React from "react";

const ELearning = () => {
  return (
    <>
      <section className="eLearning bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="E-LEARNING" /> <br id="courses"/>
            <Title
              title="Fresh Knowledge. Engaging Design. Effective Learning."
              className="title-bg"
            />
          </div>
          <br />
          <br />
          <div className="grid-3" >
            {eLearning.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
      <WhyELearning />
      <Certifcation />
    </>
  );
};

export default ELearning;
