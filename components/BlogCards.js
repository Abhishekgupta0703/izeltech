import React from "react"
import { BlogCard } from "./common/BlogCard"
import { blogdata } from "@/assets/data/dummydata"

const BlogCards = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <BlogCard data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default BlogCards
