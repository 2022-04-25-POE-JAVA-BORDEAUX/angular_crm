import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public version!: number;

  constructor(private versionService: VersionService) {
    this.versionService.version$.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {}
}
