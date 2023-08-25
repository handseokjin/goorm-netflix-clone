import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../network/axios';

import './MovieGenreRow.css';

export default function MovieGenreRow({id, data}) {
    const [movieData, setMovieData] = useState([]);
    const [hoveredKeyValue, setHoveredKeyValue] = useState(-1);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get(data.url);
        console.log(result);

        setMovieData(result.data.results);
    }

    const handleHover = (id) => {
      setHoveredKeyValue(id);
    }

    return (
      <div className="row">
        <h3 className="genreName">{data.name}</h3>

        <div className="genreData">
          <div
            className="slider-left"
            onClick={() => {
              console.log(id);
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            <span className="arrow">{"<"}</span>
          </div>

          <div id={id} className="genrePosters">
            {movieData.map((data, index) => (
              <img
                key={data.id}
                className="genrePoster"
                onMouseOver={() => handleHover(index)}
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt={data.name}
              />
            ))}
          </div>

          <div
            className="slider-right"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth + 80;
            }}
          >
            <span className="arrow">{">"}</span>
          </div>
        </div>
      </div>
    );
}
