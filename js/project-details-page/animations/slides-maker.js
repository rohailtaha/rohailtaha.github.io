const doAnimation = (toHide, toShow, displayType = 'block') => {
  gsap
    .timeline()
    .fromTo(
      toHide,
      {
        opacity: 1,
      },
      {
        display: 'none',
        opacity: 0,
        duration: 0.1,
      }
    )
    .fromTo(
      toShow,
      {
        opacity: 0,
      },
      {
        display: displayType,
        opacity: 1,
        duration: 0.3,
      },
      '-=0.05'
    );
};

const makeSlides = (projectScreen = 'DESKTOP') => {
  switch (projectScreen) {
    case 'DESKTOP':
      doAnimation(
        document.getElementById('mobile-images'),
        document.getElementById('desktop-images'),
        'grid'
      );
      break;

    case 'MOBILE':
      doAnimation(
        document.getElementById('desktop-images'),
        document.getElementById('mobile-images'),
        'flex'
      );
      break;
  }
};

document
  .getElementById('screen-toggle-btn__mobile')
  .addEventListener('click', event => {
    event.preventDefault();
    toggleActiveScreenButton(
      event.target,
      document.getElementById('screen-toggle-btn__desktop')
    );
    makeSlides('MOBILE');
  });

document
  .getElementById('screen-toggle-btn__desktop')
  .addEventListener('click', event => {
    event.preventDefault();
    toggleActiveScreenButton(
      event.target,
      document.getElementById('screen-toggle-btn__mobile')
    );
    makeSlides('DESKTOP');
  });

const toggleActiveScreenButton = (toActivate, toDeactivate) => {
  toDeactivate.classList.remove('gallery__screen-toggle-btn--active');
  toActivate.classList.add('gallery__screen-toggle-btn--active');
};
