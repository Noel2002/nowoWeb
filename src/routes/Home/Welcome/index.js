import React from 'react'
import NavigationBar from '../../../components/NavigationBar';
import bgImage from '../../../images/headerBg.jpg';
import Banner from './Banner';
import styles from './styles.module.css';

const customStyles = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('${bgImage}')`,
    backgroundSize: 'cover',
}
const Welcome = () => {
  return (
    <div className={styles.root} style={customStyles}>
        <div className={styles.container}>
            <NavigationBar />
            <Banner />
        </div>
    </div>
  )
}

export default Welcome