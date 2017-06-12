import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  template: `    
    <div *ngIf="isLoading">
      <i class="fa-spinner fa-spin fa-3x"></i>
    </div>
    <i class="fa-spinner fa-spin fa-3x"></i>
  `,
  styles: [`
    .test {
      
    }
  `],
})
export class PostComponent implements OnInit {
  isLoading = true;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => {
        this.isLoading = false;
        console.log(data);
      });
  }

}
