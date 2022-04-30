import { isEditableInput } from '@testing-library/user-event/dist/utils'
import React,{useState} from 'react'
import Section from '../../components/Section'
import SectionTitle from '../../components/sectionTitle'
import { colors } from '../../global/colors'
import { testimonials } from '../../macros/testData'
import Testimonial from './Testimonial'

const Testimonials = () => {
  let testmonialKey = 0;
  const [index, setIndex] = useState(0);
  const next = ()=>{
    setIndex((index + 1) % testimonials.length)
  }
  const prev = ()=>{
      if(!index){
          setIndex(testimonials.length - 1)
      }
      else{
          setIndex(index-1)
      }
  }
  return (
    <Section>
        <SectionTitle color={colors['black'].strong}>
            Testimonials
        </SectionTitle>

            <Testimonial 
                key={testmonialKey++} 
                testmonial={testimonials[index]} 
                next={next} 
                prev={prev}
                index={index}
            />

        
        
    </Section>
  )
}

export default Testimonials