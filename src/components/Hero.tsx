const Hero = () => {
  return (
    <div className="w-full bg-[#F2F8FA] font-poppins overflow-hidden">
      <h1 className="w-full flex gap-x-1 md:block md:w-[480px] mx-auto pl-5 text-xl md:text-4xl font-bold uppercase md:text-center py-10">
        <p>Mau Jadi</p> {" "} Software Engineer?
      </h1>
      <hr className="bg-[#FFF240] h-1 w-20 mx-auto rounded-full" />
      <p className="md:mx-auto md:text-center w-96 md:w-[420px] mt-10 md:text-xl ml-5">
        Ikuti program 12 minggu dan kuasai keterampilan yang paling dicari saat
        ini.
      </p>
      <div className="max-w-[1280px] flex mx-auto justify-between py-20 overflow-x-scroll md:overflow-x-auto">
        <div className="flex flex-row ">
          <div className="w-[320px] md:w-4/12 border-r-2 px-5 space-y-10">
            <img src="/images/home-img-1.webp" alt="" className="mx-auto" />
            <p>
              Sukses dalam wawancara dan tes teknis. Kami berkomitmen untuk
              membantumu belajar, bukan hanya kemampuan teknis tapi juga soft
              skill untuk jadi developer yang kompeten.
            </p>
          </div>
          <div className="w-[320px] md:w-4/12  border-r-2 px-5 space-y-10">
            <img src="/images/home-img-2.webp" alt="" className="mx-auto" />
            <p>
              Glints Academy mempersiapkanmu untuk berkarier sebagai software
              engineer. Setelah lulus, kamu akan dipasangkan dengan berbagai
              perusahaan dalam jaringan kami.
            </p>
          </div>
          <div className="w-[320px] md:w-4/12  space-y-10 pl-5">
            <img src="/images/home-img-3.webp" alt="" className="mx-auto" />
            <p>
              Kami adalah satu-satunya bootcamp di Indonesia yang menyediakan
              akses ke praktisi engineer selama 14 jam seminggu. Pelajari
              langsung dari praktisi berpengalaman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
