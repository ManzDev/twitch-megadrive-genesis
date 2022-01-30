class ControlsVolume extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        display: grid;
        grid-template-areas: "meter control" ". volume";
        grid-template-columns: 45px 1fr;
      }

      .meter {
        grid-area: meter;
        color: #fff;
        white-space: pre;
        font-family: Arial;
        font-size: 0.5rem;
        line-height: 70%;
        text-align: right;
        width: 40px;
        transform: translateY(-5px);
      }

      .control {
        grid-area: control;
        width: 32px;
        height: 105px;
        background: #111;
        border: 3px solid #4f4f4f;
        border-top-color: #111;
        background-image: linear-gradient(to right, #1a1a1a 50%, #111 50%);
        position: relative;
      }

      .control .button {
        width: 100%;
        height: 52px;
        background: linear-gradient(to bottom, #111 0 5%, #1b1b1b 5% 58%, #636363 87%, #111 98%);
        position: absolute;
        bottom: 0;
        transition: bottom 0.5s;
      }

      :host(.on) .button {
        bottom: 53px;
      }

      .control .button::after {
        content: "";
        border-top: 1px solid #951216;
        display: inline-block;
        width: 65%;
        position: absolute;
        top: 6px;
        left: 5px;
      }

      .volume-text {
        grid-area: volume;
        font-family: Arial;
        font-size: 0.5rem;
        color: #fff;
        margin-top: 4px;
        transform: translateX(-5px);
      }

      .volume-text span {
        filter: brightness(0) invert(0.9);
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => this.toggle());
  }

  toggle() {
    this.classList.toggle("on");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ControlsVolume.styles}</style>
    <div class="container">
      <div class="meter">
        10 —
        —
        —
        —
        —
        5 —
        —
        —
        —
        —
        0 —
      </div>
      <div class="control">
        <div class="button"></div>
      </div>
      <div class="volume-text"><span>🎧</span> VOLUME</div>
    </div>`;
  }
}

customElements.define("controls-volume", ControlsVolume);
