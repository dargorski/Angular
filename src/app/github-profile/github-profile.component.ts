import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private router: Router) { }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    })
  }
  
  
  /*ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // if we are 100% sure that we have to go back like in ours example to the previous page we can use snapshot and destroy our DOM
    // in case like we are clicking 'next' button to view another 'transaction' we need to tuse observable 
    //this.route.paramMap
     // .subscribe(params => {
     //   let id = +params.get('id');
     //   console.log(id);
      
  }*/

}
