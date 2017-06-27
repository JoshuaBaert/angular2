

import { Router, RouterModule } from '@angular/router';

import {CoursesComponent} from './courses/courses.component';
import {ImageComponent} from './image/image.component';

export const routing = RouterModule.forRoot([
  {path: 'courses', component: CoursesComponent},
  {path: 'image', component: ImageComponent},
]);
