import "../App.css";
import logo from "../assets/images/logo.png";
import Header from "../Components/HomePage/Header";
import Hero from "../Components/HomePage/Hero";
import Featured from "../Components/HomePage/Featured";
import Footer from "../Components/HomePage/Footer";

function Home() {
  return (
    <div>
      {/* Header/navbar component */}
      <Header
        logoSrc={logo}
        logoText="MovieBox"
        inputPlaceholder="What do you want to watch?"
      />
      {/* Hero component */}
      <Hero />
      {/* Featured component */}
      <Featured />
      {/* Footer component */}
      <Footer />
    </div>
  );
}
export default Home;
