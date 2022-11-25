import { useEffect, useState } from "react";

const FilterJob = () => {
  const [showAcc1, setShowAcc1] = useState(true);
  const [showAcc2, setShowAcc2] = useState(true);
  const [showAcc3, setShowAcc3] = useState(true);
  const [showAcc4, setShowAcc4] = useState(true);
  const [showAcc5, setShowAcc5] = useState(false);
  const [showAcc6, setShowAcc6] = useState(false);

  const [showFilterMobile, setShowFilterMobile] = useState(false);

  const isShowAcc1 = () => {
    setShowAcc1((state) => !state);
  };

  const isShowAcc2 = () => {
    setShowAcc2((state) => !state);
  };

  const isShowAcc3 = () => {
    setShowAcc3((state) => !state);
  };

  const isShowAcc4 = () => {
    setShowAcc4((state) => !state);
  };

  const isShowAcc5 = () => {
    setShowAcc5((state) => !state);
  };

  const isShowAcc6 = () => {
    setShowAcc6((state) => !state);
  };

  const isShowFilterMobile = () => {
    setShowFilterMobile((state) => !state);
  };

  useEffect(() => {
    // if () {
    // }
  });

  return (
    <>
      {/* lg screen min-width: 1024px */}
      <div className="lg:pt-20 lg:sticky-top">
        <div
          className={
            showFilterMobile
              ? `block lg:hidden pl-4 pr-3 pt-3 fixed bg-white top-0 z-50 w-full h-screen overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full`
              : "hidden lg:block lg:w-72 lg:h-[70vh] lg:mt-2 border-[1px] border-slate-300 rounded-md p-3 scrollbar-thin scrollbar-thumb-[#ACACAC] scrollbar-track-[#E5E5E5] overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full sticky-top"
          }
        >
          <div className="w-full flex items-center justify-between lg:block">
            <p></p>
            <p className="font-medium">Filter pencarianmu</p>
            <svg
              onClick={isShowFilterMobile}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <hr className="w-full my-3" />

          {/* Accordion 1 */}
          <div className="mt-7">
            <button
              onClick={isShowAcc1}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Tampilkan Berdasarkan</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc1
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc1 ? (
              <div className="my-4 space-x-2">
                <button className="text-sm bg-[#F3F3F3] py-1 px-3 rounded-full border-[1px] border-slate-400 focus:border-[#017EB7] focus:bg-blue-100 focus:text-[#017EB7]">
                  Paling Sesuai
                </button>
                <button className="text-sm bg-[#F3F3F3] py-1 px-3 rounded-full border-[1px] border-slate-400 focus:border-[#017EB7] focus:bg-blue-100 focus:text-[#017EB7]">
                  Paling Baru
                </button>
              </div>
            ) : (
              <></>
            )}
            <hr className="my-4" />
          </div>

          {/* Accordion 2 */}
          <div className="">
            <button
              onClick={isShowAcc2}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Tipe Pekerjaan</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc2
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc2 ? (
              <div className="my-4 px-1 space-y-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="magang"
                    id="magang"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="magang">
                    Magang
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="fullTime"
                    id="fullTime"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="fullTime">
                    Full-time
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="partTime"
                    id="partTime"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="partTime">
                    Part-time
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="freelance"
                    id="freelance"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="freelance">
                    Freelance
                  </label>
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr className="my-4" />
          </div>

          {/* Accordion 3 */}
          <div className="">
            <button
              onClick={isShowAcc3}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Kota</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc3
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc3 ? (
              <div className="my-4 px-1 space-y-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="jakarta"
                    id="jakarta"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="jakarta">
                    Jakarta
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="bandung"
                    id="bandung"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="bandung">
                    Bandung
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="yogyakarta"
                    id="yogyakarta"
                    className="cursor-pointer"
                  />
                  <label
                    className="text-sm cursor-pointer"
                    htmlFor="yogyakarta"
                  >
                    Yogyakarta
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="surabaya"
                    id="surabaya"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="surabaya">
                    Surabaya
                  </label>
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr className="my-4" />
          </div>

          {/* Accordion 4 */}
          <div className="">
            <button
              onClick={isShowAcc4}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Pengalaman</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc4
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc4 ? (
              <div className="my-4 px-1 space-y-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="<1"
                    id="<1"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="<1">
                    Kurang dari setahun
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="1-3"
                    id="1-3"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="1-3">
                    1 - 3 tahun
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="3-5"
                    id="3-5"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="3-5">
                    3 - 5 tahun
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name=">10"
                    id=">10"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor=">10">
                    Lebih dari 10 tahun
                  </label>
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr className="my-4" />
          </div>

          {/* Accordion 5 */}
          <div className="">
            <button
              onClick={isShowAcc5}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Kategori Pekerjaan</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc5
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc5 ? (
              <div className="my-4 px-1 space-y-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="business"
                    id="business"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="business">
                    Business Development / Sales
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="marketing"
                    id="marketing"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="marketing">
                    Marketing
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="softwareEngineer"
                    id="softwareEngineer"
                    className="cursor-pointer"
                  />
                  <label
                    className="text-sm cursor-pointer"
                    htmlFor="softwareEngineer"
                  >
                    Software Engineer
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"checkbox"}
                    name="desain"
                    id="desain"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="desain">
                    Desain
                  </label>
                </div>
              </div>
            ) : (
              <></>
            )}
            <hr className="my-4" />
          </div>

          {/* Accordion 6 */}
          <div className="">
            <button
              onClick={isShowAcc6}
              className="w-full font-normal text-sm flex items-center justify-between hover:text-[#017EB7]"
            >
              <p>Terakhir Diperbarui</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  showAcc6
                    ? "w-5 h-5 transition-all duration-300"
                    : "w-5 h-5 -rotate-180 transition-all duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
            {showAcc6 ? (
              <div className="my-4 px-1 space-y-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type={"radio"}
                    name="radio"
                    id="24"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="24">
                    24 Jam Terakhir
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"radio"}
                    name="radio"
                    id="seminggu"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="seminggu">
                    Seminggu Terakhir
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"radio"}
                    name="radio"
                    id="sebulan"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="sebulan">
                    Sebulan Terakhir
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type={"radio"}
                    name="radio"
                    id="kapanpun"
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="kapanpun">
                    Kapan pun
                  </label>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Button */}
          <button className="w-full lg:hidden bg-[#017EB7] text-white font-semibold py-2 rounded-md mt-4 mb-2">
            TEMUKAN LOWONGAN
          </button>
        </div>
      </div>

      {/* 0-1023px Filter button on top */}
      <div className="w-full absolute -mt-5 px-4 pl-6">
        <div
          onClick={isShowFilterMobile}
          className="w-full mx-auto lg:hidden flex items-center justify-center py-1 space-x-1 bg-white border-[1px] border-slate-300 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-slate-600 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>

          <p className="text-slate-600 text-sm text-center">Filter</p>
        </div>
      </div>
    </>
  );
};

export default FilterJob;
