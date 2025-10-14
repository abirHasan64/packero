import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold">Create an account</h1>
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
            <p className="text-red-600 text-sm mt-2 font-medium animate-pulse" role="alert">
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
            <p className="text-red-600 text-sm mt-2 font-medium animate-pulse" role="alert">
              Please enter your password.
            </p>
          )}
          {/*Password Min length error check */}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-2 font-medium animate-pulse" role="alert">
              Password must be at least 6 characters long.
            </p>
          )}
          <div>
            <span>
              Already Have an Account?{" "}
              <NavLink className="link link-hover btn btn-link" to="/login">
                Login Now
              </NavLink>
            </span>
          </div>
          <div className="text-center">
            <button className="btn btn-neutral mt-4 w-42">
              Create An Account
            </button>
          </div>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Registration;
