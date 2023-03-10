import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  user: any

  acno: any
  psw: any
  amnt: any

  acno1:any
  psw1:any
  amnt1:any

  constructor(private ds: DataService) {

    //access data from dashboard and store in a variable
    this.user = this.ds.currentUser
  }

  deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`your ac has been credited with amount ${amnt} and the avilable balance is ${result}`)
    }
    else{
      alert(`incorrect acno or password`)
    }
  }

  withdraw(){
    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1
    const result = this.ds.withdraw(acno, psw, amnt)

    if (result) {
      alert(`your ac has been depited with amount ${amnt} and the avilable balance is ${result}`)
    }
    else{
      alert(`incorrect acno or password`)
    }

  }

}
