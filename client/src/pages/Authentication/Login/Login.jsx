import React from "react";
import { useForm } from "react-hook-form";

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
            <p className="text-white bg-error p-2 rounded-xl" role="alert">
              Email is required
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
            <p className="text-white bg-error p-2 rounded-xl" role="alert">
              Password is required
            </p>
          )}
          {/*Password Min length error check */}
          {errors.password?.type === "minLength" && (
            <p className="text-white bg-error p-2 rounded-xl" role="alert">
              Password must be at least 6 characters
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 w-32">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
