import styled, { keyframes } from 'styled-components';

import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { arrowAnimation } from 'components/HowItWorks/HowItWorks.styled';
import { ReactComponent as Arrow } from '../../img/svg/menu-arrow.svg';
import { ReactComponent as RotatedArrow } from '../../img/svg/menu-arrow-rotated.svg';
import { LeadBtn, wobblyOutline } from 'components/Menu/Menu.styled';

import sketchOutlineSmall from 'img/svg/sketchOutlineSmall.svg';
import pinkBone from '../../img/svg/pinkBone.svg';

export const EdCenterBackground = styled(BackgroundWrapper)`
  background-size: 150px, 0, 0;
  background-position: right -50px top 100px;

  @media screen and (min-width: 480px) {
    background-size: 200px, 0, 0;
    background-position: right -65px top 50px;
  }

  @media screen and (min-width: 1280px) {
    background-size: 300px, 0, 0;
    background-position: right -100px top 120px;
  }
`;

export const EdCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
    padding-bottom: 84px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const EdCenterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    width: 684px;
    display: grid;
    grid-template-columns: 448px auto;
    gap: 30px;
    align-items: center;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1155px;
    grid-template-columns: 800px auto;
    gap: 40px;
  }

  @media screen and (min-width: 1390px) {
    width: 1280px;
  }
`;

export const EdCenterTitle = styled.h2`
  position: relative;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 360px) {
    width: 300px;
    font-size: 40px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 52px;
    width: 420px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    width: 560px;
    font-size: 70px;
  }

  &::before {
    position: absolute;
    top: -18px;
    left: -18px;
    width: 32px;
    height: 29px;
    content: url(${pinkBone});

    @media screen and (min-width: 768px) {
      top: -27px;
      left: -27px;
      width: 48px;
      width: 44px;
    }

    @media screen and (min-width: 1280px) {
      top: -36px;
      left: -36px;
      width: 64px;
      height: 58px;
    }
  }
`;

export const EdCenterSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 34px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 360px) {
    font-size: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
  }
`;

export const EdCenterNavigation = styled.ul`
  color: var(--main-color);
  font-size: 26px;
  font-weight: 600;
  max-width: 350px;
  letter-spacing: 1.8px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (min-width: 768px) {
    text-align: end;
    font-size: 32px;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  z-index: 1;
`;

export const EdVideoToggler = styled.a`
  color: var(--main-color);
  z-index: 1;
  position: relative;
  transition: color var(--animation-global);

  @media screen and (max-width: 1279px) {
    user-select: none;
  }

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  &.selected,
  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.selected svg {
    display: block;
  }

  &:hover > .on-hover,
  &:focus > .on-hover {
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`;

export const EdCenterArrowMobile = styled(Arrow)`
  opacity: 0;
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 250px;
  z-index: -1;
  stroke-dasharray: 435;
`;

export const arrowAnimationTriggeredOnce = keyframes`
  0%{
    opacity: 1;
    stroke-dashoffset: -435;
  }
  50% {
    /* closing the offset makes the line appear to be drawn-in */
    opacity: 1;
    stroke-dashoffset: 0;
  }
  90%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const EdCenterArrowMobileInView = styled(EdCenterArrowMobile)`
  animation-name: ${arrowAnimationTriggeredOnce};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
`;

export const EdCenterArrow = styled(RotatedArrow)`
  opacity: 0;
  position: absolute;
  z-index: -1;
  stroke-dasharray: 435;

  @media screen and (min-width: 768px) {
    bottom: -4px;
    right: -6px;
    width: 230px;
  }

  @media screen and (min-width: 1280px) {
    right: -8px;
    width: 350px;
  }
`;

export const EdCenterArrowInView = styled(EdCenterArrow)`
  animation-name: ${arrowAnimationTriggeredOnce};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
`;

export const MoreBtnBox = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;

  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const MoreBtn = styled(LeadBtn)`
  width: 240px;
  margin: 0 auto;

  &::before {
    width: 240px;
    content: url(${sketchOutlineSmall});
    animation: 2s linear infinite ${wobblyOutline};
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;
