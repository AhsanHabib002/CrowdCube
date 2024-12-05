import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[380px] mx-auto py-[90px] px-2">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="text-center font-semibold text-2xl mb-4">
            Register Your Account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#BDE345]">Register Now</button>
          </div>
          <div className="divider"></div>
          <button className="btn btn-outline">Register With Google</button>
          <div className="flex gap-2 mt-2 text-sm">
            <p>Already have an account?</p>
            <div className="font-semibold text-[#6980ff]">
                <Link to="/auth/login"> Login</Link>
            </div>
          </div>
          
        </form>
      </div>
      
    </div>
  );
};

export default Register;
