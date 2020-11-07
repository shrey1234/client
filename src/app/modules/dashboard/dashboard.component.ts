import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';
import { Auth ,Hub} from 'aws-amplify'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    

  }

 /* async getuser()
  {
    const user =  await Auth.currentAuthenticatedUser();
    console.log("inside user "+user);
  }*/

}
