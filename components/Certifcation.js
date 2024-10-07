import React from "react";
import { Title, TitleSm } from "./common/Title";
import Link from "next/link";

export const Certifcation = () => {
  return (
    <>
      <section id="certifications" className="certifications">
        <div className="container">
          <div className="heading-title">
            <Title title="Certifications & Rewards" />
            <p>
              Earn industry-recognized certifications and boost your career with
              our rewarding learning paths. F
            </p>
          </div>
          <div className="content">
            <div className="left w-40 py">
              <img
                src="/images/cert.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="right w-60 ml certification_content">
              <h2 className="green"> Industry Recognition</h2>
              <p>
                Our certifications are highly regarded by industry leaders and
                can help you stand out in job applications.
              </p>
              <h2 className="blue"> Career Advancement</h2>
              <p>
                Gain practical skills that employers value and increase your
                chances of landing promotions or high-paying jobs.
              </p>
              <h2 className="yellow">Portfolio Enhancement</h2>
              <p className="">
                Add your certification to your portfolio, showcasing your skills
                and knowledge to potential employers and clients.
              </p>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="rewards-section">
            <h3 className="rewards-title">Exclusive Rewards</h3>
            <p className="rewards-description">
              We believe in celebrating your success! Not only will you earn
              valuable certifications, but if you perform exceptionally well,
              you’ll also receive exciting swags like custom t-shirts, bags,
              mugs, trophies, and more.
            </p>

            {/* Add call-to-action buttons */}
            <div className="cta-buttons">
              <Link href="/e-learning#courses" className="secondary-button">
                View Courses
              </Link>
              <Link href="/contact" className="button-primary">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
