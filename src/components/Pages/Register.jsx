import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase letter, and one lowercase letter."
      );
      return;
    }

    setError("");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="max-w-[380px] mx-auto py-[90px] px-2">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-2xl mb-4">
            Register Your Account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setShow(!show)}
              className="btn btn-xs absolute right-4 top-12"
            >
              <FaEye></FaEye>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#BDE345]">Register Now</button>
          </div>
        </form>
        <div className="px-8 w-full">
          <div className="divider"></div>
          <button className="btn btn-outline w-full">
            Register With Google
          </button>
          <div className="flex gap-2 mt-4 text-sm  mb-6">
            <p>Already have an account?</p>
            <div className="font-semibold text-[#6980ff]">
              <Link to="/auth/login"> Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
