import gsap from 'gsap';

export const animationDuration = 3500;

export const onEnter = (node, appears) => {
  console.log('Enter', node, appears);
  gsap.to(node, { duration: animationDuration, x: 200 });
};

export const onExit = (node) => {
  console.log('Exit', node);
  gsap.to(node, { duration: animationDuration, opacity: 0 });
};
