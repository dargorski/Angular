import { AuthorsListService } from './authors-list.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
