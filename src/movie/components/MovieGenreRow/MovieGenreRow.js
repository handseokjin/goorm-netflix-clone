import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../network/axios';
import './MovieGenreRow.css';

import {ImPlay2} from 'react-icons/im';
import {CiCirclePlus} from 'react-icons/ci';
import {BsHandThumbsUp} from 'react-icons/bs';
import {AiOutlineDownCircle} from 'react-icons/ai'

export default function MovieGenreRow({id, data, movieListCallback}) {
    const [movieData, setMovieData] = useState([]);
    const [hoveredKeyValue, setHoveredKeyValue] = useState(-1);
    const [movieDetailData, setMovieDetailData] = useState({});
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get(data.url);
        console.log(result);

        setMovieData(result.data.results);
    }

    const handleHover = async (index, movieId) => {
      console.log('--- hovered movie id ---');
      console.log(id);

      const {data: movieDetail} = await axios.get(`movie/${movieId}`);

      console.log('--- hovered movie detail ---');
      console.log(movieDetail);
      console.log(movieDetailData.runtime/60)

      if(movieDetail !== undefined && movieDetail !== null) {
        setMovieDetailData(movieDetail);
        setHoveredKeyValue(index, id); 
      }
    }

    const handleHoverOut = () => {
      setHoveredKeyValue(-1);
      setMovieDetailData({});
    }

    const showMovieDetailModal = () => {
      setHoveredKeyValue(-1);
      movieListCallback(true, movieDetailData);
      //setIsMovieDetailModal(!isMovieDetailModal);
      console.log('모달 보이기');
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
              <div
                className="genrePosterContainer"
                onMouseOver={() => handleHover(index, data.id)}
                onMouseOut={handleHoverOut}
              >
                <img
                  key={data.id}
                  className="genrePoster"
                  src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                  alt={data.name}
                />
                {hoveredKeyValue === index && (
                  <div className="movieDetailInfoContainer">
                    <div className="movieDetailInfoRow1">
                      <div>
                        <ImPlay2 className="circlePlayIcon" />
                        <CiCirclePlus className="circlePlusIcon" />
                        <BsHandThumbsUp className="circleThumbIcon" />
                      </div>
                      <AiOutlineDownCircle
                        className="arrowDownIcon"
                        onClick={() => showMovieDetailModal()}
                      />
                    </div>
                    <div>
                      <p className="movieDetailRuntime">
                        {Math.floor(movieDetailData.runtime / 60) + "시간 "}
                        {movieDetailData.runtime -
                          60 * Math.floor(movieDetailData.runtime / 60) +
                          "분"}
                      </p>
                    </div>
                    <div>
                      {movieDetailData.genres.map((genre, index) => (
                        <span className="movieDetailDataGenreName">
                          {genre.name}
                          {index !== movieDetailData.genres.length - 1 && " ⦁ "}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* hoveredKeyValue !== -1 && (
                <span>{data.name}</span>
              ); */}

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
