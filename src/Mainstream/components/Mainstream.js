import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../api/requests";
import "./Mainstream.css";

function Mainstream() {
  return (
    <div className="mainstream">
      <Nav />
      <Row
        title="넷플릭스의 새로운 콘텐츠"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="오늘 대한민국의 TOP 10 영화"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="오늘 대한민국의 TOP 10 시리즈"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="기다림이 아깝지 않은 콘텐츠"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="다음 주 공개 콘텐츠"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="이번 주 공개 콘텐츠"
        id="Dm"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Footer />
    </div>
  );
}

export default Mainstream;
