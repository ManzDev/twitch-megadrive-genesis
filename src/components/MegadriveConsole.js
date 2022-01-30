import "./MegaDrive.js";
import "./VentilationGrill.js";

class MegadriveConsole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 625px;
        --height: 475px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        position: relative;
      }

      mega-drive,
      ventilation-grill {
        position: absolute;
      }

      ventilation-grill {
        transform: translate(10px, 47px);
      }

      ventilation-grill {
        z-index: 5;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MegadriveConsole.styles}</style>
    <div class="container">
      <mega-drive></mega-drive>
      <ventilation-grill></ventilation-grill>
    </div>`;
  }
}

customElements.define("megadrive-console", MegadriveConsole);
