import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I’m Shreya<br />
        Nice to meet you
      </SectionTitle>
      <SectionText>
        I am a Front - End Web Developer with experience in building web applications using React and Next.js.
      </SectionText>
      <Button onClick={() => window.location = 'https://mail.google.com/mail/u/0/#inbox?compose=jrjtXGkBrxHFlXDsVKrMcPfchvrWpQXMVlpcHfBzpLVNwnbDQDMHGJDFPStFdlQzSwnKbLzg'}>Let's Connect</Button>
    </LeftSection>

  </Section>

);

export default Hero;