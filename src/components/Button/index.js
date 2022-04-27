import React from 'react';
import styles from './styles.module.css';

const Button = (props) => {
  const {foreColor, bgColor, customStyles} = props
  return (
    <div 
      className={styles.root} 
      style={{
        ...customStyles,
        backgroundColor: bgColor
      }}
    >
      <span 
        className={styles.caption} 
        style={{
          color: foreColor,
        }}
      >
        {props.children}
      </span>
    </div>
  )
}

export default Button;