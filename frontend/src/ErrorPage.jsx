function ErrorPage({ message }) {
  return (
    <div className="min-h-screen bg-[#0E1117] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center border border-red-500/40 bg-[#1A1F2E] rounded-2xl p-10 shadow-xl">
        <div className="text-7xl mb-6">⚠️</div>

        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-8">
          {message}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold"
        >
          Reload Application
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;