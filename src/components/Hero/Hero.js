import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there, my name is <br />
          Nikhil Maske <br/>
          I make cool stuffs for the web
        </SectionTitle>
        <SectionText>
        I am aspiring software engineer from India, current learning full stack
        development and contributing to Open source softwares.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;