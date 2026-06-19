import ProblemDescription from "./ProbemDescription";
import ProblemExamples from "./ProblemExamples";
import Code from "./Code";

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
export default MainPage;