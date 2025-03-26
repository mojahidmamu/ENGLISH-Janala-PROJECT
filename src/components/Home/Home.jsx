import { Link } from "react-router-dom";
import CoverImage from "../../assets/assets/01.bmp";

const Home = () => {
  return (
    <div
      className="hero min-h-screen flex justify-around items-center mt-5 gap-10"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold my-2">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold my-2">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold my-2">Email</span>
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
              <span className="label-text font-bold my-2">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Link to='/newUser '>
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="w-1/2 ">
        <img className="h-auto w-full rounded-lg" src={CoverImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
