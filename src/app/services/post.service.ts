import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post));
  } 

  updatePost(post){
    return this.http.put(this.url + '/' + post.id, post)
  }

  deletePost(id){
    return this.http.delete(this.url + '/' +id)
      .catch((error: Response) =>{
        Observable.throw

      });
  }
}
