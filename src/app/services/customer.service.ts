import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;
  customers: Customer[]

constructor(private httpClient: HttpClient) { }

  getAllCustomers(){
    this.httpClient.get("").subscribe(respose => {

    },
    (error)=>{
     alert("an error occured")
    })
  }

  addACustomer(){
    this.httpClient.post("",{}).subscribe(respose => {

    },
    (error)=>{
     alert("an error occured")
    })
  }

  updateCustomer(){
    this.httpClient.put("",{}).subscribe(respose => {

    },
    (error)=>{
     alert("an error occured")
    })
  }
}
