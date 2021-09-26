export default class MouseoverMouseleaveAnimation {
  constructor(targets, mouseoverProperties, mouseleaveProperties) {
    this.mouseoverProperties = mouseoverProperties;
    this.mouseleaveProperties = mouseleaveProperties;
    this.eventHandler = this.eventHandler.bind(this);

    let array = [];
    Array.isArray(targets) ? (array = targets) : array.push(targets);

    array.forEach(target => {
      ['mouseover', 'mouseleave'].forEach(event => {
        document
          .querySelector(target)
          .addEventListener(event, this.eventHandler);
      });
    });
  }

  eventHandler(event) {
    switch (event.type) {
      case 'mouseover':
        this.handleMouseover(event.target);
        return;
      case 'mouseleave':
        this.handleMouseleave(event.target);
        return;
      default:
        return;
    }
  }

  handleMouseover(target) {
    gsap.to(target, this.mouseoverProperties);
  }

  handleMouseleave(target) {
    gsap.to(target, this.mouseleaveProperties);
  }
}

