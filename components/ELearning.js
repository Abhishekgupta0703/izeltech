import React from "react";
import { Title } from "./common/Title";
import { Card } from "./common/Card";
import Link from "next/link";
const ELearning = () => {
  return (
    <>
      <section className="elearning">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ELearning;
