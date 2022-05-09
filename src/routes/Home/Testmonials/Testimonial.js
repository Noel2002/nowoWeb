import React from 'react'
import Image from '../../../components/Image'
import Row from '../../../components/Row'
import Column from '../../../components/Row/Column'
import { colors } from '../../../global/colors'
import styles from './styles.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Testimonial = (props) => {
  const {testmonial, prev, next} = props
  return (
    <Row>
        <Column>
            <div className={`${styles['image-wrapper']}`}>
                <Image source={testmonial.image} orientation="square" />
            </div>
            
        </Column>
        <Column>
            <div className={`${styles['testimony-wrapper']}`}>
                <div className={`${styles['testimony-container']}`}>
                    <div className={styles.apostrophe}>
                        <span>"</span>
                    </div>
                    <p 
                        className={`${styles.testimony}`}
                        style={{
                            color: colors['black'].regular
                        }}
                    >
                        {testmonial.testimony}
                    </p>
                    <div className={`${styles['author']}`}>
                        {`~ ${testmonial.name}`}
                    </div> 
                </div>
                <div className={`${styles['controls']}`}>
                    <div 
                        className={`${styles['control-btn']}`}
                        onClick={prev}
                    >
                        <ArrowBackIcon 
                            style={{
                                color: colors['brown'].regular
                            }} 
                        />
                        <div 
                            className={`${styles["caption"]}`} 
                            style={{
                                color: colors['brown'].regular
                            }}
                        >
                            Previous
                        </div>
                    </div>

                    <div 
                        className={`${styles['control-btn']}`}
                        onClick={next}
                    >
                        <div 
                            className={`${styles["caption"]}`} 
                            style={{
                                color: colors['brown'].regular
                            }}
                        >
                            Next
                        </div>
                        <ArrowForwardIcon 
                            style={{
                                color: colors['brown'].regular
                            }} 
                        />
                    </div>
                </div>
               
            </div>

            
        </Column>
    </Row>
  )
}

export default Testimonial