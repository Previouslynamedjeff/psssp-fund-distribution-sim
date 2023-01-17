import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login, isLoggedIn } from "../db";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isTimedOut, setIsTimedOut] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "" || password === "") {
      return;
    }

    try {
      login(userName, password);

      navigate("/");
    } catch (error) {
      console.error(error);

      setIsTimedOut(true);
      setTimeout(() => {
        setIsTimedOut(false);
      }, 2000);
    }
  };

  return (
    <form className="flex flex-col bg-white p-8 rounded-2xl shadow-lg">
      <h1 className="text-2xl text-center mb-6">Welcome!</h1>
      <input
        type="text"
        placeholder="Username"
        className="p-2 rounded-xl mb-3 bg-blue-50 text-lg focus:outline-none focus:bg-blue-100 transition-colors focus:placeholder:text-neutral-500"
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded-xl mb-6 bg-blue-50 text-lg focus:outline-none focus:bg-blue-100 transition-colors focus:placeholder:text-neutral-500"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <input
          className={
            "py-2 px-6 mr-6 rounded-xl w-fit hover:cursor-pointer  transition-color duration-100 text-lg " +
            (isTimedOut
              ? "bg-neutral-300 hover:bg-neutral-400"
              : "bg-blue-400 hover:bg-blue-500")
          }
          type="submit"
          onClick={handleSubmit}
          value={isTimedOut ? "Try again" : "Log in"}
        />
        <NavLink
          to="/sign-up"
          className="hover:underline text-blue-500 text-md"
        >
          Sign up
        </NavLink>
      </div>
    </form>
  );
}

function Login() {
  return (
    <div className="bg-slate-100 h-screen w-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}

export default Login;
