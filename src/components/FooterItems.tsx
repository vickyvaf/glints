import { Link } from "react-router-dom";

const FooterItems = () => {
  return (
    <div className="w-full flex flex-wrap gap-y-10">
      <div className="w-6/12 md:w-4/12">
        <h1 className="text-[#6A6A6A] mb-5 font-semibold">PERUSAHAAN</h1>
        <div className="flex flex-col gap-y-5">
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Tim Kami
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Hired Blog
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Inside Glints
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Tech Blog
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Careers
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Report Vulnerability
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="w-6/12 md:w-4/12">
        <h1 className="text-[#6A6A6A] mb-5 font-semibold">TEMUKAN LOWONGAN BERDASARKAN</h1>
        <div className="flex flex-col gap-y-5">
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Help Center
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Lokasi Pekerjaan
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Nama Perusahaan
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Kategori Pekerjaan
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Posisi Pekerjaan
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Paling Banyak Dicari
          </Link>
        </div>
      </div>
      <div className="w-6/12 md:w-4/12">
        <h1 className="text-[#6A6A6A] mb-5 font-semibold">BUSINESS SOLUTIONS</h1>
        <div className="flex flex-col gap-y-5">
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            For Employers
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            HR Tips
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Glints Platform
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Recruitment
          </Link>
          <Link
            to={"/"}
            className="text-[#F3F3F3] hover:text-white text-sm font-medium"
          >
            Managed Talent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
