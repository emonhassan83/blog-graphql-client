import { useForm } from "react-hook-form";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signUp-card mx-auto mt-[4%] shadow-lg">
      <Helmet>
        <title>Uni Bookings | SignUp</title>
      </Helmet>
      <h2 className="text-center text-xl sm:text-2xl font-medium mb-6">Sign Up Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm sm:text-base">Full Name</label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          required
        />
        {errors.name && (
          <p className="text-red-500 -mt-5">
            <small>Name field is required</small>
          </p>
        )}

        <label className="text-sm sm:text-base">Username or Email</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          required
        />
        {errors.email && (
          <p className="text-red-500 -mt-5">
            <small>Email field is required</small>
          </p>
        )}

        <label className="text-sm sm:text-base">Password</label>
        <input
          type="password"
          name="password"
          defaultValue=""
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          required
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 -mt-5">
            <small>Password is required</small>
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 -mt-5">
            <small>Password must be 6 character</small>
          </p>
        )}
        <label className="text-sm sm:text-base">Your Bio</label>
        <input
          type="=text"
          defaultValue=""
          {...register("bio", { required: true })}
          required
        />

        {errors.bio && (
          <p className="text-red-500 -mt-5">
            <small>Bio field is required</small>
          </p>
        )}
        <input
          type="submit"
          value="sign up"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        <p className="text-center">
          <small>
            Already have an Account? Please{" "}
            <Link to="/login" className="text-pink-600 font-bold">
              Login
            </Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
