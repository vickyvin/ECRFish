import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Product } from '../tab2/tab2.page';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {

  constructor(private formbuilder: FormBuilder, private common: CommonService,
     private _router: Router, private db:Firestore) { }
  totalAmount: any = 0;
  addressData: any;
  myorders: Orders[] = []
  form: FormGroup;
  isBuyNowDisabled:boolean = true
  isNewAddress:boolean=false;
  ngOnInit() {
   
    /* this.addressData = [{
      Id: 1,
      Name: "Avinash",
      PhoneNumber: "8122143987",
      Emailid: "avi@gmail.com",
      Address: "8/110,Mittanamalli,Avadi,Chennai-600055"
    },
    {
      Id: 2,
      Name: "Bala",
      PhoneNumber: "8122143987",
      Emailid: "avi@gmail.com",
      Address: "8/110,Mittanamalli,Avadi,Chennai-600055"
    }] */


   /*  this.api.getCustAddress(1).subscribe(x=>{
      this.addressData=x;
      console.log('cust address',x);
    }) */


    this.common.totalAmount.subscribe(res => {
      this.totalAmount = res;
    });
    this.form = this.formbuilder.group({
      CustomerName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Email: ['', Validators.required],
      City: ['', Validators.required],
    });
  }
  addressChange(address){
    this.isBuyNowDisabled = false;
  }
  BuyNowClick() {
    let products;
    let order: Orders = new Orders();
    alert("Saved successfully")
    this.common.cartdetails.subscribe(t => {
      products = t
    })
    order.product = products
    order.orderID = "1";
    order.orderDate = new Date().toISOString()
    order.status = "Booked";
    order.total = this.totalAmount;
    this.myorders.push(order)
    //this.storage.set('orders', this.myorders);
    this._router.navigate(["home/myaccount/myorders"])
  }
  AddAddress(form:FormGroup){
    if(form.valid){
      //this.api.saveCustAddress(form.value).subscribe(obj=>console.log(obj))

    }else{
      alert('form not valid');
    }

  }

  ngOnDestroy() {
    this.common.cartdetails.next(null);
    this.common.totalAmount.next(0);
  }
}

export class Orders{
  orderID:string;
  product:Product[];
  total:number;
  status:string;
  orderDate:string;
}
