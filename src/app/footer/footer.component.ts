import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<div class="footer"></div>',
  styles: ['.footer{background: #333; height: 100px; margin:0;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
