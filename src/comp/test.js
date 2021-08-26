import { Header, Footer } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import { Menu, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import Pickcard from "./pickcard";

function Test() {
  const [heros, setHeros] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://superheroapi.com/api.php/1176712969497606/search/a")
      .then((response) => {
        setHeros(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading === true ? (
        <div style={{ height: "100vh", width: "100%" }}>
          <Spin tip="Loading..." style={{ margin: "20% 50%" }} />
        </div>
      ) : (
        <div className="body">
          <Header>
            <div className="logo">
              <h2>Your SuperHeros</h2>
            </div>

            <Menu
              className="Menu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>{" "}
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/test">SuperHeros List</Link>{" "}
              </Menu.Item>
            </Menu>
          </Header>
          <h1>YOUR FAVOURITE SUPERHEROS</h1>

          <div className="card">
            <Pickcard heros={heros} />
          </div>

          <div>
            <Footer style={{ textAlign: "center" }}>
              SuperHeros ©2021 Created by HEMALATHA
            </Footer>
          </div>
        </div>
      )}
    </>
  );
}

export default Test;
