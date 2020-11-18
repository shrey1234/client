import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { env } from 'process';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

   s3=new AWS.S3({
    accessKeyId: environment.accessKeyId,
  secretAccessKey: environment.secretAccessKey,
  region:"us-east-1"
  }); 
  dynamo=new AWS.DynamoDB(
    { 
     accessKeyId: environment.accessKeyId,
     secretAccessKey: environment.secretAccessKey,
     region:"us-east-1"
    });
    public docClient:any
    
    public subjectArray: any = {
      M1: 'Mathematics_1',
      M2: 'Mathematics_2',
      M3: 'Mathematics_3',
  
      C1: 'Computers_1',
      C2: 'Computers_2',
      C3: 'Computers_3',
  
      H1: 'Hindi_1',
      H2: 'Hindi_2',
      H3: 'Hindi_3',
  
      S1: 'Science_1',
      S2: 'Science_2',
      S3: 'Science_3',
  
  }
  

  constructor() {
    AWS.config.update({
      accessKeyId: environment.accessKeyId,
      secretAccessKey: environment.secretAccessKey,
      region:"us-east-1"
    });
     this.docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});

   }

  
}
