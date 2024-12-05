import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[380px] mx-auto pt-[90px] px-2">
      <h2 className="text-center font-semibold text-2xl mb-4">Log In Form</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
          <div className="divider"></div>
          <button className="btn btn-outline">Login With Google</button>

          <div className="flex gap-2 mt-2 text-sm">
            <p>Don't have an account?</p>
            <div className="font-semibold text-[#6980ff]">
              <Link to="/auth/register">Regiser Now</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
