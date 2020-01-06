import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";

@Component({
  tag: "pms-accordion",
  styleUrl: "pms-accordion.scss",
  shadow: true
})
export class PmsAccordion {
  @State()
  toggle = false;

  @Event()
  onToggle: EventEmitter;

  @Prop()
  label: string;

  @Prop()
  description: string;

  @Prop()
  width: string;

  @Prop()
  color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div>
        <button class="accordion"
                style={{
                  width: this.width,
                  backgroundColor: this.color
                }}
                onClick={() => this.toggleComponent()}>
          {this.label}
          {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>
        <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
             style={{ width: this.width }}>
          <p>{this.description}</p>
        </div>
      </div>
    );
  }
}
