import Component from "@/core/component";
import { observe } from "@/core/observable";
import store from "@/core/store";
import getPath from "@/utils/getPath";
import NewsCard from "./NewsCard";

class NewsWrapper extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "wrapper_block";
  }

  initObservers() {
    observe(() => {
      console.log("옵저버 실행");
      this.render();
    });
  }

  render() {
    this.children = [];
    const path = getPath().replace("/", "");
    const { news } = store.getState();

    news?.[path]
      ?.sort(() => Math.random() - 0.5)
      .map((content, index) => {
        const { category, title, origin, link, largeThumbnail, smallThumbnail } = content;
        const remainDiv18 = index % 18;
        const isLarge = remainDiv18 === 10 || remainDiv18 === 17;

        const newsCard = new NewsCard({
          category,
          title,
          origin,
          link,
          thumbnail: isLarge ? largeThumbnail : smallThumbnail,
          isLarge,
        });
        this.children = [...this.children, newsCard];
      });

    this.isRender = true;
    this.$wrapper.innerHTML = this.template();
    this.componentDidMount();
  }
}
export default NewsWrapper;
