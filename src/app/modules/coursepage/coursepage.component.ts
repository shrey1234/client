import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as AWS from "aws-sdk";
import { send } from 'process';
import { callbackify } from 'util';
import { ASTWithName } from '@angular/compiler';


@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  id;
  public lambda_course_assign_url ="https://3kqv8usajd.execute-api.us-east-1.amazonaws.com/Stage/"
  // public assignment: Object = {
  //   due_date: null,
  //   url: null,
  //   Assignment_name: null,
    
  // };
 //   public assignment:{ due_date: string, name: string , Assignment_name:string}[]=[];

 assignment:any = [];


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private httpClient: HttpClient) { }

    sub;
    private fileName;
    public file;
   // public fileType;/
    public name;
    public ext;
    public date;
    public course;
    public url;
    public lamdba_url;
    //public httpClient:HttpClient;
   
  public onName(event){
  this.name=event;
  }
  public onDate(event){
    this.date=event;
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
        accessKeyId: "AKIAIHMDWDGHIWJIOMNQ",
      secretAccessKey: "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",
      region:"us-east-1"
      }); 
      const dynamo=new AWS.DynamoDB(
       { accessKeyId: "AKIAIHMDWDGHIWJIOMNQ",
      secretAccessKey: "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",
      region:"us-east-1"
       });
       AWS.config.update({
        accessKeyId: "AKIAIHMDWDGHIWJIOMNQ",
      secretAccessKey: "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",
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
     
       
         this.lamdba_url= "https://3kqv8usajd.execute-api.us-east-1.amazonaws.com/Stage";
         
        this.httpClient.get(this.lamdba_url+'/' +this.course+'/'+this.name+'/'+this.date,{responseType:'json'}).subscribe((data)=>{
          console.log(data);
        });;
      
    
    return alert("  Assingment is created ");
 
    
     }

  ngOnInit(): void {
    httpClient: HttpClient;

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id'); 
       console.log(this.id);
       this.getAssignmentList();
      
   });
  }
  public getAssignmentList()
   {
      this.httpClient.get(this.lambda_course_assign_url+this.id,{responseType:'json'}).subscribe((data)=>{
       console.log(data);
       for (let index in data) {
       
          this.assignment.push({due_date: data[index]['due_date'],url:data[index]['url'],Assignment_name: data[index]['Assignment_name']});

       }
       console.log(this.assignment);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['course']);
  }

}
