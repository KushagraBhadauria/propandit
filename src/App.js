import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";
// import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ForTest from "./components/ForTest";

function App() {
  const products = [
    {
      id: 1,
      name: "Ramesh Tiwari",
      price: 29.99,
      img: "",
    },
    {
      id: 2,
      name: "Siddheshwar Tripathi",
      price: 39.99,
      img: "",
    },
    {
      id: 3,
      name: "Nageshwar Chaturvedi",
      price: 49.99,
      img: "",
    },
    {
      id: 4,
      name: "Bhupesh Mishra",
      price: 59.99,
      img: "",
    },
  ];

  return (
    <div className="App">
      {/* <ForTest /> */}

      <Navbar />
      <Carousel />

      {/* <SignUp /> */}
      {/* <section className="hero">
        <h1>Welcome to Hamare Pandit Ji</h1>
        <p>Discover the Nearest pandit and exclusive deals on booking!</p>
        <button className="hero__button">Check Here</button>
      </section> */}

      <section className="products">
        <h2>Nearest Pandits!</h2>
        <div className="products__grid">
          {products.map((product) => (
            <ProductCard key={product.id} img={product.img} name={product.name} price={product.price} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
