import { Component, OnInit } from '@angular/core';
import { faNavicon, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent implements OnInit {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faNavicon;
  }

  ngOnInit(): void {}
}
