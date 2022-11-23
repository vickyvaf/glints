import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <div className="w-full bg-black py-20 px-5 font-poppins flex flex-col lg:flex-row">
      <div className="w-full lg:w-6/12 text-white lg:pr-20 text-center lg:text-left">
        <img src="images/logo-footer.svg" alt="" className="w-32 mx-auto lg:mx-0" />
        <div className="mt-10">
          <p className="text-sm">Glints Asia Pacific</p>
          <div className="flex gap-x-4 my-4 w-fit mx-auto lg:mx-0">
            <img src="images/singapore.png" alt="" />
            <img src="images/malaysia.png" alt="" />
            <img src="images/indonesia.png" alt="" />
            <img src="images/vietnam.png" alt="" />
            <img src="images/taiwan.png" alt="" />
          </div>
          <p className="text-xs leading-5">
            Glints adalah ekosistem talenta terdepan di kawasan Asia Tenggara.
            Misi kami adalah mewujudkan 120 juta profesional di kawasan untuk
            terus mengembangkan karirnya dan memberdayakan organisasi sehingga
            dapat menemukan kandidat yang tepat dari penjuru Asia Tenggara.
            Secara resmi berdiri di Singapura pada tahun 2015 di Singapura,
            Glints telah memberdayakan lebih dari 3 juta talenta dan 50.000
            organisasi untuk mewujudkan potensi terbaiknya. Hari ini, kami
            berada di garis depan pemberdayaan kandidat sebagai startup dengan
            pertumbuhan tercepat khususnya kategori pengembangan karir dan
            rekrutmen. Saat ini, Glints beroperasi di Indonesia, Malaysia,
            Singapura, Vietnam Filipina dan Taiwan.
          </p>
        </div>
        <div>
          {/* <FaFacebookF className="w-5 h-5 hover:bg-slate-400 rounded-full" /> */}
        </div>
      </div>
      <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
        <FooterItems />
      </div>
    </div>
  );
};

export default Footer;
