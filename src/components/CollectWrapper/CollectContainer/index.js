import Component from "@/core/component";
import InterestCardList from "./InterestCardList";
import Title from "./Title";

class CollectContainer extends Component {
  createParent() {
    this.$wrapper = document.createElement("section");
    this.$wrapper.className = "collect_container";
  }

  initChildren() {
    this.$title = new Title({ type: "bookmark" });
    this.$interestCardList = new InterestCardList({ selectedIds: [] });
    this.children = [this.$title, this.$interestCardList];
  }
}
export default CollectContainer;
