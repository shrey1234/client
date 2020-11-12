import { Component, NgZone } from '@angular/core';
import { ICustomWindow, WindowRefService } from 'src/app/service/window-ref.service';
import { DataService} from '../../data.service';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  private _window: ICustomWindow;
  public rzp: any;
  public username: string="";
  public lambda_fees_update: "https://3kqv8usajd.execute-api.us-east-1.amazonaws.com/Stage/";

  public options: any = {
    key: 'rzp_test_fRTTnrqA3tR3wZ', // add razorpay key here
    name: 'Fees payment',
    description: 'Admission',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'Fees Payment',
      email: this.dataservice.email, // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
    private winRef: WindowRefService,
    public dataservice: DataService,
    private httpClient: HttpClient
  ) {
    this._window = this.winRef.nativeWindow;
    this.username=localStorage.getItem('username');

  }

  initPay(): void {
    //localStorage.clear();
    localStorage.removeItem("rzp_device_id");
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  //  console.log(localStorage.getItem('rzp_device_id'));
   // console.log(localStorage.getItem('rzp_preffered_instruments'));
    //console.log(localStorage.getItem('onComplete'));
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      console.log("payment success");

      //call lambda url to update fees to 0 as it is paid
      this.feesUpdate();
    });
  }

  public feesUpdate()
   {
      this.httpClient.get(this.lambda_fees_update+this.username,{responseType:'json'}).subscribe((data)=>{
      //  const rr=data['role'];
      //  this.role=rr;
       // localStorage.setItem('role', this.role);
      });
  }

}
