import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  ProductDetails:Product[]=[];
  cartdetails=new BehaviorSubject(this.ProductDetails);
  totalAmount=new BehaviorSubject(0);
}
