import Header from "@/components/Header/index.js";
import MainSection from "@/components/MainSection.js";
import Component from "@/core/component.js";
import getPath from "@/utils/getPath";
import "public/style.css";
import { ROUTES, SERVER_URL } from "./constants";
import createRouter from "./core/router";

export const router = createRouter();

class App extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.id = "app";
  }

  initChildren() {
    this.$header = new Header();
    this.$mainSection = new MainSection();
    this.children = [this.$header, this.$mainSection];

    /* initChildren에서 해야할 역할이 맞는지 고민해보기 */
    const renderChildren = () => {
      this.$header.render();
      this.$mainSection.render();
    };

    router
      .addRoute(ROUTES.FEED, renderChildren)
      .addRoute(ROUTES.POPULARITY, renderChildren)
      .addRoute(ROUTES.INVESTMENT, renderChildren)
      .addRoute(ROUTES.NEWS, renderChildren)
      .addRoute(ROUTES.TV, renderChildren)
      .addRoute(ROUTES.ENTERTAINMENT, renderChildren)
      .addRoute(ROUTES.SPORTS, renderChildren)
      .addRoute(ROUTES.BIZ, renderChildren)
      .addRoute(ROUTES.COLLECT, renderChildren);
  }

  addEvent() {
    const tab = getPath();
    if (tab === ROUTES.COLLECT) return;

    fetch(SERVER_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.$mainSection.setState({ contents: data });
      });
  }
}

export default App;
