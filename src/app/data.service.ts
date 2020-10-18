import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify'
import Amplify, { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private FAKE_SERVICE_URL ="http://localhost:3000"
public username:string='';
public role:string='student';

  constructor(private httpClient: HttpClient) {
    this.getUsername().then(user => {
    this.username=user;
  });

}

  /*public getVideos(){
    return this.httpClient.get(this.FAKE_SERVICE_URL+"/videos");
  }*/

  getUsername()
  {
    let owner=null;
    return Auth.currentAuthenticatedUser({
      bypassCache: false  
    }).then(user =>{
      owner = user.username;
   // console.log(user.username)
    return owner;
   })
    .catch(err => console.log(err));
  }

}