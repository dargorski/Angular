import { PostService } from './services/post.service';
import { AuthorsListService } from './services/authors-list.service';

import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PanelComponent } from './panel/panel.component';
import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';





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
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent,
    FollowersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FollowersService,
    PostService,
    CoursesService,
    AuthorsListService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
