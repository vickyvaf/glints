import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const LoginRoute = (props: any) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to={"/"} />;
    }
  };

  useEffect(() => {
    const baseUrl = process.env['REACT_APP_BASEURL']
    const fetchData = async () => {
      const result = await axios.get(`${baseUrl}`)
      console.log("result: ", result)
    }
    // fetchData()
  }, [])

  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          {/* Accessible Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/lowongan-kerja" element={<Jobs />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />

          {/* Need Token to Access */}
          <Route
            path="/dashboard"
            element={
              <LoginRoute>
                <Dashboard />
              </LoginRoute>
            }
          />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
          <Route path="/:/*" element={<NotFound />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
};

export default App;
