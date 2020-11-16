import { Component, OnInit } from '@angular/core';
import * as AWS from "aws-sdk";
import { env, send } from 'process';
import { callbackify } from 'util';
import { ASTWithName } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
  sub;
  private fileName;
  public file;
  public name;
  public ext;
  public date;
  public course;
  public url;
  public lamdba_url;
  id;

  public accesskey;
  public secretkey;

 
public onName(event){
this.name=event;
}
public onDate(event){
  this.date=event;
  }
  constructor(private httpClient: HttpClient,private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    httpClient: HttpClient;

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id'); 
       console.log(this.id);
   });
  
   this.accesskey=environment.accessKeyId;
   this.secretkey=environment.secretAccessKey;
  }
  ngOnInit(): void {
   
  }
 
  onBack(): void {
    this._router.navigate(['coursePage/'+this.id]);
 }
  public onFileChange(event) {
    const reader = new FileReader();

    this.file=event.target.files[0];
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    }
  }

  public onUpload():void{

    const s3=new AWS.S3({
      accessKeyId: this.accesskey,
    secretAccessKey: this.secretkey,
    region:"us-east-1"
    }); 
    const dynamo=new AWS.DynamoDB(
     { accessKeyId: this.accesskey,
    secretAccessKey: this.secretkey,
    region:"us-east-1"
     });
     AWS.config.update({
      accessKeyId: this.accesskey,
    secretAccessKey:this.secretkey,
    region:"us-east-1"
    });
    const docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});
   
    //this.course="DM";
    this.course=this.id;
    const params = {
      Bucket: "dogs-images-bucket",
      Key: this.course+"/"+this.name, // File name you want to save as in S3
      Body: this.file,
      ACL: 'public-read'
    };
  
  
  console.log("file name is",this.name);
  
  //Uploading files to the bucket
  s3.upload(params, function(err, data) {
      if (err) {
          throw err;
      }
      console.log(" File uploaded successfully. ",data.Location);
  }
  );
  this.url="https://dogs-images-bucket.s3.amazonaws.com/"+this.course+"/"+this.name;
  console.log("u is",this.url);
  console.log(this.name,this.date,this.url);
   
     
  //this.lamdba_url= "https://3kqv8usajd.execute-api.us-east-1.amazonaws.com/Stage";
  this.lamdba_url=environment.lambda_course_assign_url;
       
  this.httpClient.get(this.lamdba_url+'/' +this.course+'/'+this.name+'/'+this.date,{responseType:'json'}).subscribe((data)=>{
        console.log(data);
      });;
    
  
  return alert("Assingment is created");

  
   }




}
