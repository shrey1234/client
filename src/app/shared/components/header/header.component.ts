import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService} from '../../../data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfilepicComponent } from '../../../modules/profilepic/profilepic.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public dataService : DataService,public matDialog: MatDialog) {

   }

  ngOnInit() {
    console.log(this.dataService.username);
    console.log(this.dataService.role);
   }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
   // dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ProfilepicComponent, dialogConfig);
  }

}
