import {
  BackBtn,
  ForwardBtn,
  MarqueeChild,
  MarqueeImg,
  MarqueeOverlay,
  MarqueePicture,
  MarqueeText,
  StyledMarquee,
} from 'components/Hero/HeroMarquee/HeroMarquee.styled';
import { useEffect, useState } from 'react';
import { heroImgsIndex } from '../../../img/hero/heroImgs';
import { MarqueeModal } from 'components/MarqueeModal/MarqueeModal';

const {
  heroMarquee1large1xpng,
  heroMarquee1large1xwebp,
  heroMarquee1large2xpng,
  heroMarquee1large2xwebp,
  heroMarquee2large1xpng,
  heroMarquee2large1xwebp,
  heroMarquee2large2xpng,
  heroMarquee2large2xwebp,
  heroMarquee3large1xpng,
  heroMarquee3large1xwebp,
  heroMarquee3large2xpng,
  heroMarquee3large2xwebp,
  heroMarquee4large1xpng,
  heroMarquee4large1xwebp,
  heroMarquee4large2xpng,
  heroMarquee4large2xwebp,
  heroMarquee5large1xpng,
  heroMarquee5large1xwebp,
  heroMarquee5large2xpng,
  heroMarquee5large2xwebp,
  heroMarquee1small1xpng,
  heroMarquee1small1xwebp,
  heroMarquee1small2xpng,
  heroMarquee1small2xwebp,
  heroMarquee2small1xpng,
  heroMarquee2small1xwebp,
  heroMarquee2small2xpng,
  heroMarquee2small2xwebp,
  heroMarquee3small1xpng,
  heroMarquee3small1xwebp,
  heroMarquee3small2xpng,
  heroMarquee3small2xwebp,
  heroMarquee4small1xpng,
  heroMarquee4small1xwebp,
  heroMarquee4small2xpng,
  heroMarquee4small2xwebp,
  heroMarquee5small1xpng,
  heroMarquee5small1xwebp,
  heroMarquee5small2xpng,
  heroMarquee5small2xwebp,
} = heroImgsIndex;

export const HeroMarquee = ({ toggleModal }) => {
  const [isMarqueeModalOpen, setIsMarqueeModalOpen] = useState(false);
  const [isScrolledBackEnough, setIsScrolledBackEnough] = useState(false);
  const [isScrolledForwardEnough, setIsScrolledForwardEnough] = useState(false);
  const [modalId, setmodalId] = useState(NaN);

  const handleToggleModal = e => {
    setmodalId(modalId => (modalId = e.currentTarget.id));
    setIsMarqueeModalOpen(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeMarqueeModal = () => {
    setIsMarqueeModalOpen(isOpen => (isOpen = false));
    setmodalId(modalId => (modalId = NaN));
    !document.body.style.overflowY && isMarqueeModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  const handleBackClick = e => {
    const marqueeEl = document.querySelector('.initial-child-container');
    const marqueeElements = [
      marqueeEl,
      ...document.querySelectorAll('.marquee > .child'),
      // ...document.querySelectorAll('.child'),
    ];
    console.log(marqueeElements);
    marqueeElements.forEach(element => {
      element.style.transition = 'all 250ms linear';
      const transformPx = element.style.transform?.match(/-?[0-9]/g)?.join('');
      console.log(transformPx);
      if (+transformPx === 0) {
        setIsScrolledBackEnough(isScrolled => (isScrolled = true));
      }
      if (!transformPx) {
        element.style.transform = 'translateX(300px)';
      } else {
        element.style.transform = `translateX(${+transformPx + 300}px)`;
      }
    });
  };

  const handleForwardClick = e => {
    const marqueeEl = document.querySelector('.initial-child-container');

    const marqueeElements = [
      marqueeEl,
      ...document.querySelectorAll('.marquee > .child'),
      // ...document.querySelectorAll('.child'),
    ];
    console.log(marqueeElements);
    marqueeElements.forEach(element => {
      element.style.transition = 'all 250ms linear';
      let transformPx = element.style.transform?.match(/-?[0-9]/g)?.join('');
      console.log(transformPx);
      if (+transformPx < 0) {
        setIsScrolledBackEnough(isScrolled => (isScrolled = true));
      }
      if (!transformPx) {
        element.style.transform = 'translateX(-300px)';
      } else {
        element.style.transform = `translateX(${+transformPx - 300}px)`;
      }
    });
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isMarqueeModalOpen) {
        closeMarqueeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {isMarqueeModalOpen && (
        <MarqueeModal
          closeMarqueeModal={closeMarqueeModal}
          toggleModal={toggleModal}
          id={modalId}
        />
      )}
      <StyledMarquee
        autoFill={true}
        pauseOnHover={true}
        onCycleComplete={() => console.log('loopd')}
      >
        <MarqueeChild id={0} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Комплексний догляд</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee1large1xwebp} 1x, ${heroMarquee1large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee1large1xpng} 1x, ${heroMarquee1large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee1small1xwebp} 1x, ${heroMarquee1small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee1small1xpng} 1x, ${heroMarquee1small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee1small1xpng}
              alt="Hero marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>

        <MarqueeChild id={1} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Гігієнічний догляд</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee2large1xwebp} 1x, ${heroMarquee2large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee2large1xpng} 1x, ${heroMarquee2large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee2small1xwebp} 1x, ${heroMarquee2small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee2small1xpng} 1x, ${heroMarquee2small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee2small1xpng}
              alt="Education Center marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>

        <MarqueeChild id={2} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Експрес лінька</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee3large1xwebp} 1x, ${heroMarquee3large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee3large1xpng} 1x, ${heroMarquee3large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee3small1xwebp} 1x, ${heroMarquee3small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee3small1xpng} 1x, ${heroMarquee3small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee3small1xpng}
              alt="Education Center marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>

        <MarqueeChild id={3} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Тримінг</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee4large1xwebp} 1x, ${heroMarquee4large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee4large1xpng} 1x, ${heroMarquee4large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee4small1xwebp} 1x, ${heroMarquee4small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee4small1xpng} 1x, ${heroMarquee4small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee4small1xpng}
              alt="Education Center marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>

        <MarqueeChild id={4} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Догляд за котами</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee5large1xwebp} 1x, ${heroMarquee5large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee5large1xpng} 1x, ${heroMarquee5large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee5small1xwebp} 1x, ${heroMarquee5small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee5small1xpng} 1x, ${heroMarquee5small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee5small1xpng}
              alt="Education Center marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>

        <MarqueeChild id={5} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Догляд за гризунами</MarqueeText>
          </MarqueeOverlay>
          <MarqueePicture>
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee5large1xwebp} 1x, ${heroMarquee5large2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroMarquee5large1xpng} 1x, ${heroMarquee5large2xpng} 2x`}
              type="image/png"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee5small1xwebp} 1x, ${heroMarquee5small2xwebp} 2x`}
              type="image/webp"
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroMarquee5small1xpng} 1x, ${heroMarquee5small2xpng} 2x`}
              type="image/png"
            />
            <MarqueeImg
              src={heroMarquee5small1xpng}
              alt="Education Center marquee placeholder"
            />
          </MarqueePicture>
        </MarqueeChild>
      </StyledMarquee>
      <BackBtn onClick={handleBackClick}>Back</BackBtn>
      <ForwardBtn onClick={handleForwardClick}>Forward</ForwardBtn>
    </>
  );
};
