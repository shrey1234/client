import { Component, OnInit, ɵgetInjectableDef } from '@angular/core';
import { Auth } from 'aws-amplify'
import Amplify, { API } from 'aws-amplify';
import { DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {



  constructor(public dataService : DataService) { 
  }

  ngOnInit(): void {
   
    
  }
   
    

}
