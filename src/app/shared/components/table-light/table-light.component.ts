import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit, OnChanges {
  @Input() public headers!: string[];

  constructor() {
    // console.log(this.headers);
    // console.log(this.collection);
  }

  ngOnChanges(): void {
    // console.log(this.headers);
    // console.log(this.collection);
  }

  ngOnInit(): void {
    // console.log(this.headers);
    // console.log(this.collection);
  }
}
