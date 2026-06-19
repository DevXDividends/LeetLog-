

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
export default ProblemDescription;