import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSideHeader, setShowSideHeader] = useState(false);

  const isShowSideHeader = () => {
    setShowSideHeader((state) => !state);
  };

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setShowProfile(false);
    } else if (Cookies.get("token") === undefined) {
      setShowProfile(true);
    }
  }, [Cookies]);

  return (
    <div className="w-full bg-white py-3 px-10 border-b-[1px] border-b-slate-300 font-poppins fixed z-50">
      {/* SideHeader */}
      {showSideHeader ? (
        <div
          className={
            showSideHeader
              ? "w-72 h-screen bg-[#017EB7] absolute -mt-3 right-0 py-8 font-poppins"
              : ""
          }
        >
          <div className="relative w-full">
            <button onClick={isShowSideHeader} className="absolute right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-white font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            to={"/auth/signin"}
            className=" text-white font-medium text-base"
            onClick={isShowSideHeader}
          >
            <div className="mt-20 pl-5 w-full hover:bg-[#01557B] cursor-pointer py-3">
              MASUK
            </div>
          </Link>
          <Link
            to={"/auth/signup"}
            className=" text-white font-medium text-base"
            onClick={isShowSideHeader}
          >
            <div className="pl-5 w-full hover:bg-[#01557B] cursor-pointer py-3">
              DAFTAR
            </div>
          </Link>
          <hr className="mx-5 my-3" />
          <Link
            to={"/lowongan-kerja"}
            className=" text-white font-medium text-base"
            onClick={isShowSideHeader}
          >
            <div className="pl-5 w-full hover:bg-[#01557B] cursor-pointer py-3">
              LOWONGAN KERJA
            </div>
          </Link>
          <hr className="mx-5 my-3" />
          <div className="w-full py-3">
            <Link
              to={"/"}
              className=" ml-5 text-white font-medium text-base flex items-center w-fit py-2 px-3 border-white border-[1px] gap-x-3 hover:bg-[#01557B]"
              onClick={isShowSideHeader}
            >
              <button className="">UNTUK PERUSAHAAN</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Header */}
      <nav className="w-full flex items-center justify-between">
        <div className="w-fit flex items-center gap-x-7">
          <Link to={"/"} className="flex items-center">
            <img src="/images/logo.webp" alt="logo" className="w-14" />
          </Link>
          <Link
            to={"/lowongan-kerja"}
            className="hidden md:flex text-xs text-slate-800 font-medium uppercase"
          >
            Lowongan Kerja
          </Link>
        </div>
        {showProfile ? (
          <>
            <div className="hidden md:flex items-center gap-x-5">
              <Link
                to={"/auth/signup"}
                className="text-xs text-slate-800 font-medium uppercase"
              >
                Daftar
              </Link>
              <Link
                to={"/auth/signin"}
                className="text-xs text-slate-800 font-medium uppercase"
              >
                Masuk
              </Link>
              <Link
                to={"/"}
                className="text-xs text-white font-medium uppercase bg-[#017EB7] py-2 px-3 flex items-center gap-x-3"
              >
                Untuk Perusahaan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
            {/* Hamburger */}
            <div onClick={isShowSideHeader} className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Header;
