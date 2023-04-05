import CollectWrapper from "@/components/CollectWrapper";
import NewsWrapper from "@/components/NewsWrapper";
import { ROUTES } from "@/constants";
import Component from "@/core/component.js";
import getPath from "@/utils/getPath";

class MainSection extends Component {
  createParent() {
    this.$wrapper = document.createElement("main");
  }

  initChildren() {
    this.$collectWrapper = new CollectWrapper();
    this.$newsWrapper = new NewsWrapper();
    this.children = [this.$newsWrapper];
  }

  appendChild() {
    const wrapperBlock = this.$wrapper.querySelector(".content_wrapper");
    const tab = getPath();

    if (tab === ROUTES.COLLECT) {
      wrapperBlock.appendChild(this.$collectWrapper.$wrapper);
    } else {
      wrapperBlock.appendChild(this.$newsWrapper.$wrapper);
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this.isRender) {
      this.render();
      this.$newsWrapper.setState(this.state);
    }
  }

  template() {
    return /* html */ `
      <div class="content_wrapper">
      </div>
    `;
  }
}
export default MainSection;
