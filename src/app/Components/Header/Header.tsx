"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiUser, CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
const Header = () => {
  const topMenu1Ref = useRef<HTMLDivElement | null>(null);
  const [isTopMenu1Visible, setIsTopMenu1Visible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopMenu1Visible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (topMenu1Ref.current) {
      observer.observe(topMenu1Ref.current);
    }

    return () => {
      if (topMenu1Ref.current) {
        observer.unobserve(topMenu1Ref.current);
      }
    };
  }, []);

  return (
    <div className="header">
      <div className="top_menu_1" ref={topMenu1Ref}>
        <div className="social">
          <div className="social_link">
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <IoMailOutline />
          </div>
          <div className="user_use">
            <div className="login">
              <CiUser />
              <p className="txt">LOGIN</p>
            </div>
            <div className="cart">
              <PiHandbag />
              <p className="txt">0</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="left">
            <p>Men</p>
            <p>Women</p>
            <p className="not_dropdown">Felted Slippers & Mittens</p>
            <p className="not_dropdown">Leather Bags</p>
          </div>
          <div className="img_container ">
            <Image
              className="logo"
              src="https://www.robertwstolz.com/cdn/shop/files/Robert-Stolz-Loden_Logo_090622-RGB_410x.png?v=1656693283"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="right">
            <p>customer care</p>
            <p className="not_dropdown">FAQ</p>
          </div>
          <div className="search">
            <p className="search-txt">Search</p>
            <CiSearch />
          </div>
        </div>
      </div>

      <div className={`top_menu_2 ${isTopMenu1Visible ? "hidden" : ""}`}>
        <div className="menu">
          <div className="left">
            <p>Men</p>
            <p>Women</p>
            <p className="not_dropdown">Felted Slippers & Mittens</p>
            <p className="not_dropdown">Leather Bags</p>
          </div>
          <div className="img_container ">
            <Image
              className="logo"
              src="https://www.robertwstolz.com/cdn/shop/files/Robert-Stolz-Loden_Logo_090622-RGB_410x.png?v=1656693283"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="right">
            <p>customer care</p>
            <p className="not_dropdown">FAQ</p>
          </div>
          <div className="search">
            <CiSearch />
          </div>
          <div className="cart">
            <PiHandbag />
            <p className="txt">0</p>
          </div>
        </div>
      </div>

      <div className="top_menu_3">
        <div className="menu">
          <div className="left">
            <CiMenuBurger className="burger" />
            <p>MENU</p>
          </div>
          <div className="img_container ">
            <Image
              className="logo"
              src="https://www.robertwstolz.com/cdn/shop/files/Robert-Stolz-Loden_Logo_090622-RGB_410x.png?v=1656693283"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="cart">
            <PiHandbag />
            <p className="txt">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
