import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {

  // STATES

  const [file, setFile] = useState(null);

  const [score, setScore] = useState(0);

  const [skills, setSkills] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  const [loading, setLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // ANALYZE RESUME

 const analyzeResume = async () => {

  if (!file) {

    alert("Please upload resume");

    return;
  }

  try {

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);

    const token = localStorage.getItem("token");

    const response = await axios.post(
  "https://ai-career-assistant-backend-b6ux.onrender.com/api/resume/upload",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

    console.log(response.data);

    // REAL BACKEND DATA

    setScore(response.data.score || 0);

    setSkills(response.data.skills || []);

    setSuggestions(response.data.suggestions || []);

  } catch (error) {

    console.log(error);

    alert("Resume analysis failed");

  } finally {

    setLoading(false);
  }
};

  return (

    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* SIDEBAR */}

    {/* SIDEBAR */}

<div className="w-72 min-h-screen bg-gradient-to-b from-[#020617] via-[#03113a] to-[#020617] border-r border-slate-800 p-5 flex flex-col">

  {/* LOGO */}

  <div className="mb-12">

    <h1 className="text-5xl font-extrabold leading-tight tracking-tight">

      <span className="text-cyan-400">
        AI
      </span>

      <br />

      <span className="text-white">
        Career
      </span>

    </h1>

  </div>

  {/* MENU */}

  <div className="space-y-5">

    {/* Dashboard */}

    <div
      onClick={() => setActiveMenu("dashboard")}
      className={`group relative overflow-hidden rounded-3xl px-6 py-5 cursor-pointer transition-all duration-300 hover:scale-[1.03]

      ${
        activeMenu === "dashboard"
          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400 shadow-lg shadow-cyan-500/20"
          : "bg-slate-800/70 border border-slate-700 hover:border-cyan-400"
      }
      `}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <span className="text-3xl">
            📊
          </span>

          <span className="text-2xl font-bold text-white tracking-wide">
            Dashboard
          </span>

        </div>

        <span className="text-cyan-400 text-3xl group-hover:translate-x-1 transition">
          ›
        </span>

      </div>

    </div>

    {/* Resume */}

    <div
      onClick={() => setActiveMenu("resume")}
      className={`group relative overflow-hidden rounded-3xl px-6 py-5 cursor-pointer transition-all duration-300 hover:scale-[1.03]

      ${
        activeMenu === "resume"
          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400 shadow-lg shadow-cyan-500/20"
          : "bg-slate-800/70 border border-slate-700 hover:border-cyan-400"
      }
      `}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <span className="text-3xl">
            📄
          </span>

          <span className="text-2xl font-bold text-white tracking-wide">
            Resume Analysis
          </span>

        </div>

        <span className="text-cyan-400 text-3xl group-hover:translate-x-1 transition">
          ›
        </span>

      </div>

    </div>

    {/* Interview */}

    <div
      onClick={() => setActiveMenu("interview")}
      className={`group relative overflow-hidden rounded-3xl px-6 py-5 cursor-pointer transition-all duration-300 hover:scale-[1.03]

      ${
        activeMenu === "interview"
          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400 shadow-lg shadow-cyan-500/20"
          : "bg-slate-800/70 border border-slate-700 hover:border-cyan-400"
      }
      `}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <span className="text-3xl">
            ❓
          </span>

          <span className="text-2xl font-bold text-white tracking-wide">
            Interview Questions
          </span>

        </div>

        <span className="text-cyan-400 text-3xl group-hover:translate-x-1 transition">
          ›
        </span>

      </div>

    </div>

    {/* Analytics */}

    <div
      onClick={() => setActiveMenu("analytics")}
      className={`group relative overflow-hidden rounded-3xl px-6 py-5 cursor-pointer transition-all duration-300 hover:scale-[1.03]

      ${
        activeMenu === "analytics"
          ? "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400 shadow-lg shadow-cyan-500/20"
          : "bg-slate-800/70 border border-slate-700 hover:border-cyan-400"
      }
      `}
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <span className="text-3xl">
            📈
          </span>

          <span className="text-2xl font-bold text-white tracking-wide">
            Skill Analytics
          </span>

        </div>

        <span className="text-cyan-400 text-3xl group-hover:translate-x-1 transition">
          ›
        </span>

      </div>

    </div>

  </div>

  {/* LOGOUT */}

  <div className="mt-auto pt-10">

    <button className="w-full bg-slate-800 hover:bg-red-500 transition-all duration-300 border border-slate-700 hover:border-red-400 rounded-3xl py-5 text-2xl font-bold text-white shadow-lg hover:scale-[1.02]">

      Logout

    </button>

  </div>

</div>

      {/* MAIN CONTENT */}

      <div className="flex-1 p-8 bg-gradient-to-br from-[#020617] via-[#030b1d] to-[#020617] overflow-y-auto">

        {/* TITLE */}

        <h1 className="text-4xl font-bold mb-10 text-white tracking-wide">

          AI Career Assistant Dashboard

        </h1>

        {/* DASHBOARD CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* SCORE */}

          <div className="bg-slate-900/80 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-7 shadow-xl hover:scale-[1.02]">

            <p className="text-gray-400 text-lg mb-3">
              Resume Score
            </p>

            <h2 className="text-5xl font-bold text-cyan-400">
              {score}%
            </h2>

          </div>

          {/* SKILLS */}

          <div className="bg-slate-900/80 backdrop-blur-lg border border-green-500/10 hover:border-green-400 transition-all duration-300 rounded-3xl p-7 shadow-xl hover:scale-[1.02]">

            <p className="text-gray-400 text-lg mb-3">
              Skills Found
            </p>

            <h2 className="text-5xl font-bold text-green-400">
              {skills.length}
            </h2>

          </div>

          {/* SUGGESTIONS */}

          <div className="bg-slate-900/80 backdrop-blur-lg border border-pink-500/10 hover:border-pink-400 transition-all duration-300 rounded-3xl p-7 shadow-xl hover:scale-[1.02]">

            <p className="text-gray-400 text-lg mb-3">
              Suggestions
            </p>

            <h2 className="text-5xl font-bold text-pink-400">
              {suggestions.length}
            </h2>

          </div>

        </div>

        {/* UPLOAD SECTION */}

        <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 shadow-xl mb-10">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Upload Resume
          </h2>

          <div className="border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 rounded-3xl p-10 text-center bg-slate-950/40">

            <p className="text-gray-400 mb-6 text-lg">
              Drag & Drop Resume PDF Here
            </p>

            <input
              type="file"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
              className="mb-6 block mx-auto text-sm text-gray-400
              file:mr-4 file:py-3 file:px-6
              file:rounded-xl file:border-0
              file:text-sm file:font-semibold
              file:bg-cyan-500 file:text-white
              hover:file:bg-cyan-600"
            />

            <button
              onClick={analyzeResume}
              className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-10 py-4 rounded-2xl text-lg font-semibold text-white shadow-lg hover:scale-105"
            >

              {
                loading
                  ? "Analyzing..."
                  : "Analyze Resume"
              }

            </button>

          </div>

        </div>

        {/* AI CHAT */}

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 px-10 py-4 rounded-2xl text-lg font-bold text-white shadow-xl hover:scale-105">

          <h2 className="text-3xl font-bold mb-6 text-white">
            AI Career Chat
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask AI about career guidance..."
              className="mb-6 block mx-auto text-sm text-gray-300
file:mr-4 file:py-4 file:px-8
file:rounded-2xl file:border-0
file:text-lg file:font-bold
file:bg-gradient-to-r
file:from-cyan-500
file:to-blue-500
file:text-white
hover:file:from-cyan-400
hover:file:to-blue-400"
            />

            <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold text-white shadow-lg hover:scale-105">

              Ask AI

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;