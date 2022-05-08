import React from 'react';
import { colors } from '../../../global/colors';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
        <div 
            className={styles.head}
            style={{
                color: colors['white'].regular
            }}
        >
            Berwa noel
        </div>
        <div 
            className={styles['sub-head']}
            style={{
                color: colors['white'].light
            }}
        >
            web developer
        </div>
        <div 
            className={`${styles['banner-text']}`}
            style={{
                color: colors['white'].extraLight
            }}
        >
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        </div>
    </div>
  )
}

export default Banner