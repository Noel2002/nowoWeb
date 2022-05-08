import React from 'react';
import styles from './mobileMenu.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../global/colors';

const MobileMenu = (props) => {
  const {navLinks, isOpen, onClose} = props;
  const handleClose =()=>{
    onClose();
  }
  return (
    <div className={isOpen?styles.root:styles.hide}>
        <div 
            className={styles.close}
        >
            <CloseIcon 
                onClick={handleClose}
                style={{
                    color: colors['white'].regular,
                    fontSize: 40,
                }}
            />

        </div>
        <div className={styles['mobile-links']}>
            {
                navLinks.map( link=>(
                    <div 
                        className={styles['mobile-link-box']}
                        style={{
                            color: colors['white'].regular,
                        }}
                    >
                        {link.title}
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default MobileMenu