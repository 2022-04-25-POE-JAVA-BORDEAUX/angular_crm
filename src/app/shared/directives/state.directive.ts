import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() public appState!: string;
  @HostBinding('class') public tdClassName!: string;

  constructor() {}

  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
