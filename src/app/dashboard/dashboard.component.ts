import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'
import Amplify, { API } from 'aws-amplify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  params = {
    response: true
  }
  constructor() { }

  ngOnInit(): void {
  
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => 
    console.log(user.username)
    )
  .catch(err => console.log(err));
  
  }

}
