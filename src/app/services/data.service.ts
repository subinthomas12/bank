import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any

  userDetails: any = {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transactions: [] },
    1001: { username: "amal", acno: 1001, password: "abc1231", balance: 0, transactions: [] },
    1002: { username: "arun", acno: 1002, password: "abc1232", balance: 0, transactions: [] },
    1003: { username: "mega", acno: 1003, password: "abc1233", balance: 0, transactions: [] },

  }

  constructor() { }


  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { username: uname, acno, password: psw, balance: 0, transactions: [] }
      // console.log(userDetails);

      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        // store current user
        this.currentUser = userDetails[acno]["username"]

        this.currentAcno = acno
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
        // return userDetails[acno]["balance"]
        console.log(userDetails);

        // add transaction data

        userDetails[acno]["transactions"].push(
          {
            Type: "Credit",
            Amount: amnt
          }
        )
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


          // add transaction data

          userDetails[acno]["transactions"].push(
            {
              Type: "Debit",
              Amount: amount
            }
          )

          return userDetails[acno]["balance"]
        }
        else {
          alert('insufficent balance')
        }
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }

  getTransaction(acno: any) {
    return this.userDetails[acno].transactions
  }
}
