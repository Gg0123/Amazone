import React from "react";
import "./Home.css";
import Products from "../Products/Products";
import Carousel from "../Header/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
        <div className="home__row">
          <Products
            id="1"
            title="Apple AirPods Max Wireless Over-Ear Headphones"
            description="Apple AirPods Max Wireless Over-Ear Headphones, Transparency Mode,Bluetooth Headphones for iPhone – Space Gray"
            price={134}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/813LwotY94L._AC_SX466_.jpg"
          />
          <Products
            id="2"
            title="Xbox Wireless Headset – Xbox Series X|S"
            description="Xbox Wireless Headset – Xbox Series X|S, Xbox One, and Windows Devices by Xbox"
            price={128.18}
            rating={3}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ODvrKqxTL._AC_UL320_.jpg"
          />
          <Products
            id="3"
            title="2.4GHz Wireless Keyboard and Mouse Combination"
            description="2.4GHz Wireless Keyboard and Mouse Combination,Honeycomb Shaped 17-inch Keyboard for Teenagers' laptops and PCs"
            price={29.9}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ztIIa4scL._AC_SX425_.jpg"
          />
          <Products
            id="1234321"
            title="All-new Echo Show 8 (3rd Gen, 2023 release)"
            description="All-new Echo Show 8 (3rd Gen, 2023 release) with Adjustable Stand with USB-C Charging Port | Charcoal"
            price={127}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51HV51ey4dL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="4"
            title="Sceptre Curved 24-inch Gaming Monitor"
            description="Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA , VESA Wall Mount Machine Black (C248W-1920RN Series)"
            price={76}
            rating={6}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71P0M7tKjYL._AC_SX679_.jpg"
          />
          <Products
            id="5"
            title="SAMSUNG 27' T35F Series FHD 1080p Computer Monitor"
            description="SAMSUNG 27' T35F Series FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync, LF27T350FHNXZA"
            price={127}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61B8Lq5NXmL._AC_UY218_.jpg"
          />
          <Products
            id="6"
            title="Sceptre 20' 1600x900 75Hz Ultra Thin LED Monitor"
            description="Sceptre 20' 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170° (Horizontal) / 160° (Vertical)"
            price={127}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51v6h2TfPCL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="7"
            title="GPPZM Rock Slab Computer Desk Desktop Home"
            description="GPPZM Rock Slab Computer Desk Desktop Home Bedroom Gaming Desk Study Desk Study Desk"
            price={1088}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51hgyubohTL._AC_SX522_.jpg"
          />
          <Products
            id="8"
            title="Computer Desk Desktop Home Simple Modern Tempered"
            description="Computer Desk Desktop Home Simple Modern Tempered Glass Economical Gaming Table Single Simple Desk Desk Z Shape Gaming Desk (Color : White1, Size : 140cm)"
            price={117}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61vK2yfrslL._AC_SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
