import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as UnderlineShort } from '../../img/svg/exam-underline-short.svg';
import { ReactComponent as UnderlineMedium } from '../../img/svg/exam-underline-medium.svg';
import { ReactComponent as UnderlineLong } from '../../img/svg/exam-underline-long.svg';
import { ReactComponent as LoopyLine } from '../../img/svg/loopyLineNormal.svg';
import { ReactComponent as LoopyLineMirrored } from '../../img/svg/loopyLineMirror.svg';
import { PageNavigationText } from 'components/HowItWorks/HowItWorks.styled';

import blueBone from '../../img/svg/blueBone.svg';
import pinkBone from '../../img/svg/pinkBone.svg';

const pathAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
  }
  100%{
    stroke-dashoffset: 0;
  }
`;

export const ExamCenterBackground = styled(BackgroundWrapper)`
  background-size: 150px, 0, 150px;
  background-position: right -50px bottom 70px, center, right -50px top 100px;

  @media screen and (min-width: 480px) {
    background-size: 200px, 0, 200px;
    background-position: right -65px bottom 60px, center, right -65px top 100px;
  }

  @media screen and (min-width: 1280px) {
    background-size: 300px, 0, 300px;
    background-position: right -100px bottom 150px, center,
      right -100px top 120px;
  }
`;

export const ExamCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const ExamCenterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 6px;
  display: flex;
  gap: 33px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 684px;
    gap: 30px;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1155px;
    gap: 40px;
  }

  @media screen and (min-width: 1390px) {
    width: 1280px;
  }
`;

export const ExamCenterTitle = styled.h2`
  position: relative;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;
  max-width: 400px;

  @media screen and (min-width: 390px) {
    font-size: 32px;
  }

  @media screen and (min-width: 460px) {
    font-size: 38px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    max-width: 570px;
    margin: 0 auto;
    margin-bottom: 52px;
    font-size: 51px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    max-width: 871px;
    font-size: 82px;
  }

  &::before {
    position: absolute;
    top: -18px;
    left: -18px;
    width: 32px;
    height: 29px;
    content: url(${blueBone});

    @media screen and (min-width: 768px) {
      top: -30px;
      left: -10px;
      width: 48px;
      width: 44px;
    }

    @media screen and (min-width: 1280px) {
      top: -45px;
      left: -14px;
      width: 64px;
      height: 58px;
    }
  }
`;

export const ExamCenterSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 24px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 390px) {
    font-size: 32px;
  }

  @media screen and (min-width: 460px) {
    font-size: 36px;
  }

  @media screen and (min-width: 768px) {
    font-size: 51px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 82px;
  }
`;

export const ExamCenterList = styled.ul`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.8px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;

  &:last-child {
    padding-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    text-align: end;
    font-size: 32px;
    gap: 41px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    gap: 62px;
  }
`;

export const NavigationItem = styled.li`
  flex: 0 0 auto;
`;

export const ExamToggler = styled.a`
  user-select: none;
  color: #9d9d9d;
  z-index: 1;
  position: relative;
  transition: color var(--animation-global);

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  &.selected,
  &:hover,
  &:focus {
    color: var(--main-color);
  }

  &.selected svg {
    display: block;
  }
`;

const underlineStyles =
  'display: none; position: absolute; width: 100%; bottom: -6px; left: 0px; transform: rotate(-1.5deg);';

export const ExamTogglerUnderlineShort = styled(UnderlineShort)`
  ${underlineStyles}
`;

export const ExamTogglerUnderlineMedium = styled(UnderlineMedium)`
  ${underlineStyles}
`;

export const ExamTogglerUnderlineLong = styled(UnderlineLong)`
  ${underlineStyles}
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin-bottom: 75px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-bottom: 90px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const NavAnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    padding: 0 75px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 350px;
  padding-left: 11px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const NavigationDesc = styled.p`
position: relative;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--main-color);
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 22px;
  }

  &::after {
    position: absolute;
    top: -15px;
    left: -15px;
    width: 32px;
    height: 29px;
    content: url(${pinkBone});

    @media screen and (min-width: 768px) {
      top: -30px;
      left: -10px;
      width: 48px;
      width: 44px;
    }

    @media screen and (min-width: 1280px) {
      top: -45px;
      left: -14px;
      width: 64px;
      height: 58px;
    }
  }
`;

export const BottomPageNavigationText = styled(PageNavigationText)`
  right: 0px;
  left: 325px;
  bottom: -2px;
`;

export const LoopyLineIcon = styled(LoopyLine)`
  width: 120px;
  stroke-dasharray: 1;
  stroke-dashoffset: 2;
  animation-name: ${pathAnimation};
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  @media screen and (min-width: 1280px) {
    width: 130px;
  }
`;

export const LoopyLineMirroredIcon = styled(LoopyLineMirrored)`
  width: 120px;
  stroke-dasharray: 1;
  stroke-dashoffset: 2;
  animation-name: ${pathAnimation};
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  @media screen and (min-width: 1280px) {
    width: 130px;
  }
`;
