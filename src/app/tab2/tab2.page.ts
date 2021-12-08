import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() {}

  products:Array<Product>;
  productWeights:Array<ProductWeight>;
  SelectedWeight:number;
  Defaultweight:string;
ngOnInit(){
  this.getProducts();
}

  getProducts(){
    this.products=[
      {id:1,name:"Fish1",description:"test description 1",imgUrl:"../../assets/images/products/fish1.jpeg",price:250},
      {id:2,name:"Fish2",description:"test description 2",imgUrl:"../../assets/images/products/fish2.jpeg",price:350},
      {id:8,name:"Fish3",description:"test description 3",imgUrl:"../../assets/images/products/sc.jpeg",price:450},
      {id:3,name:"Fish4",description:"test description 4",imgUrl:"../../assets/images/products/fish3.jpeg",price:500},
      {id:4,name:"Test5",description:"test description 5",imgUrl:"../../assets/images/products/fish4.jpeg",price:300},
      {id:5,name:"Test6",description:"test description 6",imgUrl:"../../assets/images/products/fish5.jpeg",price:200},
      {id:6,name:"Test7",description:"test description 7",imgUrl:"../../assets/images/products/fish6.jpeg",price:150},
      {id:7,name:"Test8",description:"test description 8",imgUrl:"../../assets/images/products/fish7.jpeg",price:250}
    ]

    this.productWeights=[
      {value:1,displayText:"1kg",price:100,isSelected:true},
      {value:2,displayText:"2kg",price:200,isSelected:false},
      {value:3,displayText:"3kg",price:300,isSelected:false},
      {value:4,displayText:"4kg",price:400,isSelected:false},
      {value:5,displayText:"5kg",price:500,isSelected:false},
      {value:6,displayText:"6kg",price:600,isSelected:false},
      {value:7,displayText:"7kg",price:700,isSelected:false},
      {value:8,displayText:"8kg",price:800,isSelected:false},
      {value:9,displayText:"9kg",price:900,isSelected:false},
      {value:10,displayText:"10kg",price:1000,isSelected:false},

    ]
    this.Defaultweight=this.productWeights[0].displayText;

  }
  onSelectChange(selectedValue: any) {
    this.SelectedWeight = selectedValue.detail.value ;
console.log("selected weight"+this.SelectedWeight);

  }
  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 == e2 : e1 == e2;
  }


}

export class Product{
  id:number;
  name:string;
  description:string;
  imgUrl:string;
  price:number;
}

export class ProductWeight{
  value:number;
  displayText:string;
  price:number;
  isSelected:boolean;
}
