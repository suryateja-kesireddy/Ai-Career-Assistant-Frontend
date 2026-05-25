import { useState } from "react";
import API from "../services/api";

function AIChat() {

  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const handleChat = async () => {

    try {

      const response = await API.post(
        "/chat",
        {
          message,
        }
      );

      setReply(response.data.reply);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-5">
        AI Career Chat
      </h2>

      <input
        type="text"
        placeholder="Ask AI..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        className="w-full p-4 rounded-lg text-black"
      />

      <button
        onClick={handleChat}
        className="mt-4 bg-cyan-500 px-5 py-2 rounded-lg"
      >
        Ask AI
      </button>

      {
        reply && (

          <div className="mt-6 bg-slate-700 p-5 rounded-lg">

            <h3 className="font-bold mb-2">
              AI Response
            </h3>

            <p>{reply}</p>

          </div>
        )
      }

    </div>
  );
}

export default AIChat;