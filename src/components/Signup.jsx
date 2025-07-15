import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios.js";
export const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

 const onSubmitHandler = async (e) => {
  e.preventDefault();
console.log(user);
  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await API.post("/user/register", user);
    console.log(response);
    navigate("/login");
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    alert("Registration failed");
  }
};


  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow bg-white border border-gray-300 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
      <form onSubmit={onSubmitHandler} className="space-y-4">
        {["fullName", "username", "password", "confirmPassword"].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
            <input
              type={field.toLowerCase().includes("password") ? "password" : "text"}
              name={field}
              value={user[field]}
              onChange={handleChange}
              className="w-full input input-bordered h-10"
              placeholder={field}
            />
          </div>
        ))}

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={user.gender === "male"}
              onChange={handleGenderChange}
              className="radio"
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={user.gender === "female"}
              onChange={handleGenderChange}
              className="radio"
            />
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-block mt-4 cursor-pointer">
          Signup
        </button>

        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
