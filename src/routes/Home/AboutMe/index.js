import React from 'react';
import Image from '../../../components/Image';
import Section from '../../../components/Section';
import SectionTitle from '../../../components/sectionTitle';
import { colors } from '../../../global/colors';
import { aboutMe, aboutMeContacts } from '../../../macros/testData';
import styles from './styles.module.css';

const AboutMe = () => {
  const data = aboutMe;
  const contacts = aboutMeContacts;
  const paragraphs = data.description.split('\n');
  let paragraphKey = 0;
  return (
    <Section bgColor={colors['brown'].extraLight}>
        <div className={styles.root}>
            <div 
                className={`${styles.container}`}
            >
                <div className={styles.left}>
                    <SectionTitle>who is noel?</SectionTitle>
                    <div className={styles.description}>
                        {
                            paragraphs.map( paragraph =>(
                                <p 
                                    key={paragraphKey++}
                                    className={`text`}
                                >
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    <Image source={data.image} orientation='portrait' />
                </div>
            
            </div>
            <div className={styles.footer}>
                {
                    contacts.map(contact =>(
                        <div 
                            key={contact.title}
                            className={styles['contact-wrapper']}
                        >
                            <div className={styles['icon-holder']}>
                                <contact.icon 
                                    style={{
                                        color: 'white',
                                        fontSize: 50
                                    }}
                                />
                            </div>
                            <div 
                                className={styles['details-box']}
                            >
                                <span
                                    className={styles['details-title']}
                                    style={{
                                        color: colors['white'].regular
                                    }}
                                >
                                    {contact.title}
                                </span>

                                {contact.details.map( item=>(
                                    <span
                                        key={item}
                                        className={styles['details-item']}
                                        style={{
                                            color: colors['white'].extraLight
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
    </Section>

  )
}

export default AboutMe