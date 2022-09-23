import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar color="primary">
  <span>Inteligencia de negocios</span>
</mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
