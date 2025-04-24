import React, { useState, useEffect } from "react";
import "./Content.scss";
import { CiSearch } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineSort } from "react-icons/md";
import Image from "next/image";
import { ClothingItem } from "../Constant/types";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

type Props = {
  cart: ClothingItem[];
  setCart: React.Dispatch<React.SetStateAction<ClothingItem[]>>;
};

const Content = ({ cart, setCart }: Props) => {
  const [color, setColor] = useState<boolean>(true);
  const [size, setSize] = useState<boolean>(true);
  const [fabric, setFabric] = useState<boolean>(true);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [fabricFilter, setFabricFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [numDisplay, setNumDisplay] = useState<number>(12);

  const sizes = Array.from({ length: 20 }, (_, i) => `Size ${i + 1}`);
  const colors = ["Black", "Brown", "Camel", "Charcoal", "Green", "Navy Blue"];
  const fabrics = ["Loden", "Tweed", "Wool"];

  const [filteredClothes, setFilteredClothes] = useState<ClothingItem[]>(cart);

  const addToCart = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, isInCart: !item.isInCart, quantity: item.isInCart ? 0 : 1 }
        : item
    );
    setFilteredClothes(updatedCart);
    setCart(updatedCart);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setFilteredClothes(cart);
  }, [cart]);

  useEffect(() => {
    let filtered = [...cart];

    if (colorFilter.length > 0) {
      filtered = filtered.filter((item) => colorFilter.includes(item.color));
    }

    if (sizeFilter.length > 0) {
      filtered = filtered.filter((item) =>
        item.size.some((sz) => sizeFilter.includes(sz))
      );
    }

    if (fabricFilter.length > 0) {
      filtered = filtered.filter((item) => fabricFilter.includes(item.fabric));
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredClothes(filtered);
  }, [colorFilter, sizeFilter, fabricFilter, searchQuery]);

  if (!hasMounted) return null;

  return (
    <div className="content">
      <p className="content-txt">
        For centuries Loden coats kept alpine hunters and herdsmen warm and dry
        through the harsh Austrian winters. The tradition lives on in these
        authentic Loden coats.
      </p>
      <div className="content_container">
        <div className="filter">
          <div className="color_filter">
            <div className="label" onClick={() => setColor(!color)}>
              {color ? <FaChevronUp /> : <FaChevronDown />}color
            </div>
            <div className={`filter_item ${color ? "" : "hidden"}`}>
              {colors.map((item) => (
                <div className="item" key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setColorFilter((prev) =>
                        checked
                          ? [...prev, item]
                          : prev.filter((c) => c !== item)
                      );
                    }}
                  />
                  <div className="checkbox_name">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="division" />

          <div className="size_filter">
            <div className="label" onClick={() => setSize(!size)}>
              {size ? <FaChevronUp /> : <FaChevronDown />}size
            </div>
            <div className={`filter_item ${size ? "" : "hidden"}`}>
              {sizes.map((item) => (
                <div className="item" key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSizeFilter((prev) =>
                        checked
                          ? [...prev, item]
                          : prev.filter((c) => c !== item)
                      );
                    }}
                  />
                  <div className="checkbox_name">
                    <p>{item}</p>
                    {/* <p>(1)</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="division" />

          <div className="fabric_filter">
            <div className="label" onClick={() => setFabric(!fabric)}>
              {fabric ? <FaChevronUp /> : <FaChevronDown />}
              <span>fabric</span>
            </div>
            <div className={`filter_item ${fabric ? "" : "hidden"}`}>
              {fabrics.map((item) => (
                <div className="item" key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFabricFilter((prev) =>
                        checked
                          ? [...prev, item]
                          : prev.filter((c) => c !== item)
                      );
                    }}
                  />
                  <div className="checkbox_name">
                    <p>{item}</p>
                    {/* <p>(1)</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main_content">
          <div className="search">
            <CiSearch className="search_icon" />
            <input
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="content_info">
            <div className="total_product">
              <span className="cloths_num">{filteredClothes.slice(0, numDisplay).length}</span>{" "}
              <span>products</span>
            </div>

            <div className="dropdown_select">
              <div className="filter">
                <MdOutlineSort className="filter_logo" />
                Filter
              </div>

              <div className="limit_show">
                <p>Show</p>
                <select onChange={(e) => setNumDisplay(Number(e.target.value))}>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                </select>
              </div>

              <div className="sort">
                <select>
                  <option>Availability</option>
                  <option>Best Selling</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                  <option>Date, new to old</option>
                  <option>Date, old to new</option>
                  <option>% Sale off</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>

            <div className="total_product_2">
              <span className="cloths_num">{filteredClothes.length}</span>{" "}
              <span>products</span>
            </div>
          </div>

          <div className="shown_item">
            {filteredClothes.slice(0, numDisplay).map((item) => (
              <div className="cloth" key={item.id}>
                <div className={`sale ${item.sale ? "hidden" : ""}`}>Sale</div>
                <Image
                  className="img"
                  src={item.img}
                  alt=""
                  fill
                  style={{ objectFit: "scale-down" }}
                />
                <div className="item_info">
                  <p className="name">{item.name}</p>
                  <p className="price">
                    {item.sale ? (
                      `${item.price}$`
                    ) : (
                      <>
                        <span className="line-through">{item.price}$</span>
                        &nbsp;
                        <span>{item.price - 30}$</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="add" onClick={() => addToCart(item.id)}>
                  {item.isInCart ? (
                    <IoCart className="text-" />
                  ) : (
                    <IoCartOutline />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
