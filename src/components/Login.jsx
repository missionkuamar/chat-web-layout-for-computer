import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios.js";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice"; // ✅ Import your action

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch(); // ✅ Correct hook
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/user/login", user);
      console.log("Login Success:", response.data);
      console.log("Dispatching user:", response.data);
      localStorage.setItem("authUser", JSON.stringify(response.data));
      dispatch(setAuthUser(response.data));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed");
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow bg-white border border-gray-200 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
            className="w-full input input-bordered h-10"
            type="text"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full input input-bordered h-10"
            type="password"
          />
        </div>

        <button
          className="btn btn-block mt-2 border border-none cursor-pointer"
          type="submit"
        >
          Login
        </button>

        <p className="text-center text-sm mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
