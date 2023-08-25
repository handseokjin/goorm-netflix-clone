import React, {useState, useEffect} from 'react';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import BannerComponent from '../components/BannerComponent/BannerComponent';
import MovieGenreRow from '../components/MovieGenreRow/MovieGenreRow';
import MovieDetailModal from '../components/MovieDetailModal/MovieDetailModal';
import movieData from '../network/movieData';

import './MovieListPage.css';


export default function MovieListPage() {
  const [isMovieDetailModal, setIsMovieDetailModal] = useState(false);
  const [detailData, setDetailData] = useState({});

  // MovieDetailModal로부터 모달 닫으는 콜백
  const fromMovieDetailCallback = (isCloseModal) => {
    console.log('close modal message from MovieDetailPage.js');

    setIsMovieDetailModal(isCloseModal);
  }

  // MovieGenreRow로부터 모달 열라는 콜백
  const fromMovieListCallback = (isOpenModal, movieDetailData) => {
    console.log('open modal message from MovieListPage.js');
    

    setIsMovieDetailModal(isOpenModal);
    setDetailData(movieDetailData);
  }

    return (
      <div className='movieListPageContainer'>
        

        <div className="movieListPage">
          <HeaderComponent />

          <BannerComponent />

          <div>
            {movieData.map(
              (data) => (
                <MovieGenreRow
                  id={"genreRow" + data.id}
                  data={data}
                  movieListCallback={fromMovieListCallback}
                />
              )

              // data !== null && (
              //   <MovieGenreRow id={"genreRow" + data.id} data={data} />
              // );
            )}
          </div>

          <FooterComponent />
        </div>
        {isMovieDetailModal === true && (
          <MovieDetailModal
            className="modalBackground"
            movieDetailData={detailData}
            callback={fromMovieDetailCallback}
          />
        )}
      </div>
    );
}
