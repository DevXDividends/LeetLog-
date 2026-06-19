

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
export default ProblemExamples;