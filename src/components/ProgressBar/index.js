import React from 'react';
import styles from './styles.module.css';

const ProgressBar = (props) => {
  const {fillColor, bgColor, value, title, customStyles} = props
  return (
    <div className={styles.root} style={customStyles}>
        <div className={`${styles.title} caption`}>
            <div>{title?title:"ProgressBar"}</div>
            <div>{`${value<=100?value:100}%`}</div>
        </div>
        <div 
            className={styles.outer} 
            style={
                {
                    borderColor: fillColor,
                    backgroundColor: bgColor
                }
            }
        >
            <div 
                className={styles.inner}
                style={
                    {
                        backgroundColor: fillColor,
                        width: `${value<=100? value: 100}%`
                    }
                }
            >
                
            </div>
        </div>
    </div>
  )
}

export default ProgressBar