import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT US" /> <br />
            <br />
            <Title
              title="The Digital Agency Designed for Your Growth!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital solutions for a future-ready world." />
              <p className="desc-p">
                At izelTech, we believe that every great business starts with an
                idea, and we’re here to transform those ideas into powerful
                digital solutions. While we're a new player in the field, our
                team brings cutting-edge expertise and a fresh approach to every
                project. We blend creativity with technology to deliver products
                that not only meet today’s market demands but also set you up
                for future success. Partner with us to unlock new possibilities
                and bring your vision to life.
              </p>
              {/* <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div> */}
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Your success is our Mission..!
                <br />
                We empower businesses by turning their visions into cutting-edge
                digital solutions. We aim to provide innovative, scalable, and
                user-friendly products that not only meet today’s demands but
                also anticipate future growth. Through collaboration,
                creativity, and a commitment to excellence, we strive to help
                our clients succeed in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand /> */}
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
