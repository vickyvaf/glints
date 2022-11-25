import { Link } from "react-router-dom";

const JoinNow = () => {
  return (
    <div className="w-full h-80 bg-[#017EB7] font-poppins flex items-center">
      <div className="w-[500px] mx-auto space-y-2 lg:space-y-3 flex flex-col">
        <h1 className="text-2xl lg:text-4xl text-center font-medium text-white">
          Mulai bangun
        </h1>
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-white uppercase pb-5">
          karier impianmu
        </h1>
        <Link to={"/auth/signup"} className="w-fit mx-auto">
          <button className="bg-slate-50 text-[#017EB7] font-bold py-3 px-14 lg:px-24 rounded-sm shadow-md active:scale-[.99] uppercase">
            Daftar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinNow;
