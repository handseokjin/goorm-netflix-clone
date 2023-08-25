import React from 'react'
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { AiOutlineBell } from 'react-icons/ai';
import './TopNav.css';

export default function TopNav() {
  return (
    <div className="TopNavBox">
      <div className="TopNavLeftContainer">
        <img className="logo_image" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="netflix_logo"/>
        <p className="top_nav_left_content">홈</p>
        <p className="top_nav_left_content">시리즈</p>
        <p className="top_nav_left_content">영화</p>
        <p className="top_nav_left_content">NEW!요즘 대세 콘텐츠</p>
        <p className="top_nav_left_content">내가 찜한 콘텐츠</p>
        <p className="top_nav_left_content">언어별로 찾아보기</p>
      </div>
      <div className="TopNavRightContainer">
        <PiMagnifyingGlassBold className="mag_glass"/>
        <AiOutlineBell className="nav_bell"/>
        <p className="top_nav_right_content">로그인</p>
      </div>
    </div>
  )
}
