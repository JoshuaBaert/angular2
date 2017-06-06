import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'The title of the courses page';
  courses;

  constructor(courseService: CoursesService){
    this.courses = courseService.getCourses();
  }
}
