import React,{ useState, useEffect } from 'react'
import { TbAlignLeft } from 'react-icons/tb';
import { PiSquaresFourThin } from 'react-icons/pi';
import './BottomNav.css';

export default function BottomNav() {
  const [show, setShow ] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>50){
        setShow(true);
      }else{
        setShow(false);
      }
    });
    return ()=>{
      window.removeEventListener("scroll",()=>{})
    }
  },[]);

  let BotNavClassName = 'BottomNavContainer'
  if(show){
    BotNavClassName='BottomNavContainer';
  }else {
    BotNavClassName="BottomNavTransp";
  }

  return (
    <div className={BotNavClassName}>
      <div className="left_side_container">
        <p className="bot_nav_series">시리즈</p>
        <select className="bot_nav_genre">
          <option>장르</option>
          <option>한국드라마</option>
        </select>
      </div>
      <div className="right_side_container">
        <TbAlignLeft className="align_sector"/>
        <PiSquaresFourThin className="rect_sector"/>
      </div>
    </div>
  )
}
