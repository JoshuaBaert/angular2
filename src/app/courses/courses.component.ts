import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>Courses</h2>
    {{title}}
  `,
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'The title of the courses page';
}
