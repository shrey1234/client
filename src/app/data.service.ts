import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Auth, auth0SignInButton } from 'aws-amplify'
import Amplify, { API } from 'aws-amplify';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public lambda_role_url ="https://2avba4sn0a.execute-api.us-east-1.amazonaws.com/dev/role/"
public username:string='';
public role:string='';
public email:string='';

  constructor(private httpClient: HttpClient) {
    this.getUsernameRole();
    this.getEmail();
}
   public getRole()
   {
      this.httpClient.get(this.lambda_role_url+this.username,{responseType:'json'}).subscribe((data)=>{
        const rr=data['role'];
        this.role=rr;
        localStorage.setItem('role', this.role);
      });
  }

  getUsernameRole()
  {
    return Auth.currentAuthenticatedUser({
      bypassCache: true
    }).then(user =>{
     this.username=user.username;
     localStorage.setItem('username', this.username);

     this.getRole();
      
   })
    .catch(err => 
      console.log(err)
      );
  }

  getEmail()
  {
    Auth.currentUserInfo().then((userinfo)=>{
      const { attributes = {} } = userinfo;
      this.email=attributes['email'];
      localStorage.setItem('email', this.email);

    })
  }

}