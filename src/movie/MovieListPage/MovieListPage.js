import React from 'react';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import BannerComponent from '../components/BannerComponent/BannerComponent';
import MovieGenreRow from '../components/MovieGenreRow/MovieGenreRow';
import movieData from '../network/movieData';

import './MovieListPage.css';

export default function MovieListPage() {
    return (
      <div className="movieListPage">
        <HeaderComponent />

        <BannerComponent/>

        <div>
          {movieData.map((data) => (
            <MovieGenreRow id={"genreRow" + data.id} data={data} />
          )
            
            // data !== null && (
            //   <MovieGenreRow id={"genreRow" + data.id} data={data} />
            // );
          )}
        </div>

        <FooterComponent />
      </div>
    );
}
