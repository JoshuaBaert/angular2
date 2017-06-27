import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: 'Post title',
    isFavorite: true
  };
  tweet = {
    liked: false,
    totalLikes: 8,
  }
  title = 'App works!';

  onFavoriteChange($event) {
    console.log($event);
  }

  testFunc(test) {
    confirm('yes??');
  }
}
