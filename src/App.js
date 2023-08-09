import Banner from "./banner";
import Carousel from "./carousel";
import Categories from "./categories";
import Header from "./header";
import "./styles.css";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <Carousel />
      <Footer />
    </div>
  );
}
