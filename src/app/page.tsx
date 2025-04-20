"use client";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Content from "./Components/Content/Content";
import "./page.scss";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

import { useEffect, useState } from "react";
import Sale from "./Components/Sale/Sale";
import { ClothingItem } from "./Components/Constant/types";

const clothes: ClothingItem[] = [
  {
    id:1,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 1",
    size: ["Size 6", "Size 12", "Size 2"],
    color: "Charcoal",
    fabric: "Tweed",
    sale: true,
    price: 578,
  },
  {
    id:2,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 2",
    size: ["Size 18", "Size 1"],
    color: "Black",
    fabric: "Wool",
    sale: false,
    price: 389,
  },
  {
    id:3,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 3",
    size: ["Size 3", "Size 5", "Size 19"],
    color: "Brown",
    fabric: "Loden",
    sale: true,
    price: 610,
  },
  {
    id:4,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 4",
    size: ["Size 4", "Size 10"],
    color: "Green",
    fabric: "Tweed",
    sale: true,
    price: 243,
  },
  {
    id:5,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 5",
    size: ["Size 9", "Size 14", "Size 8", "Size 13"],
    color: "Camel",
    fabric: "Loden",
    sale: false,
    price: 488,
  },
  {
    id:6,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 6",
    size: ["Size 16", "Size 6", "Size 11"],
    color: "Navy Blue",
    fabric: "Wool",
    sale: false,
    price: 318,
  },
  {
    id:7,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 7",
    size: ["Size 1", "Size 7", "Size 5", "Size 15"],
    color: "Brown",
    fabric: "Tweed",
    sale: true,
    price: 630,
  },
  {
    id:8,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 8",
    size: ["Size 12", "Size 2", "Size 18"],
    color: "Camel",
    fabric: "Loden",
    sale: false,
    price: 522,
  },
  {
    id:9,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 9",
    size: ["Size 10"],
    color: "Charcoal",
    fabric: "Wool",
    sale: true,
    price: 273,
  },
  {
    id:10,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 10",
    size: ["Size 17", "Size 3", "Size 8", "Size 19"],
    color: "Black",
    fabric: "Tweed",
    sale: true,
    price: 434,
  },
  {
    id:11,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 11",
    size: ["Size 14", "Size 7"],
    color: "Navy Blue",
    fabric: "Loden",
    sale: false,
    price: 600,
  },
  {
    id:12,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 12",
    size: ["Size 13", "Size 15", "Size 4"],
    color: "Green",
    fabric: "Wool",
    sale: false,
    price: 549,
  },
  {
    id:13,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 13",
    size: ["Size 6", "Size 9"],
    color: "Charcoal",
    fabric: "Tweed",
    sale: true,
    price: 397,
  },
  {
    id:14,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 14",
    size: ["Size 2", "Size 11", "Size 16", "Size 20"],
    color: "Camel",
    fabric: "Loden",
    sale: false,
    price: 662,
  },
  {
    id:15,
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: "Austrian Jacket 15",
    size: ["Size 5", "Size 17", "Size 19"],
    color: "Brown",
    fabric: "Wool",
    sale: true,
    price: 310,
  },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [cart, setCart] = useState<ClothingItem[]>(clothes);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="main_content">
      <Header cart={cart} setCart={setCart}/>
      <Carousel />
      <Content cart={cart} setCart={setCart}/>
      <div className="vimeo_video">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/743911758?h=17a66078f1"
          height="600px"
          width="337.5px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <ContactForm />
      <Footer />
      <Sale />
    </div>
  );
}

