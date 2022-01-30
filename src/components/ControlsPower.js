class ControlsPower extends HTMLElement {
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
        background: #1a1a1a;
        border: 3px solid #4f4f4f;
        border-top-color: #111;
        position: relative;
      }

      .button {
        background-color: #000;
        width: 60%;
        height: 100%;
        background-image:
          radial-gradient(ellipse 50px 30px at 120% 50%, #333 50%, transparent 51%),
          radial-gradient(ellipse 50px 30px at -20% 50%, #333 50%, transparent 51%),
          linear-gradient(#111, #343333, #111);
        border-right: 3px solid #111;
        position: relative;
        left: 0;
        transition: left 0.5s;
      }

      .button::after {
        content: "";
        display: inline-block;
        border-left: 1px solid #770d10;
        width: 1px;
        height: 65%;
        position: absolute;
        top: 6px;
        left: 49%;
      }

      :host(.on) .button {
        left: 36%;
      }

      .power-text {
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
    this.addEventListener("click", () => this.toggle());
  }

  toggle() {
    this.classList.toggle("on");

    const isOn = this.classList.contains("on");
    const event = new CustomEvent("POWER", { detail: isOn, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ControlsPower.styles}</style>
    <div class="container">
      <div class="control">
        <div class="button"></div>
      </div>
      <div class="power-text text">ON    |  |    OFF</div>
      <div class="power-legend text">—— POWER  ——</div>
    </div>`;
  }
}

customElements.define("controls-power", ControlsPower);
