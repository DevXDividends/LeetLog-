import ProblemList from "./ProblemList";
import dsa_data from "./data/dsa_data.json"

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
export default Sidebar;