import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";       
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-5">
            <div className="logo">
              <TitleLogo title="Tech" caption="izel" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h4>+91 936 969 8575</h4>
              <br />
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About Us</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/services">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/services">App Design & Development</Link>
              </li>
              <li>
                <Link href="/services">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services">E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>E-Learning</h3>
              <li>
                {" "}
                <Link href="/e-learning">DSA</Link>
              </li>
              <li>
                {" "}
                <Link href="/e-learning">Web Development</Link>
              </li>
              <li>
                {" "}
                <Link href="/e-learning">App Development</Link>
              </li>
              <li>
                {" "}
                <Link href="/e-learning">Coding Languages</Link>
              </li>
              <li>
                {" "}
                <Link href="/e-learning">Micro Courses</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
              <li>
                  <Link href="mail:info@izeltech.in" className="mail">
                    <AiOutlineMail size={25} /><span> &nbsp; info@izeltech.in</span>
                  </Link>
                </li>
              <br/>
              <br/>
              <li>
                <Link href={"/contact"}>
                  <button className="button-primary">Request for quote</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2024 ALL RIGHTS RESERVED.</span>
            </div>
            <div className="">
              <span>IZELTECH</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
