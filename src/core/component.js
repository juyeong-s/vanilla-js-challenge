class Component {
  constructor(props = {}) {
    this.state = props;
    this.$wrapper = null;
    this.children = [];
    this.createParent();
    this.initChildren();
    this.render();
  }

  createParent() {
    this.$wrapper = document.createElement("div");
  }

  initChildren() {}

  template() {
    return "";
  }

  render() {
    this.isRender = true;
    this.$wrapper.innerHTML = this.template();
    this.componentDidMount();
  }

  componentDidMount() {
    this.appendChild();
    this.renderChildren();
    this.addEvent();
  }

  appendChild() {
    this.children.forEach((child) => this.$wrapper.appendChild(child.$wrapper));
  }

  renderChildren() {
    this.children.forEach((child) => child.render());
  }

  addEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this.isRender) this.render();
  }
}
export default Component;
