import React from 'react'
import TopNav from './TopNav.js';
import BottomNav from './BottomNav.js';
import './SeriesNav.css'

export default function SeriesNav() {
  return (
    <div>
      <div className="nav">
        <TopNav/>
        <BottomNav/>
      </div>
    </div>
  )
}
