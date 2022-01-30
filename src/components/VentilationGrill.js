class VentilationGrill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 115px;
        --height: 238px;
        --shadow-color: #111;
        --grill-color: #333;
      }

      .container {
        width: var(--width);
        height: var(--height);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(14, 9px);
        gap: 7px 0;
        padding: 5px 0;
        background: #1a1a1a;
        border-radius: 0 8px 8px 0;
        border-top: 5px solid var(--shadow-color);
        box-sizing: border-box;
      }

      .line {
        width: 95%;
        background: var(--grill-color);
        background-image: linear-gradient(to right, #0004 30px, transparent 30px);
        transform: translate(-5px, 0);
      }

      .line::after {
        content: "";
        display: inline-block;
        width: 95%;
        height: 3px;
        background: var(--shadow-color);
        transform: translate(5px, -2px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${VentilationGrill.styles}</style>
    <div class="container">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>`;
  }
}

customElements.define("ventilation-grill", VentilationGrill);
