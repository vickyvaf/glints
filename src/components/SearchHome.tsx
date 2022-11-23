const SearchHome = () => {
  return (
    <div className="pt-20 bg-[#FFF240] w-full px-5 font-poppins">
      <div className="w-full space-y-7 py-10">
        <h1 className="text-center font-medium text-xl">
          Jelajahi <span className="font-bold">5000+</span> pekerjaan baru
          setiap bulan!
        </h1>
        <div className="flex justify-center gap-x-5">
          <div className="w-full lg:w-5/12 rounded-lg outline-none bg-[#EBF5FA] focus:bg-[#C2E0EE] flex items-center relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 absolute text-slate-500 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type={"text"}
              placeholder="Cari lowongan"
              className="w-full h-full outline-none bg-[#EBF5FA] focus:bg-[#C2E0EE] pl-9 py-2"
            />
          </div>
          <div className="hidden lg:w-5/12 rounded-lg outline-none bg-[#EBF5FA] focus:bg-[#C2E0EE] lg:flex items-center relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 absolute text-slate-500 ml-3"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <input
              // value={"Lumajang"}
              type={"text"}
              placeholder="Tambahkan kota"
              className="w-full h-full outline-none bg-[#EBF5FA] focus:bg-[#C2E0EE] pl-9 py-2"
            />
          </div>
          <button className="hidden lg:block py-2 px-16 bg-[#017EB7] text-white rounded-lg font-bold">
            CARI
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
