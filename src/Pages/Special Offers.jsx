import React from "react";
import Card from "../components/Card";
import Header from "../components/header";
import Footer from "../components/Footer";
import Wristwatch from "../assets/sp01.webp";
import Wristwatch2 from "../assets/sp02.webp";
import GoldEarrings from "../assets/sp03.webp";
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
    image: Wristwatch,
    price: "2,800",
    title: "HERT-SP02 Wristwatch",
    description:
      "Rare Milus Herios Tri-Retrogade in excellent condition!Large stainless steel 42mm case with minor signs of wear. Partially skeletonized dial featuring 3 alternating retrograde second indicators. Running strong with no issues! NO box or papers. Watch only.",
  },
  {
    id: 2,
    image: Wristwatch2,
    price: "1036",
    title: "Two Tone Chronograph Watch",
    description:
      "This two tone chronograph watch is set in stainless steel with gold accents. White chronograph dial with gold and black markings. Automatic movement Fits up to 7 3/4",
  },
  {
    id: 3,
    image: GoldEarrings,
    price: "2400",
    title: "Red Spinel Gold Earrings Cut",
    description:
    "This two tone chronograph watch is set in stainless steel with gold accents. White chronograph dial with gold and black markings. Automatic movement Fits up to 7 3/4",
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

const SpecialOffers = () => {
  let history = useNavigate();
  const itemsMap = items.map((e) => {
    return (
      <Card
        title={e.title}
        price={e.price}
        image={e.image}
        key={e.title}
        onClick={() => history(`/special/products/${e.id}`)}
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

export default SpecialOffers;
