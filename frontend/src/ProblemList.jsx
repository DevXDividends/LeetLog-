
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
export default ProblemList;