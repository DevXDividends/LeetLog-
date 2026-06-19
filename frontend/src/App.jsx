import { useState } from "react";
import dsa_data from "./data/dsa_data.json";
import description from "./data/dsa_descriptions.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

function App() {
  const firstTopic = Object.keys(dsa_data)[0];
  const firstProblem = Object.keys(dsa_data[firstTopic])[0];

  const [selectedTopic, setSelectedTopic] = useState(Object.keys(dsa_data)[0]);
  const [collapsed, setCollapsed] = useState(false);
  const [problem, setProblem] = useState(firstProblem);

  // use this for debugging
  //  console.log(selectedTopic);
  //  console.log(problem);
  // console.log(description[problem]["title"]);
  // console.log(description[problem]["source"]);
  // console.log(description[problem]["link"]);
  // console.log(description[problem]["description"]);
  // console.log(description[problem]["examples"]);
  // console.log(dsa_data[selectedTopic][problem]);

  return (
    <div>
      {/* button for sidebar << >> */}
      <button
        className="fixed top-4 left-4 z-50 h-10 w-10 rounded-md text-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? ">>" : "<<"}
      </button>

      <Sidebar
        collapsed={collapsed}
        setProblem={setProblem}
        setSelectedTopic={setSelectedTopic}
        selectedTopic={selectedTopic}
      />
      <MainPage
        collapsed={collapsed}
        selectedTopic={selectedTopic}
        description={description[problem]}
        code={dsa_data[selectedTopic][problem]}
      />
    </div>
  );
}

export default App;

function Sidebar({ collapsed, setProblem, setSelectedTopic, selectedTopic }) {
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
            onChange={() => setProblem(problemName)}
          />
          {problemName}
        </label>
      ))}
    </div>
  );
}
function MainPage({ collapsed, description, code, selectedTopic }) {
  return (
    <div
      className={`min-h-screen bg-[#0E1117] text-white transition-all duration-300 ease-in-out ${collapsed ? "ml-0" : "ml-[320px]"}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 ">
        <ProblemDescription
          selectedTopic={selectedTopic}
          problem={description["title"]}
          source={description["source"]}
          link={description["link"]}
          description={description["description"]}
        />

        <ProblemExamples examples={description["examples"]} />
        <Code code={code} />
      </div>
    </div>
  );
}
function ProblemDescription({
  problem,
  selectedTopic,
  source,
  link,
  description,
}) {
  return (
    <div className="mb-12">
      <h1 className="text-5xl font-bold text-white mb-6 ">{problem}</h1>

      <div className="text-gray-400 text-sm mb-2 ">
        Category: {selectedTopic}
      </div>

      <div className="text-white text-lg mb-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline"
        >
          Source: {source}
        </a>
      </div>

      <h2 className="text-4xl font-bold mb-6 ">Description</h2>

      <p className=" text-gray-200 text-lg leading-8 ">{description}</p>
    </div>
  );
}

function ProblemExamples({ examples }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-6">Examples</h2>

      {examples?.map((item, index) => (
        <div
          key={index}
          className="border border-gray-700 rounded-xl p-6 bg-[#0E1117] mb-6 "
        >
          <h3 className="text-3xl font-bold mb-8">Example {index + 1}</h3>

          <h4 className="text-2xl font-bold mb-4">Input</h4>

          <div className=" bg-[#1A1F2E] rounded-xl px-5 py-4 mb-8 font-mono text-lg text-cyan-400 overflow-x-auto ">
            {item.input}
          </div>

          <h4 className="text-2xl  font-bold mb-4">Output</h4>

          <div className="bg-[#1A1F2E] rounded-xl px-5 py-4 mb-8 font-mono text-lg text-cyan-400 overflow-x-auto ">
            {item.output}
          </div>

          <h4 className="text-2xl font-bold mb-4">Explanation</h4>

          <p className="text-gray-100 text-xl leading-9 ">{item.explanation}</p>
        </div>
      ))}
    </div>
  );
}

function Code({ code }) {
  const [copied, setCopied] = useState(false);
  const [showLineNums, setShowLineNums] = useState(false);
  function copyToClipboard() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-6">Code</h2>
      <label className="flex items-center gap-2 mb-4 text-sm text-gray-300 cursor-pointer select-none ">
        <input
          type="checkbox"
          checked={showLineNums}
          onChange={() => setShowLineNums(prev=>!prev)}
          className="h-4 w-4 accent-red-500 cursor-pointer"
        />
        Show line numbers
      </label>
      <div className="relative overflow-hidden rounded-xl border border-gray-700">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 z-10 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all "
        >
          {copied ? "Copied !" : <FiCopy />}
        </button>

        <SyntaxHighlighter
          language="cpp"
          style={atomDark}
          showLineNumbers={showLineNums}
          customStyle={{
            margin: 0,
            padding: "24px",
            background: "#1A1F2E",
            fontSize: "14px",
            borderRadius: "0px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
