import ProblemDescription from "./ProbemDescription";
import ProblemExamples from "./ProblemExamples";
import ProblemMeta from "./ProblemMeta";
import Code from "./Code";

function MainPage({ collapsed, problemData, selectedTopic }) {
  return (
    <div
      className={`min-h-screen bg-[#0E1117] text-white transition-all duration-300 ease-in-out ${collapsed ? "ml-0" : "ml-[320px]"}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 ">
        <ProblemDescription
          selectedTopic={selectedTopic}
          problem={problemData["title"]}
          source={problemData["source"]}
          link={problemData["link"]}
          description={problemData["description"]}
        >
          <ProblemMeta
            constraints={problemData["constraints"]}
            difficulty={problemData["difficulty"]}
          />
        </ProblemDescription>

        <ProblemExamples examples={problemData["examples"]} />
        <Code code={problemData["code"]} />
      </div>
    </div>
  );
}
export default MainPage;
