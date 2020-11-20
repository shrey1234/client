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
  region:environment.region
  }); 
  dynamo=new AWS.DynamoDB(
    { 
     accessKeyId: environment.accessKeyId,
     secretAccessKey: environment.secretAccessKey,
     region:environment.region
    });
    public docClient:any
    
    public subjectArray: any = {
      M1: 'Mathematics_1',
      M2: 'Mathematics_2',
      M3: 'Mathematics_3',
  
      C1: 'Computers_1',
      C2: 'Computers_2',
      C3: 'Computers_3',
  
      H1: 'History_1',
      H2: 'History_2',
      H3: 'History_3',
  
      S1: 'Science_1',
      S2: 'Science_2',
      S3: 'Science_3',
  
  }
  

  constructor() {
    AWS.config.update({
      accessKeyId: environment.accessKeyId,
      secretAccessKey: environment.secretAccessKey,
      region:environment.region
    });
     this.docClient = new AWS.DynamoDB.DocumentClient({region:environment.region});   
   }

   createUserInCognito(username,email)
   {
    AWS.config.update({
      accessKeyId: environment.sh_accessKeyId,
      secretAccessKey: environment.sh_secretAccessKey,
      region:environment.region});

    const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
        apiVersion: "2016-04-19",
        region: environment.region
      });
      
    var poolData = {
          UserPoolId: environment.userpoolid,
          Username: username,
          DesiredDeliveryMediums: ["EMAIL"],
          TemporaryPassword: environment.temp_password,
          UserAttributes: [
            {
              Name: "email",
              Value: email
            },
            {
              Name: "email_verified",
              Value: "true"
            }
          ]
        };
    COGNITO_CLIENT.adminCreateUser(poolData, (error, data) => {
          console.log(error);
          console.log(data);
    });
   }

  
}
