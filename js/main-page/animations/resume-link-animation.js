import MouseoverMouseleaveAnimation from '../../MouseoverMouseleaveAnimation.js';

const resumeLinkAnimation = new MouseoverMouseleaveAnimation(
  '#resume-link',
  {
    backgroundColor: 'white',
    color: '#003052',
    duration: 0.3,
    boxShadow: 'none',
  },
  {
    backgroundColor: '#003052',
    color: 'white',
    duration: 0.3,
    boxShadow: '0 3px 4px 0 #00000040',
  }
);
