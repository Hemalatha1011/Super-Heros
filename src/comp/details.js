import React, { useEffect, useState } from "react";
import "./details.css";
import { Typography } from "antd";
import axios from "axios";

const { Title } = Typography;

function Details(props) {
  const [heros, setHeros] = useState("");

  useEffect(() => {
    let url = props.match.url;
    let id = url.slice(9);

    console.log(id);
    axios
      .get(`https://superheroapi.com/api.php/1176712969497606/${id}`)
      .then((res) => {
        setHeros(res.data);
        // console.log(res);
      });
  }, []);

  return (
    <>
      <div
        className="title"
        style={{
          width: "90%",
          marginTop: "20px",
          fontStyle: "oblique",
        }}
      >
        <h1>Your Superhero Details.</h1>
      </div>
      <div className="logo">
        <div className="image">
          {heros !== "" ? (
            <>
              <img src={heros.image.url} alt={heros.name} width="200" />

              <div className="detail">
                <h2>
                  <u>Characteristics are,</u>
                </h2>
                <Title level={5}>Full-name:- {heros.name}</Title>
                <Title level={5}> Gender:- {heros.appearance.gender}</Title>
                <Title level={5}>
                  First-appearance:-{heros.biography["first-appearance"]}{" "}
                </Title>
                <Title level={5}>
                  Place-of-birth:-{heros.biography["place-of-birth"]}
                </Title>
                <Title level={5}>publisher:-{heros.biography.publisher}</Title>
                <Title level={5}>Occupation:- {heros.work.occupation}</Title>
                <h2>
                  <u>Describe a superhero:</u>
                </h2>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  I am {heros.name}. I have a {heros.appearance["eye-color"]}{" "}
                  and {heros.appearance["hair-color"]}. I am a{" "}
                  {heros.work.occupation} and my strength is "
                  {heros.powerstats.strength}".{" "}
                </p>
              </div>
            </>
          ) : (
            <p>loading..</p>
          )}{" "}
        </div>
      </div>
    </>
  );
}

export default Details;
