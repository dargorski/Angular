import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  
    getAuthors(){
      return ["Adam Mickiewicz", "Juliusz Słowacki", "TOLKIEN"];
    }
}