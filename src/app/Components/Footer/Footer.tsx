import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const [extra, setExtra] = useState(true);
  const [shop, setShop] = useState(true);
  const [info, setInfo] = useState(true);
  const [customer, setCustomer] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) {
      setExtra(false);
      setShop(false);
      setInfo(false);
      setCustomer(false);
    }
  }, [isMobile]);
  return (
    <div className="footer">
      <div className="upper">

        <div className="footer-section">
          {isMobile ? (
            <div className="title" onClick={() => setExtra(!extra)}>
              <h4>EXTRAS</h4>
              {extra ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          ) : (
            <h4>EXTRAS</h4>
          )}
          <ul className={`${!extra && isMobile ? "hidden" : ""}`}>
            <li>The Loden Lifestyle Blog</li>
            <li>Search</li>
            <li>Customer Reviews</li>
            <li>Weavers</li>
            <li>Loden Steiner Mill</li>
            <li>Tuchfabrik Gebrüder Mehler</li>
            <li>Gottstein</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          {isMobile ? (
            <div className="title" onClick={() => setShop(!shop)}>
              <h4>SHOP</h4>
              {shop ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          ) : (
            <h4>SHOP</h4>
          )}
          <ul className={`${!shop && isMobile ? "hidden" : ""}`}>
            <li>Men</li>
            <li>Women</li>
            <li>Felted Slippers & Mittens</li>
            <li>Leather Bags</li>
          </ul>
          {!isMobile && (
            <div className="social-icons">
              <FaFacebookF className="icon" />
              <FaPinterestP className="icon" />
              <FaInstagram className="icon" />
              <IoMailOutline className="icon" />
            </div>
          )}
        </div>

        <div className="footer-section">
          {isMobile ? (
            <div className="title" onClick={() => setInfo(!info)}>
              <h4>INFORMATION</h4>
              {info ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          ) : (
            <h4>INFORMATION</h4>
          )}
          <ul className={`${!info && isMobile ? "hidden" : ""}`}>
            <li>My Story</li>
            <li>Careers</li>
            <li>Garment Care</li>
            <li>Sitemap</li>
            <li>Austrian Sweater vs. Boiled Wool Jacket?</li>
            <li>How to shrink a sweater</li>
          </ul>
        </div>

        <div className="footer-section">
          {isMobile ? (
            <div className="title" onClick={() => setCustomer(!customer)}>
              <h4>CUSTOMER CARE</h4>
              {customer ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          ) : (
            <h4>CUSTOMER CARE</h4>
          )}
          <ul className={`${!customer && isMobile ? "hidden" : ""}`}>
            <li>Contact</li>
            <li>Exchange & Return Policy</li>
            <li>Size & Fit Guide</li>
            <li>Customer Reviews</li>
            <li>Create an Exchange or Return</li>
          </ul>
        </div>
      </div>


      {isMobile && (
        <div className="social-icons_2">
          <FaFacebookF className="icon" />
          <FaPinterestP className="icon" />
          <FaInstagram className="icon" />
          <IoMailOutline className="icon" />
        </div>
      )}


      <div className="bottom">
        <div className="footer-bottom-left">
          <div className="info space-x-1.5">
            <span className="copyright">©2025</span>
            <span className="brand">Robert W. Stolz</span>
            <span className="powered">Powered by Shopify</span>
          </div>
          <span className="divider">|</span>
          <ul className="footer-links">
            <li>Photo Credits</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-bottom-right">
          <select className="country-select">
            <option value="vn">VIETNAM (VND ₫)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
