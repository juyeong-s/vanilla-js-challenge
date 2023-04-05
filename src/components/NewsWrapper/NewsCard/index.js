import Component from "@/core/component";

class NewsCard extends Component {
  createParent() {
    this.$wrapper = document.createElement("section");

    const { isLarge } = this.state;
    this.$wrapper.className = `news_single_item${isLarge ? "" : "_small"}`;
  }

  template() {
    const { category, title, origin, thumbnail, link } = this.state;

    const thumbnailTemplate = () => {
      if (!thumbnail) return /* html */ `<span class="img_default"></span>`;
      return /* html */ `<img src="${thumbnail}" />`;
    };

    return /* html */ `
      <div>
        <a href="${link}">
          <div class="thumb">
            ${thumbnailTemplate()}
          </div>
          <ul class="info">
            <li>${category}</li>
            <li>${origin}</li>
          </ul>
          <div class="title">${title}</div>
        </a>
      </div>

      <div class="item_btns item_bottom">
        <div>
          <button type="button" class="btn_bookmark"></button>
        </div>
        <button type="button" class="btn_bookmark clicked"></button>
      </div>
    `;
  }
}

export default NewsCard;
