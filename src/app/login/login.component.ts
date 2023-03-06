import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking partner"
  data1="enter your ac number"

  // acno=""
  // or
  acno:any

  psw:any

  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc1231",balance:0},
    1002:{username:"arun",acno:1002,password:"abc1232",balance:0},
    1003:{username:"mega",acno:1003,password:"abc1233",balance:0},

  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    //alert('login worked')
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('incorrect acno')
    }
  }

acnoChange(event:any){
  this.acno=event.target.value
  console.log(event.target.value);
}  

pswchange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
}

}
