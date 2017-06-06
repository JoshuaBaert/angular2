import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  styleUrls: ['./favorite.component.scss'],
  template: `
  <i 
    class="glyphicon"
    (click)="onClick()"
    [ngClass]="isFavorite ? ' glyphicon-star' : ' glyphicon-star-empty'"
    ></i>
  `
})

export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  constructor() { }

  ngOnInit() {
  }

}
