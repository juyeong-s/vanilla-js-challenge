import { router } from "@/App";
import Component from "@/core/component";
import getPath from "@/utils/getPath";

class TabList extends Component {
  createParent() {
    this.$wrapper = document.createElement("ul");
  }

  template() {
    const selectedTab = getPath();
    const { tabs } = this.state;

    return /* html */ `
      ${tabs.reduce((acc, { title, to }) => {
        const isSelected = (!to && !selectedTab) || selectedTab === to;

        return (
          acc +
          /* html */ `
          <li class=${isSelected ? "selected" : ""}>
            <div>
              <a href="${to}">${title}</a>
            </div>
          </li>
        `
        );
      }, "")}
    `;
  }

  addEvent() {
    const nodeList = this.$wrapper.querySelectorAll("a");

    nodeList.forEach((node) => {
      node.addEventListener("click", (e) => {
        e.preventDefault();

        const href = e.target.getAttribute("href");
        router.navigate(href);
      });
    });
  }
}
export default TabList;
