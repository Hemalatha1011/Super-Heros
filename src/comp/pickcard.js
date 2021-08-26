import { Card } from "antd";
import { Link } from "react-router-dom";

import React from "react";
import "./pickcard.css";

const { Meta } = Card;
function Pickcard({ heros }) {
  return (
    <div className="card">
      {heros &&
        heros.results.map((hero, index) => {
          return (
            <Card
              className="card-inner"
              key={index}
              hoverable
              style={{ width: 240, marginBottom: "20px" }}
              cover={<img alt={hero.name} src={hero.image.url} height="300" />}
            >
              <div className="title">
                <Meta title={hero.name} />
              </div>
              <div className="place">
                <h3>publisher: {hero.biography.publisher}</h3>
              </div>
              <Link to={`/details/${hero.id}`}>Learn More</Link>
            </Card>
          );
        })}
    </div>
  );
}

export default Pickcard;
