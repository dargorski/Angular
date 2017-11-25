import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("favorite changed: ", eventArgs);
  }
  tweet = {
    body: "",
    likesCount: 10,
    isLiked: true
  }

  courses = [];

  viewMode = 'something';

  courses2 = [
    {id : 1, name: 'course1'},
    {id : 2, name: 'course2'},
    {id : 3, name: 'course3'}
  ];

  onAdd(){
    this.courses2.push({ id: 4, name: 'course4'});
    console.log("i clicked :/");
  }

  onRemove(course){
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index, 1);
  }
  onChange(course){
    course.name = "UPDATED";
  }

  courses3;

  loadCourses(){
    this.courses3 = [
      {id : 1, name: 'course1'},
      {id : 2, name: 'course2'},
      {id : 3, name: 'course3'}
    ];
  }
  trackCourse(index, course){
     return course ? course.id : undefined;
  }

  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: null
    }
  }

}
