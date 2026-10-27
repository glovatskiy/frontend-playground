import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Classes from "./components/Classes";
import Memberships from "./components/Memberships";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Trainers
          heading="Meet Our Trainers"
          paragraph="Our experienced trainers are here to guide, motivate, and help you
          achieve your goals."
        />
        <Classes
          heading="Our Classes"
          paragraph="Find the perfect workout for your fitness level and goals."
        />
        <Memberships />
      </main>
      <Footer/>
    </>
  );
}

export default App;
