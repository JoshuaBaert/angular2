import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `],
  // styleUrls: ['./favorite.component.scss'],
  templateUrl: './favorite.component.html'
})

export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite;

  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }



  constructor() { }

  ngOnInit() {
  }

}
