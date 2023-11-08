import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { ReactComponent as MenuArrow } from '../../img/svg/menu-arrow.svg';

import blueBone from '../../img/svg/blueBone.svg';

export const HowItWorksSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const SectionWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 120px;
    margin-bottom: 80px;
  }
`;

export const SectionTitle = styled.h2`
  width: 186px;
  position: relative;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin: 0;
    letter-spacing: 3.5px;
    width: 252px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    width: 316px;
    font-size: 70px;
  }

  &::after {
    position: absolute;
    bottom: -4px;
    right: -8px;
    width: 31px;
    height: 27px;
    content: url(${blueBone});

    @media screen and (min-width: 768px) {
      bottom: -8px;
      right: -16px;
      /* transform: scaleX(-1); */
      width: 46px;
      height: 40px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -16px;
      right: -32px;
      /* transform: scaleX(-1); */
      width: 62px;
      height: 55px;
    }
  }
`;

export const SectionSubTitle = styled.span`
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

export const PageNavigation = styled.ul`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1.8px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const arrowAnimation = keyframes`
  0%{
    stroke-dashoffset: -435;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const PageNavigationItem = styled.li`
  z-index: 1;
`;

export const PageNavigationLink = styled(Link)`
  position: relative;
  display: block;
  z-index: 1;
  color: var(--main-color);
  transition: color var(--animation-global), opacity var(--animation-global);

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  @media screen and (max-width: 1279px) {
    user-select: none;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &:hover > span,
  &:focus > span {
    opacity: 1;
    transition: opacity var(--animation-global) 250ms;
  }

  &:hover > svg,
  &:focus > svg {
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`;

export const PageNavigationArrow = styled(MenuArrow)`
  display: block;
  opacity: 0;
  position: absolute;
  bottom: -5px;
  left: -5px;
  width: 250px;
  z-index: -1;
  stroke-dasharray: 435;

  @media screen and (min-width: 768px) {
    bottom: -6px;
    left: -6px;
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -6px;
    left: -6px;
    width: 400px;
  }
`;

export const PageNavigationText = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    color: var(--accent-color);
    opacity: 0;
    position: absolute;
    top: 33%;
    right: -95px;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: normal;
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
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
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
`;
