import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
