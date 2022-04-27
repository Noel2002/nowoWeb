import React from 'react';
import styles from './styles.module.css';

const SectionTitle = (props) => {
  const {title, color} = props;
  return (
    <div className={styles.root}>
        <span 
            className={`${styles.titleBox}`} 
            style={{borderColor: color?color:'black'}}
        >
            <span 
                className={styles.text}
                style={{color: color?color:"black"}}
            >
                {title}
            </span>
        </span>
    </div>
  )
}

export default SectionTitle