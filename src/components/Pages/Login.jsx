import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleForgotPassword = () => {
    navigate("/auth/forget", { state: { email } });
  };
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        Swal.fire("Logged In", "Your Login is Successful.", "success");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });

    setError();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase letter, and one lowercase letter."
      );
      return;
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="max-w-[380px] mx-auto py-[90px] px-2">
      <ToastContainer />
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShow(!show)}
              className="btn btn-xs absolute right-4 top-12"
            >
              <FaEye></FaEye>
            </button>
            <label className="label">
              <button
                onClick={handleForgotPassword}
                className="label-text-alt link link-hover"
              >
                {" "}
                Forget password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#BDE345]">Login</button>
          </div>
        </form>
        <div className="px-8 w-full">
          <div className="divider"></div>
          <button  onClick={handleGoogleLogin} className="btn btn-outline w-full">Login With Google</button>

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
