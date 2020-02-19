import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div class="header"></div>',
  styles: ['.header{background: #1e88e5; height: 50px; margin-bottom:15px;}']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
