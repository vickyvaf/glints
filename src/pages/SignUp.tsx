import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LoaderSpinner } from "../components/utils/Loader";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disableButton, setDisableButton] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setDisableButton(true);

    try {
      axios
        .post("https://jsonplaceholder.typicode.com", {
          name: name,
          email: email,
          password: password,
          image_url: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        })
        .then((res) => {
          navigate("/auth/signin");
          setName("");
          setEmail("");
          setPassword("");
        })
        // .catch((err) => console.log("err: ", err))
        .finally(() => setDisableButton(false));
    } catch (error) {
      // console.log("error: ", error);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full md:h-screen bg-[#F2F8FA] pt-20 pb-20  px-5 md:px-0 font-poppins">
        <div className="max-w-3xl mx-auto mt-20">
          <h1 className="mx-auto text-center w-64 font-bold text-3xl leading-10">
            Let's create your Glints profile
          </h1>
          <div className=" bg-white w-full mt-10 py-8 px-5 ">
            <form
              onSubmit={handleRegister}
              className="w-full flex flex-wrap justify-center gap-8"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nama depan"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                type="text"
                placeholder="Nama belakang"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                type="text"
                placeholder="Lokasi"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                type="text"
                placeholder="Telepon"
                className="w-full md:w-5/12 border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <button
                type="submit"
                className={disableButton ? 'w-full md:w-6/12 bg-red-400 py-3 cursor-no-drop' : "w-full md:w-6/12 bg-red-500 text-white font-semibold text-sm py-3 hover:shadow-md"}
                disabled={disableButton ? true : false}
              >
                {disableButton ? <LoaderSpinner /> : "DAFTAR"}
              </button>
            </form>
            <hr className="my-10" />
            <div className="w-full">
              <p className="text-center text-sm text-slate-500">
                Sudah punya akun Glints?{" "}
                <Link
                  to={"/auth/signin"}
                  className="text-[#017EB7]  cursor-pointer"
                >
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
