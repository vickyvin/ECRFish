import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private common:CommonService,private alertservice:AlertService,private router:Router) {}

  products:Array<Product>;
  productWeights:Array<ProductWeight>;
  SelectedWeight:number;
  Defaultweight:string;
  selectweight:string;
  cartdetails: Product[];
ngOnInit(){
  this.getProducts();
}

  getProducts(){
    this.productWeights=[
      {value:0,displayText:"0",isSelected:true},
      {value:1,displayText:"1kg",isSelected:true},
      {value:2,displayText:"2kg",isSelected:false},
      {value:3,displayText:"3kg",isSelected:false},
      {value:4,displayText:"4kg",isSelected:false},
      {value:5,displayText:"5kg",isSelected:false},
      {value:6,displayText:"6kg",isSelected:false},
      {value:7,displayText:"7kg",isSelected:false},
      {value:8,displayText:"8kg",isSelected:false},
      {value:9,displayText:"9kg",isSelected:false},
      {value:10,displayText:"10kg",isSelected:false},
      {value:11,displayText:"11kg",isSelected:true},
      {value:12,displayText:"12kg",isSelected:false},
      {value:13,displayText:"13kg",isSelected:false},
      {value:14,displayText:"14kg",isSelected:false},
      {value:15,displayText:"15kg",isSelected:false},
      {value:16,displayText:"16kg",isSelected:false},
      {value:17,displayText:"17kg",isSelected:false},
      {value:18,displayText:"18kg",isSelected:false},
      {value:19,displayText:"19kg",isSelected:false},
      {value:20,displayText:"20kg",isSelected:false}

    ]

    this.products=[
      {id:1,name:"Fish1",description:"test description 1",imgUrl:"../../assets/images/products/fish1.jpeg",price:250,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:2,name:"Fish2",description:"test description 2",imgUrl:"../../assets/images/products/fish2.jpeg",price:350,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:8,name:"Fish3",description:"test description 3",imgUrl:"../../assets/images/products/sc.jpeg",price:450,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:3,name:"Fish4",description:"test description 4",imgUrl:"../../assets/images/products/fish3.jpeg",price:500,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:4,name:"Test5",description:"test description 5",imgUrl:"../../assets/images/products/fish4.jpeg",price:300,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:5,name:"Test6",description:"test description 6",imgUrl:"../../assets/images/products/fish5.jpeg",price:200,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:6,name:"Test7",description:"test description 7",imgUrl:"../../assets/images/products/fish6.jpeg",price:150,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false},
      {id:7,name:"Test8",description:"test description 8",imgUrl:"../../assets/images/products/fish7.jpeg",price:250,weight:this.productWeights,CalculatedPrice:0,WeightChanged:false}
    ]
    console.log('products',this.products);
    this.Defaultweight=this.productWeights[0].displayText;
  }

  selectionChanged(product:Product,weight:any) {
    console.log('selected product',product);
    console.log('selected weight',weight);
    if(weight==1){
      product.WeightChanged=false;
    }else{
      product.WeightChanged=true;
    } 
    product.CalculatedPrice=(product.price)*weight; 
    console.log('calculated rate',product.CalculatedPrice);
  }

  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 == e2 : e1 == e2;
  }

   MovetoCart(){
    this.cartdetails = [];
    this.products.forEach(element => {
      if (element.CalculatedPrice > 0) {
        this.cartdetails.push(element);
      }
    });
    this.common.cartdetails.next(this.cartdetails);
    this.alertservice.presentToast("Item added to Cart.");
    this.router.navigate(["tabs/tab4"])
  
  }


}

export class Product{
  id:number;
  name:string;
  description:string;
  imgUrl:string;
  price:number;
  weight:Array<ProductWeight>;
  CalculatedPrice:number;
  WeightChanged:boolean;
}

export class ProductWeight{
  value:number;
  displayText:string;
  isSelected:boolean;
}
