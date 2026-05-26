import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://ai-career-assistant-backend-b6ux.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-pink-950">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 w-[400px]">

        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Register
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-pink-400"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-pink-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-pink-400"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition py-4 rounded-xl text-xl font-bold text-white shadow-lg"
          >
            Register
          </button>

        </form>

        <p className="text-gray-300 mt-6 text-center">

          Already have an account?

          <Link
            to="/"
            className="text-pink-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;