import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCards, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="Tech" caption="izel" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="MOBILE APPS" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" /> <span>.</span>
            <TitleSm title="E-LEARNING" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you'll ever need" />
            <p>
              At izelTech, we’re focused on delivering innovative and
              tailor-made digital solutions that evolve with your business. Our
              goal is to empower your growth with the latest technologies and
              personalized strategies. Whether you're just starting or scaling,
              we’re here to help you every step of the way.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      {/* <Brand /> */}

      <br/>
      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <br/>
      <br/>
      <BlogCards />
    </>
  );
};

export default Hero;
