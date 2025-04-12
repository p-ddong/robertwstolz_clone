"use client";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Content from "./Components/Content/Content";
import './page.scss'
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Content />
      <div className="vimeo_video"/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
