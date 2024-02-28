import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="flex-col w-screen items-center gap-4 bg-gradient-to-b from-[#fffffd] via-[#fffcd3] to-[#fef8a7]">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
