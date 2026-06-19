import { useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


function Code({ code }) {
  const [copied, setCopied] = useState(false);
  const [showLineNums, setShowLineNums] = useState(false);
  function copyToClipboard() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-6">Code</h2>
      <label className="flex items-center gap-2 mb-4 text-sm text-gray-300 cursor-pointer select-none ">
        <input
          type="checkbox"
          checked={showLineNums}
          onChange={() => setShowLineNums(prev=>!prev)}
          className="h-4 w-4 accent-red-500 cursor-pointer"
        />
        Show line numbers
      </label>
      <div className="relative overflow-hidden rounded-xl border border-gray-700">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 z-10 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all "
        >
          {copied ? "Copied !" : <FiCopy />}
        </button>

        <SyntaxHighlighter
          language="cpp"
          style={atomDark}
          showLineNumbers={showLineNums}
          customStyle={{
            margin: 0,
            padding: "24px",
            background: "#1A1F2E",
            fontSize: "14px",
            borderRadius: "0px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Code;