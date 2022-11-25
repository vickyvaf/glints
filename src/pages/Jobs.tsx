import axios from "axios";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FakeCard from "../components/FakeCard";
import FilterJob from "../components/FilterJob";
import Footer from "../components/Footer";
import SearchJob from "../components/SearchJob";

const Jobs = () => {
  // const fetchData = async () => {
  //   const result = await axios.get('http://localhost:9000/')
  //   console.log(result)
  // }

  // useEffect(() => {
  //   fetchData()
  // })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lowongan Kerja Terbaru</title>
      </Helmet>
      <div className="pt-16 max-w-[1400px] mx-auto font-poppins pr-5 pl-4 lg:pr-3 lg:pl-0">
        <SearchJob />
        <p className="font-medium text-base hidden lg:block lg:ml-3">
          23148 Lowongan Kerja di Indonesia
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto font-poppins  lg:px-3 mt-3 flex lg:justify-between mb-20 gap-x-4">
        <div className="-ml-1 lg:-ml-0 mx-auto lg:relative lg:pt-8 lg:-mt-28 lg:sticky-top lg:mb-2">
          <FilterJob/>
        </div>
        <div className="w-[1050px] h-fit grid grid-cols-1 md:grid-cols-2 pr-3 lg:px-0 mt-4 lg:mt-0">
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
