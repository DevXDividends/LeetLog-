import { useState } from "react";
import dsa_data from "./data/dsa_data.json";
import description from "./data/dsa_descriptions.json";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(dsa_data)[0]);

  const [collapsed, setCollapsed] = useState(false);
  const [problem, setProblem] = useState("");

  return (
    <div>
      <button
        className="fixed top-4 left-4 z-50 h-10 w-10 rounded-md text-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? ">>" : "<<"}
      </button>

      <Sidebar collapsed={collapsed} setProblem={setProblem}setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic} />
      <MainPage collapsed={collapsed} />
    </div>
  );
}

export default App;

function Sidebar({ collapsed, setProblem, setSelectedTopic,selectedTopic }) {
  const topics = Object.keys(dsa_data);
  return (
    <div
      className={`h-screen w-[320px] bg-[#262730] border-r border-gray-700 flex flex-col py-6 font-sans fixed top-0 left-0 transition-transform    duration-300
                  ${collapsed ? "-translate-x-full" : "translate-x-0"} `}
    >
      <div className="flex justify-between items-center px-6 mb-6">
        <label className="text-white text-xl font-semibold tracking-wide whitespace-nowrap flex items-center gap-3">
          <span className="text-2xl">📂</span> LeetLog Archive
        </label>
      </div>

      <hr className="border-gray-600 mb-6 mx-6" />

      <div className="px-6 mb-8">
        <p className="block font-bold text-white text-sm mb-2 text-left">
          Select Topic
        </p>

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="w-full bg-[#0E1117] text-white text-sm py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-gray-400 cursor-pointer"
        >
          {/* {console.log(selectedTopic)} */}
          {topics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <ProblemList
        selectedTopic={dsa_data[selectedTopic]}
        setProblem={setProblem}
      />
    </div>
  );
}

function ProblemList({ selectedTopic, setProblem }) {
  const keys = Object.keys(selectedTopic);

  return (
    <div className="px-6 flex-1 overflow-y-auto flex flex-col gap-2">
      {keys.map((problemName) => (
        <label
          key={problemName}
          className="font-bold flex items-center gap-3 text-xs text-white hover:text-gray-200 transition-colors leading-tight cursor-pointer whitespace-nowrap"
        >
          <input
            type="radio"
            name="problem"
            className=" mt-[3px] h-3 w-3 accent-red-500 cursor-pointer"
            onChange={() => {
              setProblem(dsa_data[problemName]);
              const code = selectedTopic[problemName];
              console.log(code);
            }}
          />
          {problemName}
        </label>
      ))}
    </div>
  );
}
function MainPage({ collapsed }) {
  return (
    <div
      className={`
        min-h-screen
        bg-[#0E1117]
        text-white
        transition-all
        duration-300
        ease-in-out
        ${collapsed ? "ml-0" : "ml-[320px]"}
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-6
        "
      >
        <ProblemDescription />
        <ProblemExamples />
        <Code />
      </div>
    </div>
  );
}
function ProblemDescription() {
  return (
    <div className="mb-12">
      <h1
        className="
          text-5xl
          font-bold
          text-white
          mb-6
        "
      >
        Aggressive Cows
      </h1>

      <div
        className="
          text-gray-400
          text-sm
          mb-2
        "
      >
        Category: Binary Search
      </div>

      <div
        className="
          text-white
          text-lg
          mb-10
        "
      >
        Source: GFG
      </div>

      <h2
        className="
          text-4xl
          font-bold
          mb-6
        "
      >
        Description
      </h2>

      <p
        className="
          text-gray-200
          text-lg
          leading-8
        "
      >
        Problem description goes here...
      </p>
    </div>
  );
}

function ProblemExamples() {
  return (
    <div className="mb-12">
      <h2
        className="
          text-4xl
          font-bold
          mb-6
        "
      >
        Examples
      </h2>

      <div
        className="
          border
          border-gray-700
          rounded-xl
          p-6
          bg-[#0B1220]
        "
      >
        Example Card Here
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="mb-12">
      <h2
        className="
          text-4xl
          font-bold
          mb-6
        "
      >
        Code
      </h2>

      <div
        className="
          relative
          border
          border-gray-700
          rounded-xl
          overflow-hidden
          bg-[#1A1F2E]
        "
      >
        <pre
          className="
            p-8
            overflow-x-auto
            text-sm
            font-mono
            text-gray-200
          "
        >
          {`class Solution {
public:
    int aggressiveCows(...) {

    }
};`}
        </pre>
      </div>
    </div>
  );
}
