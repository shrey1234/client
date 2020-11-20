import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth ,Hub} from 'aws-amplify'
import * as AWS from 'aws-sdk';
import { env } from 'process';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(public http:HttpClient ){ 
  }


  ngOnInit() {

    //var AWS = require('aws-sdk');

   
  }
}
