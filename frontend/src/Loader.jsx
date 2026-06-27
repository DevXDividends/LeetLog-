import { BlinkBlur } from "react-loading-indicators"

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0E1117] z-50">
      <BlinkBlur color="#ffffff" size="medium" />
    </div>
  );
}

export default Loader;