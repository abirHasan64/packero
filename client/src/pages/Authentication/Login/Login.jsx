import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold">Welcome Back</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>

          {/* Email input */}
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {/* Email required error check */}
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-sm mt-2 font-medium animate-pulse" role="alert">
              Please enter your email address.
            </p>
          )}
          <label className="label">Password</label>

          {/* Password input */}
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {/* Password required error check */}
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-2 font-medium animate-pulse" role="alert">
              Please enter your password.
            </p>
          )}
          {/*Password Min length error check */}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-2 font-medium animate-pulse" role="alert">
              Password must be at least 6 characters long.
            </p>
          )}
          <div className="text-right">
            <a className="link link-hover">Forgot password?</a>
            <br />
            <span>
              Don't Have an Account?{" "}
              <NavLink className="link link-hover btn btn-link" to="/register">
                Register Now
              </NavLink>
            </span>
          </div>
          <div className="text-center">
            <button className="btn btn-neutral mt-4 w-42">Login</button>
          </div>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
