import { AuthorsListService } from './authors-list.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PanelComponent } from './panel/panel.component';
import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent
    
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
