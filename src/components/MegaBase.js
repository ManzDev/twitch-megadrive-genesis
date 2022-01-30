import "./MegaControls.js";

class MegaBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        width: var(--width);
        height: 160px;

        display: flex;
        justify-content: center;
      }

      .base {
        width: calc(var(--width) - 40px);
        height: 100%;
        background: #333333;
        background-image: linear-gradient(to bottom, #1a1a1a 10px, transparent 10px);
        clip-path: polygon(0 6%, 3% 0, 97% 0, 100% 6%, 100% 100%, 0 100%);
      }

      .brand {
        position: absolute;
        bottom: 15px;
        right: 32px;
        display: flex;
        align-items: flex-end;
      }

      .brand .product {
        font-family: "NiseMegaDriveEU";
        font-size: 0.61rem;
        color: #fff;
        padding-right: 1em;
        text-shadow: 2px 2px 0 #222;
      }

      .brand .brandname {
        font-family: "NiseSega";
        font-size: 1.25rem;
        color: #fff;
        text-shadow: 2px 2px 0 #222;
      }

      mega-controls {
        display: inline-block;
        transform: translate(13px, 5px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MegaBase.styles}</style>
    <div class="container">
      <div class="base">
        <mega-controls></mega-controls>
        <div class="brand">
          <div class="product">MEGA DRIVE</div>
          <div class="brandname">SEGA</div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("mega-base", MegaBase);
