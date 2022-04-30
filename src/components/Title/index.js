import React from 'react'
import styles from './styles.module.css'

const Title = (props) => {
    const {title, color, customStyles}  = props;
    return (
        <div className={styles.root} style={customStyles}>
            <span 
                className={`${styles.titleBox}`} 
            >
                <span 
                    className={styles.text}
                    style={{color: color?color:"black"}}
                >
                    {title?title:props.children}
                </span>
            </span>
        </div>
    )
}

export default Title