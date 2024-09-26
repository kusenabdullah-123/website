import Header from "../components/front/Header";
import HeroHome from "../components/front/HeroHome";
import AboutHome from "../components/front/AboutHome";
import PortoFolioHome from "../components/front/PortoFolioHome";
import BlogHome from "../components/front/BlogHome";
import Footer from "../components/front/Footer";
import BackToTop from "../components/front/BackToTop";
import { useEffect } from "react";
import mainScript from "../lib/MainScript";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";
export default function Home({ url, portofolio, blog }) {
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <div>
      <Head>
        <meta name="keywords" content="KusenaDev,portfolio,learning" />
        <meta name="author" content="Kusena Dev" />
        <meta
          name="description"
          content="Kusenadev adalah website pribadi yang di dalam nya ada blogs dan juga project yang pernah di buat"
        />
        <meta name="robots" content="all" />
        {/* <script src="/js/darkmode.js" /> */}
      </Head>
      <Script src="/js/darkmode.js" />
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Hero Section Start */}
      <HeroHome />
      {/* Hero Section End */}
      {/* About Section Start */}
      <AboutHome />
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <PortoFolioHome portofolio={portofolio} url={url} />
      {/* Portfolio Section End */}
      {/* Blog Section */}
      <BlogHome blog={blog} url={url} />
      {/* Blog Section End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
      {/* Back To Top */}
      <BackToTop />
      {/* Back To Top */}
      <Script
        src="https://code.iconify.design/2/2.2.1/iconify.min.js"
        sameSite="true"
      />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const blogs = await axios.get(`${url}api/blogs/?limit=3`);
  const blog = blogs.data.blogs.filter((item) => item.status == "1")
  
  const porto = await axios.get(`${url}api/portofolio/?limit=2`);
  const portofolio = porto.data.portofolio.filter((item) => item.status == "1");
  // res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

  return {
    props: {
      blog: blog,
      portofolio: portofolio,
      url,
    },
  };
}
