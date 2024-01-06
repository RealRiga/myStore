import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/header";
import Footer from "../components/Footer";
import GoldenWrist from "../assets/01.jpg";
import WristChain from "../assets/02.jpg";
import DropChain from "../assets/03.jpg";
import CrystalRing from "../assets/04.jpg";
import GoldenChain from "../assets/05.jpg";
import DiamondPendant from "../assets/06.jpg";
import GoldenEarring from "../assets/07.jpg";
import ZodicChain from "../assets/08.jpg";
import ZodiacPendant from "../assets/09.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export const items = [
  {
    id: 1,
    image: GoldenWrist,
    price: "$200",
    title: "Golden Wrist Chain ",
    category: "Amethyst",
    description:
      "A classic polo shirt for all occasions. Playing golf? Pair it with some khakis. Preppy party? Pop that collar! Let your polo reflect your personality, so your brain doesn’t have to.",
  },
  {
    id: 2,
    image: WristChain,
    price: "1400",
    title: "Wrist Chain",
    category: "Aquamarine",
    description:
      "Audio perfection, award-winning noise cancellation, and a design as sleek as a sports car. Don’t be fooled by the price, these are the best headphones on the market—guaranteed!",
  },
  {
    id: 3,
    image: DropChain,
    price: "480",
    title: "Drop Chain",
    category: "Amethyst",
    description:
      "Surf, sand, and sunglasses: summertime perfection. These aviator sunnies protect your precious peepers from hazardous UV rays, day or night. Bonus: they make you look kinda cool.",
  },
  {
    id: 4,
    image: CrystalRing,
    price: "1970",
    title: "Crystal Ring",
    category: "Anglesite",
    description:
      "These boots fall above the ankle, so you don’t need to buy those no-show half socks that constantly fall off your heels. We think these boots are waterproof, but please let us know.",
  },
  {
    id: 5,
    image: GoldenChain,
    price: "2000",
    title: "Golden Chain",
    category: "Amethyst",
    description:
      "A generic ticket to an unspecified event on either May 10 or October 5 (depending on which side of the pond you hail from). One seat only, one night only. No refunds, no regrets.",
  },
  {
    id: 6,
    image: DiamondPendant,
    price: "899",
    title: "Diamond Pendant",
    category: "Diamond",
    description:
      "Also called a backsack, knapsack, rucksack, or packsack, this is the preferred load-carrying method of hikers and students. We think these ones are waterproof, but please let us know.",
  },
  {
    id: 7,
    image: GoldenEarring,
    price: "699",
    title: "Golden Earring",
    category: "Amethyst",
    description:
      "Maybe you need this device for your existing gaming console. Maybe you just want to pretend you’ve got a gaming console. We’re not here to judge! Buy, and you shall receive joy.",
  },
  {
    id: 8,
    image: ZodicChain,
    price: "799",
    title: "Zodic Chain",
    category: "Amber",
    description:
      "Just like your school cafeteria’s menu in the last few days before summer break, this “manager’s special” mealbox is a mystery. On the plus side, we’ll deliver it right to your doorstep.",
  },
  {
    id: 9,
    image: ZodiacPendant,
    price: "700",
    title: "Zodiac Pendant",
    category: "Amber",
    description:
      "The dorsal fin of an orca whale. An actual oil slick. The earthly manifestation of a black hole. Nighttime with pockets. Vantablack lining. The world’s most elusive handbag",
  },
];

const HomePage = () => {
  let history = useNavigate();
  const [itemsMap, setItemsMap] = useState();
  let search = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let map = items;
    let searchParams = new URLSearchParams(search.search);
    let param = searchParams.has("category");
    if (param) {
      map = items.filter(
        (e) =>
          e.category.toLocaleLowerCase() ===
          searchParams.get("category").toLocaleLowerCase()
      );
    }
    setItemsMap(
      map.map((e) => {
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
    );
  }, []);

  useEffect(() => {
    let map = items;
    let searchParams = new URLSearchParams(search.search);
    let param = searchParams.has("category");
    if (param) {
      setSelectedCategory(searchParams.get("category"));
      map = items.filter(
        (e) =>
          e.category.toLocaleLowerCase() ===
          searchParams.get("category").toLocaleLowerCase()
      );
    }
    setItemsMap(
      map.map((e) => {
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
    );
  }, [search.search]);
  let categories = ["Diamond", "Amber", "Amethyst", "Anglesite", "Aquamarine"];

  return (
    <div className="min-h-screen">
      <Header />
      {/* <Navbar /> */}

      <div className="category">
        {categories.map((e) => (
          <li>
            <NavLink to={`/products?category=${e}`}> {e} </NavLink>
          </li>
        ))}
      </div>
      {selectedCategory && <p className="CatName"> {selectedCategory} </p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-12 lg:px-16 gap-6 mt-5">
        {itemsMap}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
