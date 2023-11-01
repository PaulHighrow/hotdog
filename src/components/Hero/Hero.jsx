import { Box } from 'components/Box/Box.styled';
import { useState } from 'react';
import {
  Description,
  DescriptionMoreText,
  DescriptionTrigger,
  DescriptionUnderlineLong,
  DescriptionUnderlineShort,
  HeroSection,
  HeroText,
  HeroTitle,
  HeroTitleWrapper,
} from './Hero.styled';
import { HeroMarquee } from './HeroMarquee/HeroMarquee';

export const Hero = ({ toggleModal }) => {
  const [isMore, setIsMore] = useState(false);

  const showMore = () => {
    setIsMore(isMore => !isMore);
  };

  return (
    <HeroSection id="hero">
      <Box>
        <HeroTitleWrapper>
          <HeroTitle />
          <HeroText>Hot Dog Grooming</HeroText>
        </HeroTitleWrapper>
        <Description>
          <span>
            Наш грумінг салон - місце, де домашні вихованці отримують
            професійний догляд та кохання. Наша команда складається з
            висококваліфікованих та досвідчених грумерів, які знають все про те,
            як зробити вашого вихованця красивим та здоровим.
          </span>
          <DescriptionMoreText
            className={isMore ? 'more-shown' : 'more-hidden'}
          >
            {' '}
            Ми надаємо широкий спектр послуг, включаючи стрижку, купання,
            чищення зубів, догляд за вовною та шкірою, а також гігієнічні
            процедури. Ми використовуємо тільки якісні засоби та інструменти,
            щоб забезпечити максимальний комфорт та безпеку для вашого
            вихованця.
          </DescriptionMoreText>
        </Description>
        <DescriptionTrigger onClick={showMore}>
          {isMore ? 'Згорнути' : 'Дізнатись більше'}
          {isMore ? (
            <DescriptionUnderlineShort />
          ) : (
            <DescriptionUnderlineLong />
          )}
        </DescriptionTrigger>
      </Box>
      <HeroMarquee toggleModal={toggleModal} />
    </HeroSection>
  );
};
