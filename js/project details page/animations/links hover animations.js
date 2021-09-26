import MouseoverMouseleaveAnimation from '../../MouseoverMouseleaveAnimation.js';

const LinkAnimations = new MouseoverMouseleaveAnimation(
  ['#preview-site-btn', '#view-code-btn'],
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

