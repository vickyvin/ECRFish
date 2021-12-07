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

ngOnInit(){
  this.getProducts();
}

  getProducts(){
    this.products=[
      {id:1,name:"Fish1",description:"test description 1",imgUrl:"../../assets/images/products/fish1.jpeg"},
      {id:2,name:"Fish2",description:"test description 2",imgUrl:"../../assets/images/products/fish2.jpeg"},
      {id:8,name:"Fish3",description:"test description 3",imgUrl:"../../assets/images/products/sc.jpeg"},
      {id:3,name:"Fish4",description:"test description 4",imgUrl:"../../assets/images/products/fish3.jpeg"},
      {id:4,name:"Test5",description:"test description 5",imgUrl:"../../assets/images/products/fish4.jpeg"},
      {id:5,name:"Test6",description:"test description 6",imgUrl:"../../assets/images/products/fish5.jpeg"},
      {id:6,name:"Test7",description:"test description 7",imgUrl:"../../assets/images/products/fish6.jpeg"},
      {id:7,name:"Test8",description:"test description 8",imgUrl:"../../assets/images/products/fish7.jpeg"}
    ]

  }


}

export class Product{
  id:number;
  name:string;
  description:string;
  imgUrl:string;
}
