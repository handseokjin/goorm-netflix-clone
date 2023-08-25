import React, { useEffect, useState } from 'react'
import './SubHeader.css'
import requests from './api/requests';
import './Row.css'


export default function SubHeader({ onFetchUrlChange }) {
  const [categoryMenuVisible,setCategoryMenuVisible] = useState(false)
  const [languageMenuVisible,setLanguageMenuVisible] = useState(false)
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [categorySelect, setCategorySelect] =useState("원어");
  const [languageSelect,setLanguageSelect] =useState("영어");
  const [sortSelect,setSortSelect] = useState("추천콘텐츠");

  
  

  const categoryToggleMenu =() =>{
    setCategoryMenuVisible(!categoryMenuVisible);
    setLanguageMenuVisible(false);
    setSortMenuVisible(false);
  }
  const languageToggleMenu =() =>{
    setLanguageMenuVisible(!languageMenuVisible);
    setCategoryMenuVisible(false);
    setSortMenuVisible(false)
  }

  const sortToggleMenu =() => {
    setSortMenuVisible(!sortMenuVisible);
    setCategoryMenuVisible(false);
    setLanguageMenuVisible(false);
  }

  const handleCategory =(categorySelect)=>{
    setCategorySelect(categorySelect)
    setCategoryMenuVisible(false);
  }

  const handleLanguage = (languageSelect)=>{
    setLanguageSelect(languageSelect)
    setLanguageMenuVisible(false);
  }

  const handleSort = (sortSelect)=>{
    console.log('새로운 sortSelect 값:', sortSelect);
    setSortSelect(sortSelect)
    setSortMenuVisible(false);
    const newFetchUrl = generateFetchUrl();
    onFetchUrlChange(newFetchUrl);
  }


  const generateFetchUrl = () => {
  
    let fetchUrl = requests.fetchAll;

  

    if (sortSelect === "추천콘텐츠") {
      fetchUrl = "/discover/movie?sort_by=popularity.desc";
    } else if (sortSelect === "출시일") {
      fetchUrl = "/discover/tv?sort_by=release_date.desc";
    } else if (sortSelect === "오름차순") {
      fetchUrl += "?sort_by=popularity.asc";
    } else if (sortSelect === "내림차순") {
      fetchUrl += "?sort_by=popularity.desc";
    }

    if(languageSelect === '영어'){
      fetchUrl = "/discover/movie?region=US"
    }else if(languageSelect === '일본어'){
      fetchUrl = '/discover/tv?region=US'
    }else if(languageSelect === '한국어'){
      fetchUrl += '&region=KR'
    }

    if (categorySelect === "원어") {
      fetchUrl = "/discover/movie?sort_by=popularity.desc";
      } else if (categorySelect === "더빙") {
        fetchUrl = "/discover/tv?sort_by=release_date.desc";
      } else if (categorySelect === "자막") {
        fetchUrl = "/discover/movie?sort_by=popularity.desc";
      }
    console.log('생성된 fetchUrl:', fetchUrl);
    return fetchUrl;
  };

  
  useEffect(() => {  
    const newFetchUrl = generateFetchUrl();
    onFetchUrlChange(newFetchUrl);
  }, [categorySelect, languageSelect, sortSelect]);


  
  return (
    <div className='language_main'>
    <div className='SubHeader'>
        <div className='Sub__title'>
            언어별로 찾아보기
        </div>
    <div className='dropdownsContainer'>
        <span className='dropdownsLabel'>선호하는 설정을 선택하세요</span>
        <div className='dropdowns'>
        <div className='categoryDropdown'>
          <button className={`dropdownbtn ${categoryMenuVisible ? 'show' : ''}`} onClick={categoryToggleMenu}>{categorySelect}  ▼</button>
          <div className={`dropdownMenu ${categoryMenuVisible ? 'show' : ''}`}>
          <a href='#' onClick={()=>handleCategory("원어")}>원어</a>
          <a href='#'onClick={()=>handleCategory("더빙")}>더빙</a>
          <a href='#'onClick={()=>handleCategory("자막")}>자막</a>
        </div>
        </div>
        <div className='languageDropdown'>
        <button className={`dropdownbtn ${languageMenuVisible ? 'show' : ''}`} onClick={languageToggleMenu}>
          {languageSelect}  ▼</button>
          <div className={`dropdownMenu ${languageMenuVisible ? 'show' : ''}`}>
          <a href='#' onClick={()=>handleLanguage("영어")}>영어</a>
          <a href='#'onClick={()=>handleLanguage("일본어")}>일본어</a>
          <a href='#'onClick={()=>handleLanguage("한국어")}>한국어</a>
          </div>
        </div>
        </div>
    <span className="sortLabel">정렬기준</span>
    <div className='sortDropdown'>
    <button className={`dropdownbtn ${sortMenuVisible ? 'show' : ''}`} onClick={sortToggleMenu}>
          {sortSelect}  ▼</button>
          <div className={`dropdownMenu ${sortMenuVisible ? 'show' : ''}`}>     
             
          <a href='#' onClick={()=>handleSort("추천콘텐츠")}>추천콘텐츠</a>
          <a href='#'onClick={()=>handleSort("출시일")}>출시일</a>
          <a href='#'onClick={()=>handleSort("오름차순")}>오름차순</a>
          <a href='#'onClick={()=>handleSort("내림차순")}>내림차순</a>
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}
