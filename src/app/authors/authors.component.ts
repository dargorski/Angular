import { AuthorsListService } from './../services/authors-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent  {
  title= "Authors: "
  authors;

  constructor(service: AuthorsListService) {
      this.authors = service.getAuthors();
   }

   ngOnInit(){

   }
  

}
