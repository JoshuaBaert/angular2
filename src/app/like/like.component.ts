import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
    <i class="glyphicon glyphicon-heart"
      [ngClass]="!liked ? 'gray' : 'pink'"
      (click)="onClick()"
    ></i>
    <span>{{totalLikes}}</span>
  `,
  styles: [`
    .gray {
      color: #ccc;
      cursor: pointer;
    }
    .pink {
      color: deeppink;
      cursor: pointer;
    }
  `]
})
export class LikeComponent implements OnInit {
  @Input() liked;
  @Input() totalLikes;

  onClick() {
    this.liked = !this.liked;
    if(this.liked) ++this.totalLikes;
    else --this.totalLikes;
  }

  constructor() { }

  ngOnInit() {
  }

}
