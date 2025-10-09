import { NavLink, Outlet } from "react-router-dom";
import authImage from "../assets/authImage.png";
import logo from "../assets/logo.png";
import Footer from "../pages/shared/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Logo */}
      <div className="bg-base-200 p-8 rounded-lg shadow-lg w-full">
        <div className="mb-8">
          <NavLink className="flex items-center gap-2" to="/">
            <img className="w-8 h-8 rounded-xl" src={logo} alt="Packero" />
            <span className="text-4xl font-bold font-permanent-marker">
              Packero
            </span>
          </NavLink>
        </div>

        {/* Main content */}
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src={authImage}
              className="max-w-sm w-full rounded-lg"
              alt="Auth"
            />
          </div>
          <div className="flex-1 flex justify-center w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
