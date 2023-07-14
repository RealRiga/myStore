import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import App from "../App.css";
import back from "../assets/01.jpg";
import { items } from "./Special Offers";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();
  const itemsMap = items
    .map((e) => {
      return (
        <Card
          title={e.title}
          price={e.price}
          image={e.image}
          key={e.title}
          onClick={() => history(`/products/${e.id}`)}
        />
      );
    })
    .slice(0, 4);
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div class="img-text">
          <div className="jewelry-img">
            <img src={back} alt="jewelry picture" />
          </div>
          <div className="jewelry-text">
            <h1>
              Jewelry is a great symbol of social or personal status. It could
              denote affiliation in marriage or membership in certain clubs or
              groups. Generally, jewelry can also enhance the look of women.
              Hence, you can find various jewelry brands that compete in the
              market. If you need inspiration for a similar project, this
              collection is a demand! Here is Carlo Barberis Jewelry which has
              an impressive jewelry website design.
            </h1>
          </div>
        </div>
        <hr />
        <div className="product-items">
          <h1>Products</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-12 lg:px-16 gap-6 mt-5">
            {itemsMap}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
