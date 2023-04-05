import Component from "@/core/component";

class BookMarkCardList extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "item_list";
  }

  template() {
    return /* html */ `
      <ul>
        <li>
          <div class="single_item">
            <div>
              <a href="#">
                <div class="thumb">
                  <img src="#" />
                </div>
                <ul class="info">
                  <li>TV</li>
                  <li>출처</li>
                </ul>
                <div class="title">제목</div>
              </a>
            </div>
            
            <div class="item_btns item_bottom">
              <div>
                <button type="button" class="btn_bookmark clicked"></button>
                <button type="button" class="btn_bookmark"></button>
              </div>
            </div>
          </div>
        </li>
      </ul>`;
  }
}
export default BookMarkCardList;
