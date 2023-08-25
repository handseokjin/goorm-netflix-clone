import React from 'react'
import TopNav from './TopNav.js';
import BottomNav from './BottomNav.js';
import styles from './SeriesNav.module.css';

export default function SeriesNav() {
  return (
    <div>
      <div className={styles.nav}>
        <TopNav/>
        <BottomNav/>
      </div>
    </div>
  )
}
