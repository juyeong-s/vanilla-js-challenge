import Component from "./core/component";

class App extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.id = "app";
  }
}

export default App;
