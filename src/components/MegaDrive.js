import "./MegaCore.js";
import "./MegaBase.js";

class MegaDrive extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --megadrive-shape: polygon(
          0 8%, 6% 0, 94% 0, 100% 8%,
          100% 97%, 97% 100%, 2.5% 100%, 0 97%,
          0 60%, 18% 60%, 18% 10%, 0 10%
        );
      }

      .megadrive-console {
        width: var(--width);
        height: var(--height);
        background: #333333;
        background-image:
          linear-gradient(to bottom, #0006 0%, transparent 20%),
          linear-gradient(to right, transparent 93.5%, #0005 94%),
          linear-gradient(to left, transparent 93.5%, #0005 94%);
        clip-path: var(--megadrive-shape);

        display: flex;
        justify-content: flex-end;
      }

      mega-core {
        transform: translate(-60px, 0);
        z-index: 5;
      }

      mega-base {
        position: absolute;
        bottom: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.addEventListener("POWER", (ev) => {
      this.shadowRoot.querySelector("mega-core").setLED(ev.detail);
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MegaDrive.styles}</style>
    <div class="megadrive-console">
      <mega-core></mega-core>
      <mega-base></mega-base>
    </div>`;
  }
}

customElements.define("mega-drive", MegaDrive);
