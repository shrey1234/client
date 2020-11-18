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
    

  constructor() {
    AWS.config.update({
      accessKeyId: environment.accessKeyId,
      secretAccessKey: environment.secretAccessKey,
      region:"us-east-1"
    });
     this.docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});

   }

  
}
