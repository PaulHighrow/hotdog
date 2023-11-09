import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';

import blueBone from '../../img/svg/blueBone.svg';

export const AboutUsBackground = styled(BackgroundWrapper)`
  background-size: 0, 175px, 0;
  background-position: center bottom -50px;

  @media screen and (min-width: 480px) {
    background-size: 0, 240px, 0;
    background-position: center bottom -65px;
  }

  @media screen and (min-width: 1280px) {
    background-size: 0, 350px, 0;
    background-position: left 75% bottom -100px;
  }
`;

export const AboutUsSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const AboutUsWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 13px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const AboutUsTitle = styled.h2`
  position: relative;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 300px;
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 29px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
    font-size: 70px;
    margin-bottom: 40px;
  }

  &::after {
    position: absolute;
    bottom: -4px;
    right: -14px;
    width: 32px;
    height: 29px;
    content: url(${blueBone});

    @media screen and (min-width: 768px) {
      bottom: 4px;
      right: -14px;
      width: 48px;
      width: 44px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -14px;
      right: -8px;
      width: 64px;
      height: 58px;
    }
  }
`;

export const AboutUsSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 40px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  margin-bottom: 13px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const AboutUsText = styled.p`
  max-width: 580px;
  color: var(--main-color);
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
