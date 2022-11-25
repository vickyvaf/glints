import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Cookies from "js-cookie";
import { LoaderSpinner } from "../components/utils/Loader";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disableButton, setDisableButton] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setDisableButton(true);

    try {
      axios
        .post("https://jsonplaceholder.typicode.com", {
          email: email,
          password: password,
        })
        .then((res) => {
          let token = res.data.token;
          setEmail("");
          setPassword("");
          navigate("/dashboard");
          Cookies.set("token", token)
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
        <title>Sign In</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full h-screen bg-[#F2F8FA] pt-20 px-5 font-poppins">
        <div className="max-w-lg mx-auto mt-20">
          <h1 className="mx-auto text-center w-80 font-bold text-3xl leading-10">
            Let's surf your jobs with Glints
          </h1>
          <div className=" bg-white w-full mt-10 py-8 px-5 md:px-10">
            <form
              onSubmit={handleLogin}
              className="w-full flex flex-wrap justify-center gap-8"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full border-[1px] border-slate-400 outline-none py-3 px-5 focus:bg-[#EBF5FA]"
              />
              <button
                type="submit"
                className={
                  disableButton
                    ? "w-full md:w-6/12 bg-red-400 py-3 cursor-no-drop"
                    : "w-full md:w-6/12 bg-red-500 text-white font-semibold text-sm py-3 hover:shadow-md"
                }
                disabled={disableButton ? true : false}
              >
                {disableButton ? <LoaderSpinner /> : "MASUK"}
              </button>
            </form>
            <hr className="my-10" />
            <div className="w-full">
              <p className="text-center text-sm text-slate-500">
                Belum punya akun Glints?{" "}
                <Link
                  to={"/auth/signup"}
                  className="text-[#017EB7]  cursor-pointer"
                >
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
