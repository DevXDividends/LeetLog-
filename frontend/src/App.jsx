import { useState } from "react";
import dsa_data from "./data/dsa_data.json";
import description from "./data/dsa_descriptions.json";
import Sidebar from "./Sidebar.jsx"
import MainPage from "./MainPage.jsx";

function App() {
  const topics  = Object.keys(dsa_data);
  const firstTopic = topics[0];
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
        topics = {topics}
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

