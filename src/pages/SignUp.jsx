import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../db";

function SignUpForm() {
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
      signUp(userName, password);
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
      <h1 className="text-2xl text-center mb-6">Sign Up!</h1>
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
          value={isTimedOut ? "Username taken" : "Sign up"}
        />
      </div>
    </form>
  );
}

function SignUp() {
  return (
    <div className="bg-slate-100 h-screen w-screen flex justify-center items-center">
      <SignUpForm />
    </div>
  );
}

export default SignUp;
