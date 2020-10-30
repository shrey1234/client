import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
  selectedFile: File
  constructor(public dialogRef: MatDialogRef<ProfilepicComponent>) { }

  ngOnInit(): void {
  }
 
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
  }

  onUpload() {
    // upload code goes here
  }
}
