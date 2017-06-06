import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>Courses</h2>
    {{title}}
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'The title of the courses page';
  courses = ['Course 1', 'Course 2', 'Course 3']
}
