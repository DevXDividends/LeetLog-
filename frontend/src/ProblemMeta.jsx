function ProblemMeta({ difficulty, constraints }) {
  const difficultyColor = {
    Easy: "text-green-400",
    Medium: "text-yellow-400",
    Hard: "text-red-400",
  };

  return (
    <div className="mb-10">
      {/* Difficulty */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-white">Difficulty :</h2>

          <span
            className={`text-1xl font-semibold ${
              difficultyColor[difficulty] || "text-gray-300"
            }`}
          >
            {difficulty}
          </span>
        </div>
      </div>

      {/* Constraints */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Constraints</h2>

        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-200">
          {constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProblemMeta;
