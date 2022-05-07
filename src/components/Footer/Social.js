import React from 'react';
import styles from './social.module.css';
import { colors } from '../../global/colors';
import { socials } from '../../macros/testData';

const Social = (props) => {

  return (
    <div className={`${styles.container}`}>
        {socials.map( social=>(
            <div className={`${styles['icon-holder']}`} key={social.id}>
                <div 
                    className={`${styles['icon']}`
                }>
                    <social.icon 
                        style={{
                            fontSize: 20,
                            color: colors['black'].strong
                        }}
                    />
                </div>
        </div>
        ))}
        
    </div>
  )
}

export default Social