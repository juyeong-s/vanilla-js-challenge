import Component from "@/core/component";

class SideBar extends Component {
  createParent() {
    this.$wrapper = document.createElement("aside");
    this.$wrapper.className = "collect_sidebar";
  }

  template() {
    const MENU = [
      { id: 0, text: "관심사 선택", name: "interest" },
      { id: 1, text: "저장한 콘텐츠", name: "saved" },
    ];
    const { selectedId } = this.state;

    return /* html */ `
      <nav>
        <ul>
          ${MENU.reduce((acc, curr, index) => {
            const { id, text, name } = curr;
            const isSelected = selectedId === index;
            return (
              acc +
              /* html */ `
                <li class="${isSelected ? "selected" : ""}">
                  <div>
                    <button data-id="${id}">
                      <i class="nav_icon ${name}"></i>
                      ${text}
                    </button>
                  </div>
                </li>
              `
            );
          }, "")}
        </ul>
      </nav>
    `;
  }

  addEvent() {
    const $ul = this.$wrapper.querySelector("ul");

    $ul.addEventListener("click", (e) => {
      const { id } = e.target.dataset;
      if (this.state.selectedId !== +id) this.setState({ selectedId: +id });
    });
  }
}
export default SideBar;
