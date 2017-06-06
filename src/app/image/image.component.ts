import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  styleUrls: ['./image.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <h1 [textContent]="title"></h1>
    
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl"/>
  `,
})
export class ImageComponent implements OnInit {
  title = 'Angular App';
  imageUrl = 'http://lorempixel.com/400/200/';

  constructor() { }

  ngOnInit() {
  }

}
