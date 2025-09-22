import Navbar from "./Components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
