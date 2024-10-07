import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const BlogCard = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} layout="responsive"/>
        </div>
        <div className="card-details">
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul className="points">
              {data.desc.map((text, i) => (
                <li key={i} className="point">
                  {" "}
                  - {text.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
