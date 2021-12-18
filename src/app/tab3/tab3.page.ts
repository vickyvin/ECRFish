import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection,getDocs } from '@angular/fire/firestore';
import { jsonEval } from '@firebase/util';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  products$: Observable<any[]>;
  ProductName:string;
  constructor(private firestore: Firestore) {
  }
  ngOnInit(){
   this.getProducts(this.firestore);
    console.log('product data',this.products$);

  }
  getProducts(db) {
  const productcollection = collection(db, 'Products');
  this.products$ = collectionData(productcollection);

}

saveProduct(){
  console.log('entered value',this.ProductName);
  this.addProduct(this.firestore,this.ProductName);
}

addProduct(db,name){
  addDoc(collection(db, 'Products'),{ProductName:name,ProductId:2,ProductPrice:500}).then(x=>{
    alert('doc saved');
  })
 
 }


}
