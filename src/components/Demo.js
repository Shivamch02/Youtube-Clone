import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  console.log("Rendering...");
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "p-2 m-4 border border-black w-96 h-96 " +
        (isDarkTheme && "bg-gray-800 text-white")
      }
    >
      <div>
        <button
          className=" p-2 m-2 bg-green-300 border border-black"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>Nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
