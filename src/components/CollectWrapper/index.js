import Component from "@/core/component";
import CollectContainer from "./CollectContainer";
import SideBar from "./SideBar";

class CollectWrapper extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "collect_wrapper";
  }

  initChildren() {
    this.$sideBar = new SideBar({ selectedId: 0 });
    this.$collectContainer = new CollectContainer();
    this.children = [this.$sideBar, this.$collectContainer];
  }
}
export default CollectWrapper;
