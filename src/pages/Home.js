import "../App.css";
import Header from "../Components/HomePage/Header";
import Hero from "../Components/HomePage/Hero";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <div>
      <Header
        logoSrc={logo}
        logoText="MovieBox"
        inputPlaceholder="What do you want to watch?"
      />
      <Hero />
    </div>
  );
}
export default Home;
