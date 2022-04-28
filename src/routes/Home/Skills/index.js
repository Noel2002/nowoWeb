import React from 'react'
import Button from '../../../components/Button'
import ProgressBar from '../../../components/ProgressBar'
import Row from '../../../components/Row'
import Column from '../../../components/Row/Column'
import Section from '../../../components/Section'
import SectionTitle from '../../../components/sectionTitle'
import { skills } from '../../../macros/testData'

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit"
const paragraphs = description.split('\n')
let paragraphId = 0
const Skills = () => {
  return (
    <Section>
      <SectionTitle title="SKills" color="brown" />
      <Row container={true}>
        <Column>
            {paragraphs.map( paragraph =>(
                <p 
                  key={paragraphId++} 
                  className={`text`}
                >
                  {paragraph}
                </p>
            ))}

          <Button 
            bgColor='brown' 
            foreColor="white"
          >
            Read More
          </Button>
        </Column>
        <Column>
          { skills.map( skill=>(
            <ProgressBar 
              title={skill.title}
              value={skill.level}
              key={skill.title}
            />
          ))}
        </Column>
      </Row>
    </Section>
  )
}

export default Skills