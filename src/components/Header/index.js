import Component from "@/core/component.js";
import { TABS } from "@/mocks/tabs";
import TabList from "./TabList";

class Header extends Component {
  createParent() {
    this.$wrapper = document.createElement("header");
    this.$wrapper.className = "wrapper";
  }

  initChildren() {
    this.$tabList = new TabList({ tabs: TABS });
    this.children = [this.$tabList];
  }

  appendChild() {
    const tabs = this.$wrapper.querySelector(".tabs");
    tabs.appendChild(this.$tabList.$wrapper);
  }

  template() {
    return /* html */ `
      <div class="wrap">
        <div class="inner">
          <nav class="tabs">
          </nav>
        </div>
      </div>
    `;
  }
}

export default Header;
