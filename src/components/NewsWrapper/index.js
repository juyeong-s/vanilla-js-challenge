import Component from "@/core/component";
import NewsCard from "./NewsCard";

class NewsWrapper extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "wrapper_block";
  }

  /* TODO: 전역 store에서 가져오기 */
  render() {
    this.state?.contents?.[path]
      ?.sort(() => Math.random() - 0.5)
      .map((content, index) => {
        const {
          category,
          title,
          origin,
          link,
          largeThumbnail,
          smallThumbnail,
        } = content;
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
