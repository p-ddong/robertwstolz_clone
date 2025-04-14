"use client";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Content from "./Components/Content/Content";
import "./page.scss";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div>
      <Header />
      <Carousel />
      <Content />
      <div className="vimeo_video">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/743911758?h=17a66078f1"
          height= "600px"
          width= "337.5px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
