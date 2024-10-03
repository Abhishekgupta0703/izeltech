import { blogdata } from "@/assets/data/dummydata"; // Adjust path as needed
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) return <p>Loading...</p>;

  // Render the content dynamically based on the content type (heading, paragraph, list, etc.)
  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "heading") {
        return <h2 key={index} className="heading">{item.text}</h2>;
      } else if (item.type === "paragraph") {
        return <p key={index} className="desc-p">{item.text}</p>;
      } else if (item.type === "list") {
        return (
          <ul key={index} className="list">
            {item.items.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      } else {
        return null; // Fallback for unknown content types
      }
    });
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={`${post.catgeory} / ${post.date}`} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              {renderContent(post.content)}
            </div>
          </div>
          <Banner />
          <br/>
          <br/>
          <br/>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
