import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://ai-career-assistant-backend-b6ux.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 w-[400px]">

        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl text-xl font-bold text-white shadow-lg"
          >
            Login
          </button>

        </form>

        <p className="text-gray-300 mt-6 text-center">

          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;