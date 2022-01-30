class ControlsReset extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        width: 80px;
      }

      .control {
        width: 75px;
        height: 32px;
        background: #111;
        border: 3px solid #4f4f4f;
        border-top-color: #111;
        position: relative;
      }

      .button {
        height: 100%;
        width: 100%;
        background: white;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(7, 1fr);
        gap: 8px 4px;
        padding: 8px;
        box-sizing: border-box;
      }

      .button:active {
        padding-top: 9px;
        padding-left: 9px;
        background: #ccc;
      }

      .button > div {
        width: 4px;
        height: 4px;
        background: #888;
        border-radius: 50%;
      }

      .reset-text {
        white-space: pre;
        padding-top: 5px;
      }

      .text {
        font-family: Arial;
        font-size: 0.5rem;
        color: #aaa;
        text-align: center;
        line-height: 130%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ControlsReset.styles}</style>
    <div class="container">
      <div class="control">
        <div class="button">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="reset-text text">—— RESET  ——</div>
    </div>`;
  }
}

customElements.define("controls-reset", ControlsReset);
