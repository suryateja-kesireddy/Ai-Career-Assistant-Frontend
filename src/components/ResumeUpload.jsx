import { useState } from "react";
import API from "../services/api";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);

  const handleUpload = async () => {

    if (!file) {

      alert("Please select PDF");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      const token = localStorage.getItem("token");

      const response = await API.post(
        "/resume/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (error) {

      console.log(error);

      alert("Upload Failed");
    }
  };

  return (

    <div>

      <h2 className="text-2xl font-bold mb-5">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="mb-5"
      />

      <br />

      <button
        onClick={handleUpload}
        className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
      >
        Analyze Resume
      </button>

      {
        result && (

          <div className="mt-10">

            <h3 className="text-2xl font-bold mb-4">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">

              {
                result.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-cyan-500 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              }

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Resume Score:
              <span className="text-green-400">
                {" "} {result.score}%
              </span>

            </h3>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Suggestions
            </h3>

            <ul className="space-y-3">

              {
                result.suggestions.map(
                  (suggestion, index) => (

                    <li
                      key={index}
                      className="bg-slate-700 p-4 rounded-lg"
                    >
                      {suggestion}
                    </li>
                  )
                )
              }

            </ul>

          </div>
        )
      }

    </div>
  );
}

export default ResumeUpload;