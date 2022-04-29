import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label html="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <span className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </span>
        <span className="col">
          <a href="#!">Forgot password?</a>
        </span>
      </div>
      <button type="submit" className="btn btn-primary">
        LOGIN
      </button>
      <p className="small fw-bold mt-2 pt-1 mb-0">
        Don't have an account?{" "}
        <Link to={"/register"} className="link-danger">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
