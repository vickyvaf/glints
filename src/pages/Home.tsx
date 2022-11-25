import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JoinNow from "../components/JoinNow";
import SearchHome from "../components/SearchHome";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Glints | Marketplace Lowongan Pekerjaan</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <SearchHome />
      <Hero />
      <JoinNow />
      <Footer />
    </>
  );
};

export default Home;
