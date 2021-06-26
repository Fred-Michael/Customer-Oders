import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
  }

  searchCustomer(){
    console.log("search")
  }

  editCustomer(route: string, id: string){
    console.log("edit")
    this.router.navigate([route]);
  }

  deleteCustomer(){
    console.log("delete")
  }

}
