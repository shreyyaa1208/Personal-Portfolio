import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();



  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am a passionate and reliable MERN Stack Developer specializing in creating engaging, responsive user interfaces and dynamic web applications. With strong proficiency in JavaScript and React, I excel at building intuitive front-end experiences. I thrive in collaborative environments and am committed to delivering high-quality, user-centric solutions.
      </SectionText>
      <SectionDivider />
      <br />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>Languages:  C++, JavaScript
        <br />
        Frameworks: HTML5 | CSS3 | Bootstrap | React.js | Next.js | Material UI | Node.js | Express.js
        <br />
        Database: SQL | MySQL
        <br />
        Tools and Services: GitHub | Postman | Figma | Netlify </SectionText>


    </Section>
  );
};

export default Timeline;
