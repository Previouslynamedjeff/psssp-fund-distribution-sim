import { useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../db";

function SignOut() {
  const navigate = useNavigate();
  return (
    <button
      className="p-2 border-black rounded-lg bg-blue-400 hover:bg-blue-500 transition-colors duration-100"
      onClick={() => {
        logout();
        navigate("/login");
      }}
    >
      Sign out
    </button>
  );
}

function Navigation() {
  return (
    <div className="bg-neutral-300 p-4 h-full w-full flex justify-around">
      <SignOut />
    </div>
  );
}

export default Navigation;
