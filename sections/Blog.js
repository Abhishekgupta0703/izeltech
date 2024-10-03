import { blog } from "@/assets/data/dummydata"
import BlogCards from "@/components/BlogCards"
import { BlogCard } from "@/components/common/BlogCard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
          </div>
          <BlogCards />
        </div>
      </section>
    </>
  )
}

export default Blog
