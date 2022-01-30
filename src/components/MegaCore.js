class MegaCore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 380px;
        --height: 380px;
        --version: #882a54;
      }

      .core {
        width: var(--width);
        height: var(--height);
        border: 3px solid #4d4d4d;
        border-radius: 50%;
        background: radial-gradient(circle, #333 59%, #1f1f1f 60%);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        overflow: hidden;
        position: relative;

        box-shadow: 0 10px 0 0px #1a1a1a;
      }

      .slot {
        width: 280px;
        height: 40px;
        background-color: #1a1a1a;
        border-top: 6px solid #111;
        border-radius: 25px;
        transform: translate(0, 100px);
        position: relative;

        display: flex;
        align-items: center;
        box-shadow:
          15px 0px 0 0 #111 inset,
          -15px 0px 0 0 #111 inset;
        background-image: linear-gradient(to bottom, #0000 0% 44%, #000 50%, #0000 56%);
        position: relative;
      }

      .slot::before,
      .slot::after {
        content: "";
        display: inline-block;
        background: #111;
        width: 22px;
        height: 10px;
        transform: translate(12px, -16px);
      }

      .slot::after {
        position: absolute;
        right: 25px;
      }

      .square {
        width: 132px;
        height: 120px;
        background: #1f1f1f;
        border-top: 3px solid #111;
        border-radius: 5px 5px 0 0;
        margin-top: 125px;
      }

      .square .border {
        width: var(--width);
        height: var(--height);
        border: 4px solid #4d4d4d;
        border-radius: 50%;
        background: radial-gradient(circle, transparent 59%, #ebebeb 60%);
        position: absolute;
        top: 0;
        left: 0;
        clip-path: polygon(32% 50%, 66% 50%, 66% 100%, 32% 100%);
      }

      .bit-text-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 70px;
      }

      .bit-text {
        font-family: "NiseSegaNet";
        font-weight: bold;
        font-size: 1.1rem;
        color: #fff;
        transform: translateY(6px);
        background: linear-gradient(to bottom, #fff, #eacc73 50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .indicator-container {
        width: 100px;
        font-family: Arial;
        font-size: 0.55rem;
        display: flex;
        position: absolute;
        bottom: 10px;
        transform: translate(25px, 0);
      }

      .indicator-container > .text {
        padding: 0 5px;
      }

      .power.text {
        transform: rotate(5deg);
      }

      .on.text {
        transform: rotate(-8deg) translateY(-2px);
      }

      .indicator-container .led {
        width: 10px;
        height: 10px;
        border: 0;
        border-radius: 50%;
        background: #180202;
        transition: background 0.5s, box-shadow 0.5s;
      }

      .led.on {
        background: #ff0000;
        box-shadow: 0 0 2px 1px #eb4d4d;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  setLED(state) {
    const led = this.shadowRoot.querySelector(".led");
    if (state) { led.classList.add("on"); } else { led.classList.remove("on"); }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MegaCore.styles}</style>
    <div class="core">
      <div class="slot"></div>
      <div class="square">
        <div class="bit-text-container">
          <div class="bit-text">16-BIT</div>
        </div>
        <div class="border"></div>
        <div class="indicator-container">
            <div class="power text">POWER</div>
            <div class="led"></div>
            <div class="on text">— ON</div>
          </div>
      </div>
    </div>`;
  }
}

customElements.define("mega-core", MegaCore);
