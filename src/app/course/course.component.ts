import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  categoryList = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Languages"}
  ];

  log(x){
    console.log(x);
  }
  
}
