import Component from "@/core/component";
import { observe } from "@/core/observable";
import store, { dispatch } from "@/core/store";
import { interestList } from "@/mocks/interest";

class InterestCardList extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "interest_list";
  }

  initObservers() {
    observe(() => {
      console.log("옵저버 실행");
      this.render();
    });
  }

  template() {
    const { interests } = store.getState();

    return /* html */ `
      <ul>
        ${interestList.reduce((acc, curr, index) => {
          const { id, text, type } = curr;
          return (
            acc +
            /* html */ `
              <li data-id="${id}">
                <div>
                  <button class="${interests.includes(index) ? "selected" : ""}">
                    <i class="icon ${type}"></i>
                    ${text}
                    <span class="blind"></span>
                  </button>
                </div>
              </li>`
          );
        }, "")}
      </ul>
    `;
  }

  addEvent() {
    const $lis = this.$wrapper.querySelectorAll("li");

    $lis.forEach(($li) => {
      $li.addEventListener("click", (e) => {
        const { id } = e.currentTarget.dataset;
        const idNum = +id;

        const { interests } = store.getState();
        const idIdx = interests.indexOf(idNum);

        const newState =
          idIdx !== -1 ? interests.filter((_, idx) => idIdx !== idx) : [...interests, idNum];

        dispatch({ type: "SELECT_INTEREST", interests: newState });
      });
    });
  }
}
export default InterestCardList;
