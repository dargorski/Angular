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
}
