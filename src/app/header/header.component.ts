import { Component, OnInit } from '@angular/core';
import { auth0SignInButton } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
}

onLoginClick() {
  const URL = "https://schoolweb.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=25eulrabo38ta954clqned59qj&redirect_uri=http://localhost:4200/dashboard";
  window.location.assign(URL);
}

onLogoutClick() {
  const URL="https://schoolweb.auth.us-east-1.amazoncognito.com/logout?client_id=25eulrabo38ta954clqned59qj&logout_uri=http://localhost:4200/";
  window.location.assign(URL);
}

}
