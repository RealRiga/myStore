import React from "react";
import Card from "../components/Card";
import Header from "../components/header";
import Footer from "../components/Footer";
import Ionic from "../assets/na01.webp";
import Ring from "../assets/na02.webp";
import Pendant from "../assets/na03.webp";
import Diamond from "../assets/na04.webp";
import DRing from "../assets/na05.webp";
import Bracelet1 from "../assets/na06.webp";
import PrincessRing from "../assets/na07.webp";
import TennisBracelet from "../assets/na08.webp";
import EngagementRing from "../assets/na09.webp";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export const items = [
  {
    id: 1,
    image: Ionic,
    price: "2500",
    category: "Anglesite",
    title: "1.00ctw Tear Drop Pendant",
    description:
      "Introducing our exquisite Pendant with Chain, expertly crafted in 14kt White Gold to captivate your senses. Adorned with a brilliant .80ct Round Diamond Center Stone, this stunning piece emanates a captivating sparkle. The Diamond boasts SI1 clarity and G color, ensuring its brilliance catches every eye.",
  },
  {
    id: 2,
    image: Ring,
    price: "1200",
    title: "Diamond Engagement Ring",
    category: "Amber",
    description:
      "Experience the allure of our stunning 14k White Gold Ring, adorned with mesmerizing diamonds. Elevate your style with this beautiful piece, representing both elegance and timeless beauty. For more information about the weight and the additional feature of the Ring, please provide further details.",
  },
  {
    id: 3,
    image: Pendant,
    price: "9000",
    category: "Aquamarine",
    title: "15.77ctw Diamond Necklace",
    description:
      "Surf, sand, and sunglasses: summertime perfection. These aviator sunnies protect your precious peepers from hazardous UV rays, day or night. Bonus: they make you look kinda cool.",
  },
  {
    id: 4,
    image: Diamond,
    price: "1250",
    title: "14K Amethyst Diamond",
    category: "Anglesite",
    description:
      "This is a custom made tear drop or elongated pear shaped amethyst enhancer pendant which is crowned with a bezel set diamond. The amethyst sits in a 14K yellow gold gallery which has four elongated and curved prongs that hold it to the gallery basket. The diamond is topped with a 14K yellow gold bail that converts to an enhancer which has a safety arm attached to it so the pendant can be placed over a strand of pearls or an omega.",
  },
  {
    id: 5,
    image: DRing,
    price: "845",
    title: "14K Yellow Gold Amethyst ",
    category: "Amethyst",
    description:
      "This ring is full of life with four very clean accent diamonds.This ring has been inspected by professionals with over 35 years of experience to ensure its excellent condition.",
  },
  {
    id: 6,
    image: Bracelet1,
    price: "895",
    title: "Bracelet",
    category: "Aquamarine",
    description:
      "Elegant 14K white gold panel bracelet featuring natural princess cut Garnet. Accent diamonds add the perfect amount of sparkle! Just polished and ready to wear with no issues to note. Hallmarked and tested.",
  },
  {
    id: 7,
    image: PrincessRing,
    price: "1195",
    category: "Diamond",
    title: "Princess Diamond Band Ring",
    description:
      "Very sparkly and ready to impress! All .66 carat total of channel set diamonds are high-quality VS. Perfect to wear alone or stack. Size 5 and sizable upon request for an additional charge. Hallmarked and tested.",
  },
  {
    id: 8,
    image: TennisBracelet,
    price: "2250",
    category: "Amethyst",
    title: "Diamond Double Tennis Bracelet",
    description:
      "Accent diamonds add the perfect amount of sparkle! Just polished and ready to wear with no issues to note. Hallmarked and tested.",
  },
  {
    id: 9,
    image: EngagementRing,
    price: "1015",
    category: "Diamond",
    title: "Engagement Ring",
    description:
      "The Vansant: Ladies 14K Engagement Ring set with 0.31 CT Princess Cut Diamond. Crafted in 14 karat white gold, this ladies' engagement ring centers on a 0.31 carat princess cut diamond. The diamond has an approximate Gemological Institute of America clarity grade of SI1 and a color grade of G. Filling out the split shank are 0.10 total carats of round diamonds adding shimmer and shine. The ring is currently a finger size 7 and is able to be resized for an additional charge upon request.",
  },
];

const NewArrival = () => {
  let history = useNavigate();
  const itemsMap = items.map((e) => {
    return (
      <Card
        title={e.title}
        price={e.price}
        image={e.image}
        key={e.title}
        onClick={() => history(`/new/products/${e.id}`)}
      />
    );
  });
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Navbar /> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-12 lg:px-16 gap-6 mt-5">
        {itemsMap}
      </div>
      <Footer />
    </div>
  );
};

export default NewArrival;
