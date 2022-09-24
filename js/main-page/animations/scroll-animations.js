const makeNavigationScrollTrigger = (
  target,
  trigger,
  scrollTriggerOptions = {}
) => {
  const defaultScrollTriggerOptions = {
    start: 'top 30%',
    end: 'center top',
    toggleActions: 'play reset play reset',
  };

  gsap.to(target, {
    scrollTrigger: {
      trigger,
      ...defaultScrollTriggerOptions,
      ...scrollTriggerOptions,
    },
    borderBottom: '1px solid',
  });
};

const navigationScrollTriggerElements = [
  {
    target: '.nav__work-link',
    trigger: '#work',
  },
  {
    target: '.nav__about-link',
    trigger: '#about',
  },
  {
    target: '.nav__contact-link',
    trigger: '#contact',
    scrollTriggerOptions: { start: '80% bottom' },
  },
];

navigationScrollTriggerElements.forEach(element => {
  const { target, trigger, scrollTriggerOptions } = element;
  makeNavigationScrollTrigger(target, trigger, scrollTriggerOptions);
});

const makeHomeSectionScrollTrigger = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#home',
      end: '80% top',
    },
  });

  tl.fromTo(
    '#work-link__img',
    {
      y: 1.5,
    },
    {
      y: -1.5,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.out',
    },
    '+=0.5'
  );
};

makeHomeSectionScrollTrigger();

const makeSkillsListScrollTrigger = () => {
  const tl_skills = gsap.timeline({
    scrollTrigger: {
      trigger: '.about .skills-list',
      start: 'center bottom',
    },
  });

  tl_skills.from('.about .skills-list .skill', {
    stagger: {
      amount: 1,
    },
    x: -100,
    opacity: 0,
  });
};

makeSkillsListScrollTrigger();
