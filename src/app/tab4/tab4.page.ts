import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Product } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private common:CommonService,private router:Router) { }

  ProductDetails: any;
  cartdetails: any = [];
  totalAmount: number = 0;
  NoOfKg:number;

  ngOnInit() {
    this.common.cartdetails.subscribe(res => {
      this.ProductDetails = res;
      console.log('product-detail',this.ProductDetails);
      if (this.ProductDetails.length > 0) {
        this.totalAmount = 0;
        this.ProductDetails.forEach(element => {
          this.totalAmount = this.totalAmount + (element.CalculatedPrice);
          this.NoOfKg=(element.CalculatedPrice/element.price)
          element.weight=element.weight.filter(x=>x.value===this.NoOfKg);
          console.log('selected weight',element.weight);
          console.log('Nokg',this.NoOfKg);
        });
        this.common.totalAmount.next(this.totalAmount);
      }
    });
  }
  
  Canceled(){
    this.common.cartdetails.next([]);
    this.common.totalAmount.next(0);
    this.router.navigate(["/tabs/tab2"]);

  }
  PlaceOrder(){
    this.router.navigate(["/tabs/checkout"]);
  }

}
