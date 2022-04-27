import React from 'react';
import styles from './styles.module.css';

const Section = (props) => {
    const {bgColor,customStyles} = props
  return (
    <div 
        className={styles.root}
        style={{
            backgroundColor: bgColor,
            ...customStyles
        }}
    >
        {props.children}
    </div>
  )
}

export default Section