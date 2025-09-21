import SignUp from "./Components/SignUp";

const App = () => {

  const handleCopy = (e)=>{
    e.clipboardData.setData('text/plain', '👆🏻');
    e.preventDefault();
  }

  return (
    <>
    <h1
    onCopy={handleCopy}
    className="text-2xl">Don't copy</h1>
      <SignUp />
    </>
  );
};

export default App;
