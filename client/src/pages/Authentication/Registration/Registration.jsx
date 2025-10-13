import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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
            <span>
              Already Have an Account?{" "}
              <NavLink className="link link-hover" to="/login">
                Login Now
              </NavLink>
            </span>
          </div>
          <button className="btn btn-neutral mt-4 w-64">
            Create An Account
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Registration;
