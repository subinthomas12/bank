import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any

  userDetails: any = {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { username: "amal", acno: 1001, password: "abc1231", balance: 0 },
    1002: { username: "arun", acno: 1002, password: "abc1232", balance: 0 },
    1003: { username: "mega", acno: 1003, password: "abc1233", balance: 0 },

  }

  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { username: uname, acno, password: psw, balance: 0 }
      console.log(userDetails);

      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        // store current user
        this.currentUser = userDetails[acno]["username"]
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  deposit(acno: any, psw: any, amnt: any) {
    // to convert string amnt to int
    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amount
        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  withdraw(acno: any, psw: any, amnt: any) {

    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        if (amount <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amount
          console.log(userDetails);

          return userDetails[acno]["balance"]
        }
        else {
          alert ('insufficent balance')
        }
      }
      else {
        return false
      }
    }
    else{
      return false
    }

  }
    constructor() { }
  }
