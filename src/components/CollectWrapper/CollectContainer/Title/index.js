import Component from "@/core/component";

class Title extends Component {
  createParent() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "title_wrap";
  }

  template() {
    const { type } = this.state;

    if (type === "interest")
      return /* html */ `
        <h2>관심사 선택</h2>
    
        <p class="interest_notice">
          <i class="icon"></i>
          <strong>관심사를 선택</strong>해주세요! 선택한 관심사의 최신 이슈를&nbsp;
          <strong>내 피드에서 확인</strong>하실 수 있습니다.
        </p>
      `;

    if (type === "bookmark")
      return /* html */ `
        <h2>저장한 콘텐츠</h2>
      `;
  }
}
export default Title;
