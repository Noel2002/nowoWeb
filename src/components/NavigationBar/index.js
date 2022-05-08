import React, { useState } from 'react';
import { colors } from '../../global/colors';
import { navLinks } from '../../macros/testData';
import styles from './styles.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen= ()=>{
      setIsMenuOpen(true);
  }
  const handleMenuClose = ()=>{
      setIsMenuOpen(false);
  }
  return (
    <>
        <div className={styles.container}>
            <div 
                className={`${styles.title}`}
                style={{
                    color: colors['white'].regular
                }}
            >
                Noel00
            </div>
            <div className={styles["desktop-links"]}>
                {
                    navLinks.map( link=>(
                        <div key={link.href}
                            className={styles['desktop-link-box']}
                        >
                            <span className={styles["link-item"]}>{link.title}</span>
                        </div>
                    ))
                }
            
            </div>
            <div className={styles.burger}>
                <MenuIcon 
                    onClick={handleMenuOpen}
                    style={{
                        color: colors['white'].regular
                    }} 
                />
            </div>
        </div>
        <MobileMenu navLinks={navLinks} isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}

export default NavigationBar