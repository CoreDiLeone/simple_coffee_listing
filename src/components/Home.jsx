import "../styles/home.css";
import CoffeeCard from "./CoffeeCard";
const Home = () => {
  return (
    <main className="main-container">
      {/* <img src={CaffeSm} alt="outside of a coffee shop" /> */}
      <div className="background-img"></div>
      <section className="main-section">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <CoffeeCard />
      </section>
    </main>
  );
};

export default Home;
