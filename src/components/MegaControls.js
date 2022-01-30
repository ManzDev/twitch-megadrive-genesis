import "./ControlsVolume.js";
import "./ControlsPower.js";
import "./ControlsReset.js";

class MegaControls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 190px;
        --height: 145px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #333333;

        display: grid;
        grid-template-areas: "volume power" "volume reset";
        grid-template-columns: 93px;
        transform: translateY(5px);
      }

      .container > .volume { grid-area: volume; }
      .container > .power { grid-area: power; }
      .container > .reset { grid-area: reset; }

      .container::before,
      .container::after {
        content: "";
        display: inline-block;
        background: #1a1a1a;
        width: 10px;
        height: 100%;
        position: absolute;
        clip-path: polygon(0 0, 100% 0, 100% 100%);
        transform: translateY(-10px);
      }

      .container::after {
        right: 0;
        transform: translateY(-10px) scaleX(-1);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MegaControls.styles}</style>
    <div class="container">
      <div class="volume">
        <controls-volume></controls-volume>
      </div>
      <div class="power">
        <controls-power></controls-power>
      </div>
      <div class="reset">
        <controls-reset></controls-reset>
      </div>
    </div>`;
  }
}

customElements.define("mega-controls", MegaControls);
