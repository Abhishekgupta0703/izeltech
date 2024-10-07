import { TitleSm } from "./Title";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card" key={data.title}>
        <div className="card-img">
          <img src={data.cover} alt={data.title} layout="responsive" loading="lazy"/>
        </div>
        <div className="card-details">
          <TitleSm title={data.title} />
          {caption && <p >{ caption }</p>}
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
