import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  template: `    
    <div>
      test
    </div>
  `,
  styles: [`
    .test {
      
    }
  `],
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => console.log(data));
  }

}
