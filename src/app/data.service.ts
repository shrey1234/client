import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify'
import Amplify, { API } from 'aws-amplify';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public api_url ="https://2avba4sn0a.execute-api.us-east-1.amazonaws.com/dev/users/"

public username:string='';
public role:string='';

  constructor(private httpClient: HttpClient) {
    this.getUsernameRole();
}
   public getRole(){
     console.log("username "+this.username);
    return this.httpClient.get(this.api_url+this.username,{responseType:'json'});
  }

  getUsernameRole()
  {
    let owner=null;
    return Auth.currentAuthenticatedUser({
      bypassCache: false  
    }).then(user =>{
      owner = user.username;
      this.username=owner;
      this.getRole().subscribe((data)=>{
        console.log(data['Role']['Item']['student_name']); 
        this.role=data['Role']['Item']['student_name'];
    
      });
    return owner;
   })
    .catch(err => console.log(err));
  }

}