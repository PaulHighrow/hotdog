import styled, { keyframes } from 'styled-components';
import { ReactComponent as TitleSketchSVG } from '../../img/svg/sketchTitle.svg';
import { ReactComponent as UnderlineShort } from '../../img/svg/hero-underline-short.svg';
import { ReactComponent as UnderlineLong } from '../../img/svg/hero-underline-long.svg';
import { ReactComponent as HeroSVG } from '../../img/svg/hero-caveat.svg';
import { ReactComponent as TitleSVG } from '../../img/svg/hero.svg';

export const HeroSection = styled.section`
  position: relative;
  min-height: 500px;
  padding-top: 60px;
  padding-bottom: 30px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
    padding-top: 105px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px 0;
    padding-top: 145px;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

export const HeroTitle = styled(TitleSVG)`
  margin: 0 auto;
  width: 300px;
  height: 80px;
  margin-bottom: 60px;

  @media screen and (min-width: 420px) {
    width: 400px;
    height: auto;
  }

  @media screen and (min-width: 600px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 548px;
  }

  @media screen and (min-width: 1280px) {
    width: 794px;
    
  }
`;

export const HeroText = styled.span`
  text-align: center;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;

  width: 280px;
  color: var(--main-color);
  font-family: var(--page-title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  -webkit-text-stroke: 1px var(--main-color);
  margin: 0 auto 30px auto;

  @media screen and (min-width: 360px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 75px;
    letter-spacing: 3.5px;
    width: 700px;
    font-size: 70px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1600px) {
    width: 600px;
  }
`;

const sketchAnimation = keyframes`
  0%{
    stroke-dashoffset: 746;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const TitleSketch = styled(TitleSketchSVG)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 746;
  width: 120px;

  @media screen and (min-width: 768px) {
    width: 270px;
  }

  & path {
    animation-name: ${sketchAnimation};
    animation-duration: 1.1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const SubTitle = styled.span`
  position: relative;
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;
  line-height: 0.7;
  color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    vertical-align: sub;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--main-color);
  margin-bottom: 8px;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 0 40px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px;
    max-width: 60%;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DescriptionMoreText = styled.span`
  transition: opacity var(--animation-global), font-size var(--animation-global),
    margin var(--animation-global), padding var(--animation-global);

  &.more-shown {
  }

  &.more-hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    transition: opacity var(--animation-global),
      font-size var(--animation-global), margin var(--animation-global),
      padding var(--animation-global);
  }
`;

export const DescriptionTrigger = styled.span`
  display: block;
  position: relative;
  max-width: max-content;
  margin: 0 auto;
  margin-bottom: 30px;
  cursor: pointer;

  font-family: var(--secondary-font-family);
  font-size: 18px;
  font-weight: 700;

  color: var(--accent-color);
  text-align: center;
  text-transform: uppercase;
  transition: all var(--animation-global);

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 60px;
  }

  &:hover,
  &:focus {
    color: var(--main-color);
  }
`;

const underlineStyles =
  'position: absolute; width: 100%; bottom: -6px; left: 0px; transform: rotate(-1.5deg);';

export const DescriptionUnderlineShort = styled(UnderlineShort)`
  ${underlineStyles}
`;

export const DescriptionUnderlineLong = styled(UnderlineLong)`
  ${underlineStyles}
`;

const pathsHAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
  }
  100%{
    stroke-dashoffset: 0;
  }
`;

const pathsAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
    opacity: 0;
  }
  50%{
    stroke-dashoffset: 1;
  }
  55%{
    opacity: 1;
  }
  100%{
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

export const HeroVector = styled(HeroSVG)`
  position: absolute;
  width: 100px;
  left: 2px;
  top: -12px;

  @media screen and (min-width: 768px) {
    width: 300px;
    left: -33px;
    top: 20px;
  }

  & .hero-h {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsHAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  & .hero-e {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 350ms;
    animation-fill-mode: both;
  }
  & .hero-r {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 750ms;
    animation-fill-mode: both;
  }
  & .hero-o {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.15s;
    animation-fill-mode: both;
  }
`;
