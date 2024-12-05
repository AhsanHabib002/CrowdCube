import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
    .then(result => {
        const user = result.user;
        setUser(user);
    })
    .catch((error) => {
        alert(error.code);
    });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase letter, and one lowercase letter."
      );
      return;
    }

    setError("");
  };
  return (
    <div className="max-w-[380px] mx-auto py-[90px] px-2">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-2xl mb-4">
            Login Your Account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#BDE345]">Login</button>
          </div>
        </form>
        <div className="px-8 w-full">
          <div className="divider"></div>
          <button className="btn btn-outline w-full">Login With Google</button>

          <div className="flex gap-2 mt-4 text-sm  mb-6">
            <p>Don't have an account?</p>
            <div className="font-semibold text-[#6980ff] ">
              <Link to="/auth/register">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
