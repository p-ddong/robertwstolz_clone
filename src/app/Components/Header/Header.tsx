"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiUser, CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import Image from "next/image";
import { ClothingItem } from "../Constant/types";

type Props = {
  cart: ClothingItem[];
  setCart: React.Dispatch<React.SetStateAction<ClothingItem[]>>;
};

const Header = ({ cart, setCart }: Props) => {
  const topMenu1Ref = useRef<HTMLDivElement | null>(null);
  const [isTopMenu1Visible, setIsTopMenu1Visible] = useState(true);
  const [cartItems, setCartItems] = useState<ClothingItem[]>([]);
  const manageItems = (type: string, id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return console.warn("Item not found:", id);

    const item = cart[index];
    const quantity = item.quantity ?? 0;

    const updatedItem = {
      ...item,
      quantity: type === "add" ? quantity + 1 : quantity > 1 ? quantity - 1 : 0,
      isInCart: type === "add" || quantity > 1,
    };

    const newCart = [...cart];
    newCart[index] = updatedItem;
    setCart(newCart);
  };

  const totalCal = () => {
    const total = cart
      .filter((item) => item.isInCart)
      .reduce((acc, item) => {
        const price = item.sale ? item.price : item.price - 30;
        return acc + price * (item.quantity ?? 1);
      }, 0);
    return total;
  };

  const deleteFromcart = (id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return console.warn("Item not found:", id);

    const item = cart[index];

    const updatedItem = {
      ...item,
      quantity: 0,
      isInCart: false,
    };

    const newCart = [...cart];
    newCart[index] = updatedItem;
    setCart(newCart);
  };

  useEffect(() => {
    setCartItems(cart.filter((item) => item.isInCart));
  }, [cart]);

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
              <p className="txt">{cartItems.length}</p>

              {cartItems.length >= 1 ? (
                <div className="cart_items">
                  <h1>Your Cart</h1>
                  <table className="list">
                    <tr>
                      <th className="name">Product</th>
                      <th className="price">Price</th>
                      <th className="quantity">Quantity</th>
                      <th className="delete">Delete</th>
                    </tr>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="cart_item">
                        <td>{item.name}</td>
                        <td>
                          {item.sale ? (
                            `${item.price}$`
                          ) : (
                            <>
                              <span className="line-through mr-2">
                                {item.price}$
                              </span>
                              &nbsp;
                              <span>{item.price - 30}$</span>
                            </>
                          )}
                        </td>
                        <td className="quantity_manage">
                          <button
                            onClick={() => manageItems("subtract", item.id)}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => manageItems("add", item.id)}>
                            +
                          </button>
                        </td>
                        <td className="clear">
                          <button onClick={() => deleteFromcart(item.id)}>
                            <MdDelete className="text-red-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>

                  <div className="total">
                    <p>Total</p> <p>{totalCal()} $</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="left">
            <div className="drop_down">
              <div className="title">
                Men <FaChevronDown />
                <ul className="drop_down_items">
                  <li>AUTHENTIC LODEN COATS</li>
                  <li>{`MEN'S AUSTRIAN STYRIAN JACKETS`}</li>
                  <li>SHIRTS & MORE</li>
                </ul>
              </div>
            </div>
            <div className="drop_down">
              <div className="title">
                Women <FaChevronDown />
                <ul className="drop_down_items">
                  <li>LODEN COATS</li>
                  <li>{`WOMEN'S AUSTRIAN JACKETS`}</li>
                </ul>
              </div>
            </div>
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
            <div className="drop_down">
              <div className="title">
                Customer Care <FaChevronDown />
                <ul className="drop_down_items">
                  <li>CONTACT</li>
                  <li>SIZE & FIT GUIDE</li>
                  <li>RETURNS & EXCHANGES</li>
                  <li>CUSTOMER REVIEWS</li>
                </ul>
              </div>
            </div>
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
            <div className="drop_down">
              <div className="title">
                Men <FaChevronDown />
                <ul className="drop_down_items">
                  <li>AUTHENTIC LODEN COATS</li>
                  <li>{`MEN'S AUSTRIAN STYRIAN JACKETS`}</li>
                  <li>SHIRTS & MORE</li>
                </ul>
              </div>
            </div>
            <div className="drop_down">
              <div className="title">
                Women <FaChevronDown />
                <ul className="drop_down_items">
                  <li>LODEN COATS</li>
                  <li>{`WOMEN'S AUSTRIAN JACKETS`}</li>
                </ul>
              </div>
            </div>
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
            <div className="drop_down">
              <div className="title">
                Customer Care <FaChevronDown />
                <ul className="drop_down_items">
                  <li>CONTACT</li>
                  <li>SIZE & FIT GUIDE</li>
                  <li>RETURNS & EXCHANGES</li>
                  <li>CUSTOMER REVIEWS</li>
                </ul>
              </div>
            </div>
            <p className="not_dropdown">FAQ</p>
          </div>
          <div className="search">
            <CiSearch />
          </div>
          <div className="cart">
            <PiHandbag />
            <p className="txt">{cartItems.length}</p>
            {cartItems.length >= 1 ? (
              <div className="cart_items">
                <div className="list space-y-3">
                  {cartItems.map((item) => (
                    <div className="cart_item" key={item.id}>
                      <p>{item.name}</p>
                      <div>
                        <button
                          onClick={() => manageItems("subtract", item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => manageItems("add", item.id)}>
                          +
                        </button>
                      </div>
                      <button onClick={() => deleteFromcart(item.id)}>
                        <MdDelete className="text-red-400 text-xl" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="total">
                  <p>Total</p> <p>{totalCal()}$</p>
                </div>
              </div>
            ) : (
              ""
            )}
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
            <p className="txt">{cartItems.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
