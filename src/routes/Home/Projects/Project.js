import React from 'react'
import Button from '../../../components/Button'
import Image from '../../../components/Image'
import Row from '../../../components/Row'
import Column from '../../../components/Row/Column'
import Title from '../../../components/Title'
import { colors } from '../../../global/colors'
import styles from './project.module.css'



const Project = (props) => {
  const {project} = props
  const synopsis = project.description.split('\n')[0].slice(0,220)
  let paragraphId = 0
  return (
    <Row>
        <Column>
            <Image source={project.image} alt={project.title}/>
        </Column>
        <Column>
            <div className={styles.root}>
                <div className={styles.upper}>
                    <Title color= {colors['white'].regular}>
                        {project.title}
                    </Title>

                    <>
                        <p
                            className={`text`}
                            style={{
                                margin:0,
                                color: colors['white'].light,
                                fontWeight: 300
                            }}
                            key={paragraphId++}
                        >
                            {`${synopsis} . . .`}
                        </p>
                        <br />
                    </>
                </div>
                <div className={styles.upper}>
                    <Button
                        foreColor={colors['white'].regular}
                        bgColor={colors['black'].strong}
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </Column>
    </Row>
  )
}

export default Project