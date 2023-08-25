import React from 'react';
import './MovieDetailModal.css';
import {PiPlayFill} from 'react-icons/pi';
import {CiCirclePlus} from 'react-icons/ci';
import {BsHandThumbsUp} from 'react-icons/bs';

export default function MovieDetailModal({movieDetailData, callback}) {
  console.log("MovieDetailModal.js");
  console.log(movieDetailData);

  const clickCloseButton = () => {
    callback(false);
  };

  const moveMovieDetailPage = () => {
    // if(movie.videos && movie.videos.results.length > 0)
    //   navigate(`/detail?k=${movie.videos.results[0].key}`);
    // else
    //   navigate(`/detail?k=YK7vtj9t4ek`);
  };

  return (
    <div className="modalBackground">
      <div className="modalContentsContainer">
        <div
          className="modalPosterContainer"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetailData?.backdrop_path}")`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="modalDetailCloseButton">
            <svg
              color="white"
              onClick={() => clickCloseButton()}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ltr-0 e1mhci4z1"
              data-name="X"
              aria-labelledby="preview-modal-81616256"
              data-uia="previewModal-closebtn"
              role="button"
              aria-label="close"
              tabindex="0"
            >
              <title id="preview-modal-81616256">close</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="modalDetailTitleContainer">
            <h1 className="movieDetilaTitle">{movieDetailData.title}</h1>
            <div className="movieDetailModalIconContainer">
              <div
                className="movieDescriptionPlayButton"
                onClick={() => moveMovieDetailPage()}
              >
                <PiPlayFill className="movieDescriptionPlayIcon" />
                <span>재생</span>
              </div>
              <CiCirclePlus className="circlePlusIcon" />
              <BsHandThumbsUp className="circleThumbIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// onClick={() => clickCloseButton()}
