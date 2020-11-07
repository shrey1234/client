import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dataService : DataService) { 
    console.log("username "+this.dataService.username);
    console.log("role "+this.dataService.role);
    console.log("email "+this.dataService.email);
  }

  ngOnInit(): void {
  }

}
