import React from 'react';
import styles from "./dashboard.module.css"

const Dashbooard = () => {
  return (
    <div className={styles['root']}>
      <div className={styles['aside']}>
        aside
      </div>
      <div className={styles['main']}>
        main
      </div>
    </div>
  )
}

export default Dashbooard