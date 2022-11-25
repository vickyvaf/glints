import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full font-poppins">
        <div className="pt-28 mx-auto max-w-xl flex flex-col justify-center">
          <img src="images/404.webp" alt="" className="w-80 mx-auto"/>
          <h1 className="text-center font-normal text-3xl py-10">
            Halaman tidak ditemukan
          </h1>
          <p className="text-center text-sm">
            Aduh, kamu mungkin telah berkelana terlalu jauh!
          </p>
          <p className="text-center text-sm">
            (Halaman yang kamu minta tidak ditemukan atau mungkin telah
            dipindahkan.)
          </p>
          <div className="w-fit mx-auto mt-5">
            <Link to={"/"}>
              <button className="text-slate-50 text-sm w-56 bg-[#017EB7] font-bold py-3 rounded-sm shadow-md active:scale-[.99] uppercase">
                BAWA SAYA KEMBALI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
