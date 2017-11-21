import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsListService {

  getAuthors(){
    return ["Adam Mickiewicz", "Juliusz Słowacki", "TOLKIEN"];
  }


}
