import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  videos=[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    /*this.dataService.getVideos().subscribe((data:any[])=>{
    this.videos=data;
  })*/
  }

}
