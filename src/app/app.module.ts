import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';



// Services
import { CoursesService } from './courses/courses.service';
import { PostService } from './post/post.service';


// Directives
import { AutoGrowDirective } from './directives/auto-grow.directive';


// Pipes
import { SummaryPipe } from './pipe/summary.pipe';


// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ImageComponent } from './image/image.component';
import { ButtonComponent } from './button/button.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { PipeComponent } from './pipe/pipe.component';
import { PostComponent } from './post/post.component';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AutoGrowDirective,
    ImageComponent,
    ButtonComponent,
    FavoriteComponent,
    LikeComponent,
    PipeComponent,
    SummaryPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
