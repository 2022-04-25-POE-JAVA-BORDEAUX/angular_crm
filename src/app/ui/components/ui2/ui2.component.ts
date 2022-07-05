import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss'],
})
export class Ui2Component implements OnInit {
  public close: boolean;
  
  constructor() {
    this.close = true;
  }
  ngOnInit(): void {}

  public toggle(): void {
    this.close = !this.close;
  }
}
