import styled from 'styled-components';
// import pinkBoneBGPng from '../../img/bg/pinkBone.png';
// import greenBoneBGPng from '../../img/bg/greenBone.png';
// import pinkBoneBGWebp from '../../img/bg/pinkBone.webp';
// import greenBoneBGWebp from '../../img/bg/greenBone.webp';
// import blueBoneBGPng from '../../img/bg/pinkBone.png';
// import blueBoneBGWebp from '../../img/bg/pinkBone.webp';
import pinkPawsBGPng from '../../img/bg/pinkPaws.png';
import greenPawsBGPng from '../../img/bg/greenPaws.png';
import pinkPawsBGWebp from '../../img/bg/pinkPaws.webp';
import greenPawsBGWebp from '../../img/bg/greenPaws.webp';
import bluePawsBGPng from '../../img/bg/bluePaws.png';
import bluePawsBGWebp from '../../img/bg/bluePaws.webp';

export const BackgroundWrapper = styled.div`
  background: no-repeat right -55px top 320px / 150px image-set(url(${greenPawsBGWebp})
          type('image/webp'), url(${greenPawsBGPng}) type('image/png')),
    no-repeat left -30px top 725px / 175px image-set(url(${pinkPawsBGWebp})
          type('image/webp'), url(${pinkPawsBGPng}) type('image/png')),
    no-repeat right -55px bottom 150px / 150px image-set(url(${bluePawsBGWebp})
          type('image/webp'), url(${bluePawsBGPng}) type('image/png'));

  @media screen and (min-width: 480px) {
    background-position: right -75px top 200px, left -50px top 710px,
      right -75px bottom 100px;
    background-size: 200px, 233px, 200px;
  }

  @media screen and (min-width: 768px) {
    background-position: right -80px top 280px, left -40px top 900px,
      right -65px bottom 40px;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -90px top 300px, left -60px top 920px,
      right -95px bottom;
    background-size: 300px, 360px, 300px;
  }
`;
