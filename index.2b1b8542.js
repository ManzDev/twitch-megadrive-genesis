const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))v(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&v(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function v(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};x();class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}setLED(i){const o=this.shadowRoot.querySelector(".led");i?o.classList.add("on"):o.classList.remove("on")}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
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
            <div class="on text">\u2014 ON</div>
          </div>
      </div>
    </div>`}}customElements.define("mega-core",a);class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.addEventListener("click",()=>this.toggle())}toggle(){this.classList.toggle("on")}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="meter">
        10 \u2014
        \u2014
        \u2014
        \u2014
        \u2014
        5 \u2014
        \u2014
        \u2014
        \u2014
        \u2014
        0 \u2014
      </div>
      <div class="control">
        <div class="button"></div>
      </div>
      <div class="volume-text"><span>\u{1F3A7}</span> VOLUME</div>
    </div>`}}customElements.define("controls-volume",s);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.addEventListener("click",()=>this.toggle())}toggle(){this.classList.toggle("on");const i=this.classList.contains("on"),o=new CustomEvent("POWER",{detail:i,bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="control">
        <div class="button"></div>
      </div>
      <div class="power-text text">ON    |  |    OFF</div>
      <div class="power-legend text">\u2014\u2014 POWER  \u2014\u2014</div>
    </div>`}}customElements.define("controls-power",n);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
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
      <div class="reset-text text">\u2014\u2014 RESET  \u2014\u2014</div>
    </div>`}}customElements.define("controls-reset",d);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
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
    </div>`}}customElements.define("mega-controls",l);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="base">
        <mega-controls></mega-controls>
        <div class="brand">
          <div class="product">MEGA DRIVE</div>
          <div class="brandname">SEGA</div>
        </div>
      </div>
    </div>`}}customElements.define("mega-base",c);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.addEventListener("POWER",i=>{this.shadowRoot.querySelector("mega-core").setLED(i.detail)})}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="megadrive-console">
      <mega-core></mega-core>
      <mega-base></mega-base>
    </div>`}}customElements.define("mega-drive",p);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
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
    </div>`}}customElements.define("ventilation-grill",h);class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${g.styles}</style>
    <div class="container">
      <mega-drive></mega-drive>
      <ventilation-grill></ventilation-grill>
    </div>`}}customElements.define("megadrive-console",g);
