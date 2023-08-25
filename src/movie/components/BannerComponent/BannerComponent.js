import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../network/axios';
import movieData from '../../network/movieData';
import styles from './BannerComponent.module.css';

import {PiPlayFill} from 'react-icons/pi';

export default function BannerComponent() {
    const fetchNowPlayingUrl = '/movie/now_playing';
    const [movie, setMovie] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get(fetchNowPlayingUrl);
        const movieId = result.data.results[Math.floor(Math.random()*result.data.results.length)].id;
        const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
          params: {append_to_response: "videos"}
        });

        console.log("<Banner data>");
        console.log(movieDetail);
        setMovie(movieDetail);
    }

    const moveMovieDetailPage = () => {
      // if(movie.videos && movie.videos.results.length > 0)
      //   navigate(`/detail?k=${movie.videos.results[0].key}`);
      // else
      //   navigate(`/detail?k=YK7vtj9t4ek`);
    }

    return (
      <div
        className={`${styles.bannerImage}`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.movieDescriptionContainer}`}>
          <h1 className={`${styles.movieDescriptionTitle}`}>{movie.title}</h1>
          <h3 className={`${styles.movieDescriptionTagline}`}>{movie.tagline}</h3>
          <p className={`${styles.movieDescriptionOverview}`}>
            {movie.overview?.length > 100
              ? movie.overview.substr(0, 100) + "..."
              : movie.overview}
          </p>
          <div className={`${styles.movieDescriptionButtons}`}>
            <div 
              className={`${styles.movieDescriptionPlayButton}`}
              onClick={() => moveMovieDetailPage()}>
              <PiPlayFill className={`${styles.movieDescriptionPlayIcon}`} />
              <span>재생</span>
            </div>
            <div className={`${styles.movieDescriptionDetailInfo}`}>
              <svg
                className={`${styles.movieDescriptionDetailInfoIcon}`}
                width="24"
                color='white'
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ltr-0 e1mhci4z1"
                data-name="CircleI"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className={`${styles.movieDescriptionDetailInfoText}`}>상세 정보</span>
            </div>
          </div>
        </div>
      </div>
    );
}
