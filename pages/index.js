import { Hero } from "@/sections";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>izelTech </title>
        <meta
          name="description"
          content="izelTech: your reliable partner for cutting-edge IT solutions. In addition to digital marketing and branding, our areas of expertise include web building and mobile app development. Elevate your company with our team's seasoned expertise and customized digital strategy."
        />
        <meta
          name="keywords"
          content="izelTech, IT solutions, web development, mobile app development, izeltech e learning, izeltech lucknow"
        />

        <meta
          property="og:title"
          content="izelTech - Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="izelTech: your reliable partner for cutting-edge IT solutions. In addition to digital marketing and branding, our areas of expertise include web building and mobile app development. Elevate your company with our team's seasoned expertise and customized digital strategy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izeltech.in/" />
        <meta
          property="og:image"
          content="https://izeltech.in/images/banner.png"
        />
        <meta property="og:site_name" content="izelTech" />

        {/* <!-- Optional for Twitter Cards --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="izelTech - Innovative IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Cutting-edge web and app development, data structures, algorithms, and custom IT solutions."
        />
        <meta
          name="twitter:image"
          content="https://izeltech.in/images/banner.png"
        />
        <meta name="twitter:site" content="@izelTech" />
        <link
          rel="preload"
          href="../assets/images/art-top-cropp.jpg"
          as="image"
        />
        <meta name="google-site-verification" content="tv-I29y6qytpEjdx5YnNkowpGs4iMFb3DNL1bW7-USQ" />
      </Head>
      <Hero />
    </>
  );
}
