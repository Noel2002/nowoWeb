import React from 'react';
import { colors } from '../../global/colors';
import Row from '../Row';
import Column from '../Row/Column';
import Section from '../Section';
import Title from '../Title';
import Social from './Social';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <Section bgColor = {colors["black"].strong}>
        <Row>
            <Column>
               <Title
                    color = {colors['white'].regular}
               >
                   subscribe
               </Title>
               <p
                    className={`text`}
                    style={{
                        color: colors['white'].extraLight
                }}
               >
                   Sign up to stay updated with blogs notification
               </p>
               <form className={`${styles.form}`}>
                   <input 
                        className={`${styles.input}`}

                    />
                    <div 
                        className={`${styles['btn']}`}
                        style={{
                            backgroundColor: colors['brown'].regular,
                            color: colors['white'].regular
                        }}
                    >
                        Sign up
                    </div>
               </form>
               
            </Column>
            <Column>
                <div className={`${styles.separator}`}></div>
                <Title
                    color= {colors['white'].regular}
                >
                    social media
                </Title>
                <p
                    className={`text`}
                    style={{
                        color: colors['white'].extraLight
                    }}
                >
                    Let's stay connected! Follow me on:
                </p>
                <Social />
            </Column>
        </Row>
    </Section>

  )
}

export default Footer