import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-20">
        <h1 className="text-white text-center mb-7 text-4xl font-bold">
          LOGIN
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[350px] border-2 border-[#062f3c] rounded-md py-3 px-5 text-lg text-white outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            required
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className=" w-[350px] border-2 mt-3 border-[#062f3c] rounded-md py-3 px-5 text-lg text-white outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            required
            placeholder="Password"
          />
          <button
            className="mt-3  bg-gradient-to-r from-teal-700 to-[#08374d]  rounded-md py-2 px-5 text-xl  outline-none  text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
