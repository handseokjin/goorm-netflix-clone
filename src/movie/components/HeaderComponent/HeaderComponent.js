import React, {useState, useEffect} from 'react';
import './HeaderComponent.css';

import {FiSearch} from 'react-icons/fi';
import {BiSolidDownArrow} from 'react-icons/bi';

export default function HeaderComponent() {
  const [showGenreHeader, setShowGenreHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if(window.scrollY > 50)
        setShowGenreHeader(true);
      else
        setShowGenreHeader(false);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, []);
  
  return (
    <div className="headerContainer">
      <div className="topContainer">
        <div className="leftContainer">
          <img
            className="netflixLogo"
            src={require("../../images/img-netflix-logo.png")}
            alt="Netflix Logo"
          />
          <div className="contentsContainer">
            <span className="contents">홈</span>
            <span className="contents">시리즈</span>
            <span className="contents">영화</span>
            <span className="contents">NEW! 요즘 대세 콘텐츠</span>
            <span className="contents">내가 찜한 콘텐츠</span>
            <span className="contents">언어별로 찾아보기</span>
          </div>
        </div>
        <div className="infoContainer">
          <FiSearch className="searchIcon" />
          <div className="alertContainer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ltr-0 e1mhci4z1"
              data-name="Bell"
              aria-hidden="true"
              color="white"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <img
            className="userProfile"
            src={require("../../images/ic-netflix-user.jpg")}
            alt="user profile"
          />
        </div>
      </div>
      <div
        className={`genreContainer ${showGenreHeader && "genreContainerBlack"}`}
      >
        <div className="genreSelectContainer">
          <span className="movieText">영화</span>
          <div className='genreSelectBox'>
            <span className='genreSelectName'>장르</span>
            <BiSolidDownArrow className='genreSelectArrow'/>
          </div>
        </div>
        <div className="filtercontainer">
          <div className="filter1">
            <svg
              width="24"
              height="24"
              color='white'
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon svg-icon-rows ltr-0 e1mhci4z1"
              data-name="List"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="filter2">
            <svg
              width="15"
              height="15"
              color='white'
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon svg-icon-grid ltr-0 e1mhci4z1"
              data-name="GridFill"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
