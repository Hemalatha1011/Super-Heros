import { Button, Input, Carousel, Menu, Layout, message } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Header, Footer } from "antd/lib/layout/layout";
import "./searchbar.css";
import Pickcard from "./pickcard";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [input, setInput] = useState();
  const [heros, setHeros] = useState();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let url = `https://superheroapi.com/api.php/1176712969497606/search/${input}`;
    axios.get(url).then((res) => {
      if (res.data.response === "success") {
        setHeros(res.data);
      } else {
        message.error("no superheros found");
      }
      console.log(res.data);
    });
  };
  return (
    <>
      <Layout className="body">
        <Header>
          <div className="logo">
            <h2>Your SuperHeros</h2>
          </div>

          <Menu
            className="Menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1"> Home</Menu.Item>
            <Menu.Item key="2">
              <Link to="/test"> SuperHeros List</Link>{" "}
            </Menu.Item>
          </Menu>
        </Header>

        <div className="carousel">
          <Carousel autoplay style={{ position: "relative" }}>
            <div class="container ">
              <img
                src="https://www.kolpaper.com/wp-content/uploads/2020/03/spiderman-hd-wallpaper-scaled.jpg"
                width="100%"
                height="300"
                alt="spider man"
              />

              <h3 className="carousel-caption">SPIDER MAN</h3>
            </div>
            <div class="container">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/242/523/707/iron-man-wallpaper-preview.jpg"
                width="100%"
                height="300"
                alt="iron man"
              />

              <h3 className="carousel-caption">IRON MAN</h3>
            </div>
            <div className="container">
              <img
                src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1567197644844-Q48G0P9ZOB4C3OSTKP8X/new-poster-for-dcs-batwoman-her-time-is-now-social.jpg"
                width="100%"
                height="300"
                alt="bat women"
              />

              <h3 className="carousel-caption">BAT WOMEN</h3>
            </div>
            <div className="container">
              <img
                src="https://www.myfreewalls.com/public/uploads/preview/wonder-woman-hd-wallpaper-background-11624670436qlboazrgnu.jpg"
                width="100%"
                height="300"
                alt="wonder women"
              />

              <h3 className="carousel-caption">WONDER WOMEN</h3>
            </div>
          </Carousel>
        </div>

        <div className="Inputbox" place item="center">
          <div className="input">
            <h1>search your superhero!</h1>

            <form onSubmit={handleClick}>
              <Input
                type="text"
                placeholder="Search here..."
                onChange={handleChange}
              />

              <Button type="primary" htmlType="submit" size="large">
                Search
              </Button>
            </form>
          </div>
        </div>
        <Pickcard heros={heros} />
        <Footer style={{ textAlign: "center" }}>
          SuperHeros ©2021 Created by HEMALATHA
        </Footer>
      </Layout>
    </>
  );
};

export default Searchbar;
