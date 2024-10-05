import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>izelTech </title>
        <meta name="description" content="We provide expert web and app development services for businesses of all sizes." />
        <meta name="keywords" content="web development, IT solutions, agency, app development" />
      </Head>
      <Hero />
    </>
  )
}
