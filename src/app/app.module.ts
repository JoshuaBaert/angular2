import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Services
import {CoursesService} from './courses/courses.service';


// Directives
import { AutoGrowDirective } from './directives/auto-grow.directive';


// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ImageComponent } from './image/image.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AutoGrowDirective,
    ImageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
