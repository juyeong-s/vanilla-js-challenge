class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.$wrapper = null;
    this.children = [];

    this.createWrapper();
    this.initChildren();
    this.initObserver();
    this.render();
  }

  createWrapper(element) {
    this.$wrapper = document.createElement(element || "div");
  }

  initChildren() {}

  initObserver() {}

  template() {
    return "";
  }

  render() {
    this.isRender = true;
    this.$wrapper.innerHTML = this.template();
    this.componentDidMount();
  }

  componentDidMount() {
    this.appendChildren();
    this.addEvent();
  }

  appendChildren() {
    this.children.forEach((child) => {
      this.$wrapper.appendChild(child.$wrapper);
      child.render();
    });
  }

  addEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this.isRender) this.render();
  }
}
export default Component;
