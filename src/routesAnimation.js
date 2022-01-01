import gsap, { Power3 } from 'gsap';

export const animationDuration = 600;

export const onEnter = (elem, appears) => {
  console.log('Enter', elem, appears);
  gsap.fromTo(
    elem,
    {
      y: -1 * window.innerHeight,
    },
    {
      y: 0,
      duration: animationDuration / 1000,
      ease: Power3.easeOut,
    }
  );
};

export const onExit = (elem) => {
  console.log('Exit', elem);
  gsap.to(elem, {
    duration: animationDuration / 1000,
    opacity: 0,
    ease: Power3.easeIn,
  });
};
