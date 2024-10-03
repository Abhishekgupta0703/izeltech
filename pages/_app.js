import Layout from "@/components/common/Layout";
import React, { useState, useEffect } from "react";
import "@/styles/main.scss";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with real loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will be visible for 2 seconds

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
