import { colors } from '../../../global/colors'
import React from 'react'
import styles from './styles.module.css'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/sectionTitle'
import Project from './Project'
import { projects } from '../../../macros/testData'


const Projects = () => {
  return (
      <div className={`${styles.root}`}>
        <Section bgColor={colors['brown'].strong}>
            <SectionTitle 
                color={colors['white'].regular}
                customStyles={{
                    marginBottom: 35,
                }}
            >
                projects
            </SectionTitle>
            { projects.map( project=>(
                <Project project={project} />
            ))}
        </Section>  
      </div>
    
  )
}

export default Projects