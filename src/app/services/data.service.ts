import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';
import { BadInput } from '../common/validators/bad-input';


@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  create(resource){
    //return Observable.throw(new AppError());

    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);    
  } 

  update(resource){
    return this.http.put(this.url + '/' + resource.id, resource)
        .map(response=>response.json())
        .catch(this.handleError);
  }

  delete(id){
   // return Observable.throw(new AppError());

    return this.http.delete(this.url + '/' +id)
        .map(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response){
      if(error.status === 404)
        return Observable.throw(new NotFoundError(error));

      if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));
        
      return Observable.throw(new AppError(error));
  }
}
