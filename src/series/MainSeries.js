import React from 'react'
import SeriesNav from './SeriesNav.js';
import styles from './MainSeries.module.css';

export default function MainSeries() {
  return (
    <div className={styles.main_series}>
      <SeriesNav/>
    </div>
  )
}