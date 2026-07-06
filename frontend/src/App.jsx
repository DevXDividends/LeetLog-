import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import MainPage from "./MainPage.jsx";
import Loader from "./Loader.jsx";
import ErrorPage from "./ErrorPage.jsx";
import ProblemList from "./ProblemList.jsx";

function App() {
  const [AllTopics, setAllTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const [AllProblems, setAllProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState("");

  const [problemData, setProblemData] = useState(null);

  const [collapsed, setCollapsed] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchStarter() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/topics");
        const data = await response.json();
        if (!response.ok) throw new Error(data.detail);
        setError(null);
        setAllTopics(data); // set all topics
        setSelectedTopic(data[0]); // set the default first topic

        const response2 = await fetch(
          `http://localhost:8000/topics/${data[0]}`,
        );
        const data2 = await response2.json();
        if (!response2.ok) throw new Error(data2.detail);
        setError(null);
        setAllProblems(data2); // set all problems for the default topic
        setSelectedProblem(data2[0]);

        const response3 = await fetch(
          `http://localhost:8000/topics/${data[0]}/problems/${data2[0]}`,
        ); // this will return all the data of the specific problem
        const data3 = await response3.json();
        if (!response3.ok) throw new Error(data3.detail);
        setError(null);
        setProblemData(data3);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
    fetchStarter();
  }, []);

  useEffect(
    // this effect will run whenever the seletedTopic changes and will fetch new problem list of that topic
    function () {
      async function handleFetchTopics() {
        try {
          const response = await fetch(
            `http://localhost:8000/topics/${selectedTopic}`,
          );
          const data = await response.json();
          if (!response.ok) throw new Error(data.detail);
          setError(null);
          setAllProblems(data);
          setSelectedProblem(data[0]);
        } catch (err) {
          setError(err);
        }
      }
      if (selectedTopic) handleFetchTopics();
    },
    [selectedTopic],
  );

  useEffect(
    function () {
      async function fetchProblemData() {
        try {
          const response = await fetch(
            `http://localhost:8000/topics/${selectedTopic}/problems/${selectedProblem}`,
          );
          const data = await response.json();
          if (!response.ok) throw new Error(data.detail);
          setError(null);
          setProblemData(data);
        } catch (err) {
          setError(err);
          setProblemData(null);
        }
      }
      if (selectedTopic && selectedProblem) fetchProblemData();
    },
    [selectedProblem],
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage message={error.message} />;
  return (
    <div>
      {!isLoading ? (
        <>
          <button
            className="fixed top-4 left-4 z-50 h-10 w-10 rounded-md text-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? ">>" : "<<"}
          </button>
          <Sidebar
            collapsed={collapsed}
            AllTopics={AllTopics}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            AllProblems={AllProblems}
            setSelectedProblem={setSelectedProblem}
          >
            <ProblemList
              AllProblems={AllProblems}
              setSelectedProblem={setSelectedProblem}
            />
          </Sidebar>

          {problemData && (
            <MainPage
              collapsed={collapsed}
              problemData={problemData}
              selectedTopic={selectedTopic}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
