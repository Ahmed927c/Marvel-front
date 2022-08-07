import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComicsCard from "../components/ComicsCard";
import axios from "axios";
import Nav from "../components/Nav";
import "../styles/characterDetail.css";

const CharacterDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const [comicsData, setcomicsData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const responseCharacter = await axios.get(`https://marvel-back-ahmed.herokuapp.com/comics/${id}`);
      console.log(responseCharacter.data);
      setCharacter(responseCharacter.data);
      setcomicsData(responseCharacter.data.comics);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(character);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <Nav />

      <div className="character-container">
        <h1>{character.name}</h1>
        <div className="character-details-container">
          <p>{character.description}</p>
        </div>
        <div className="character-picture-container">
          <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt="" className="character-img" />
          <div className="character-masque-radial"></div>
        </div>

        <div className="container90vw comics-carousel">
          {comicsData.map(({ title, thumbnail, description, _id }) => {
            return <ComicsCard key={_id} title={title} thumbnail={thumbnail} description={description} _id={_id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
