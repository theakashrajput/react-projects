import { useState } from "react";

const App = () => {
  const [color1, setColor1] = useState("255");
  const [color2, setColor2] = useState("255");
  const [color3, setColor3] = useState("0");
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setColor1(Math.floor(Math.random() * 256));
    setColor2(Math.floor(Math.random() * 256));
    setColor3(Math.floor(Math.random() * 256));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset message after 2s
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <div
        style={{ backgroundColor: `rgb(${color1},${color2},${color3})` }}
        className={`w-80 h-40 relative`}
      >
        <span
          onClick={}
          title="copy"
          className="bg-[rgba(0,0,0,0.1)] text-white absolute cursor-pointer bottom-0 left-0 inline-block font-semibold text-lg p-2 rounded-tr-lg rounded-br-lg"
        >
          rgb({color1}, {color2}, {color3})
        </span>
      </div>
      <button
        onClick={handleClick}
        className="bg-green-600 text-white px-4 py-3 rounded-md font-semibold cursor-pointer active:scale-95"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;
