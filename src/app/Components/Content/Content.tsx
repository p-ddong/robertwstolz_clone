import React, { useState, useEffect } from "react";
import "./Content.scss";
import { CiSearch } from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineSort } from "react-icons/md";
import Image from "next/image";
const Content = () => {
  const [color, setColor] = useState<boolean>(true);
  const [size, setSize] = useState<boolean>(true);
  const [fabric, setFabric] = useState<boolean>(true);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  type ClothingItem = {
    img: string;
    name: string;
    size: string[];
    color: string;
    fabric: string;
    sale: boolean;
    price: number;
  };

  const sizes = Array.from({ length: 20 }, (_, i) => `Size ${i + 1}`);
  const colors = ["Black", "Brown", "Camel", "Charcoal", "Green", "Navy Blue"];
  const fabrics = ["Loden", "Tweed", "Wool"];

  function getRandomSizes(): string[] {
    const shuffled = sizes.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 5) + 1;
    return shuffled.slice(0, count);
  }

  function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomPrice(): number {
    return Math.floor(Math.random() * (700 - 200 + 1)) + 200;
  }

  const clothes: ClothingItem[] = Array.from({ length: 15 }, (_, i) => ({
    img: "https://www.robertwstolz.com/cdn/shop/products/mens_austrian_wool_jacket-66_2000x.jpg?v=1665076938",
    name: `Austrian Jacket ${i + 1}`,
    size: getRandomSizes(),
    color: getRandomItem(colors),
    fabric: getRandomItem(fabrics),
    sale: Math.random() > 0.5,
    price: getRandomPrice(),
  }));
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // or a spinner if you prefer
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
                  <input type="checkbox" />
                  <div className="checkbox_name">
                    <p>{item}</p>
                    <p>(1)</p>
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
                  <input type="checkbox" />
                  <div className="checkbox_name">
                    <p>{item}</p>
                    <p>(1)</p>
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
                  <input type="checkbox" />
                  <div className="checkbox_name">
                    <p>{item}</p>
                    <p>(1)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main_content">
          <div className="search">
            <CiSearch className="search_icon" />
            <input type="text" placeholder="Search products" />
          </div>

          <div className="content_info">
            <div className="total_product">
              <span className="cloths_num">{clothes.length}</span>{" "}
              <span>products</span>
            </div>

            <div className="dropdown_select">
              <div className="filter">
                <MdOutlineSort className="filter_logo" />
                Filter
              </div>

              <div className="limit_show">
                <p>Show</p>
                <select>
                  <option value="0">24</option>
                  <option value="0">24</option>
                  <option value="1">48</option>
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
              <span className="cloths_num">{clothes.length}</span>{" "}
              <span>products</span>
            </div>
          </div>

          <div className="shown_item">
            {clothes.map((item) => (
              <div className="cloth" key={item.name}>
                <div className={`sale ${item.sale ? "hidden" : ""}`}>Sale</div>
                <Image
                className="img"
                  src={item.img}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
