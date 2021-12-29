(self["webpackChunkECRFish"] = self["webpackChunkECRFish"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page),
/* harmony export */   "Product": () => (/* binding */ Product),
/* harmony export */   "ProductWeight": () => (/* binding */ ProductWeight)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ 5970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ 5620);







let Tab2Page = class Tab2Page {
    constructor(common, alertservice, router) {
        this.common = common;
        this.alertservice = alertservice;
        this.router = router;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productWeights = [
            { value: 0, displayText: "0", isSelected: true },
            { value: 1, displayText: "1kg", isSelected: true },
            { value: 2, displayText: "2kg", isSelected: false },
            { value: 3, displayText: "3kg", isSelected: false },
            { value: 4, displayText: "4kg", isSelected: false },
            { value: 5, displayText: "5kg", isSelected: false },
            { value: 6, displayText: "6kg", isSelected: false },
            { value: 7, displayText: "7kg", isSelected: false },
            { value: 8, displayText: "8kg", isSelected: false },
            { value: 9, displayText: "9kg", isSelected: false },
            { value: 10, displayText: "10kg", isSelected: false },
            { value: 11, displayText: "11kg", isSelected: true },
            { value: 12, displayText: "12kg", isSelected: false },
            { value: 13, displayText: "13kg", isSelected: false },
            { value: 14, displayText: "14kg", isSelected: false },
            { value: 15, displayText: "15kg", isSelected: false },
            { value: 16, displayText: "16kg", isSelected: false },
            { value: 17, displayText: "17kg", isSelected: false },
            { value: 18, displayText: "18kg", isSelected: false },
            { value: 19, displayText: "19kg", isSelected: false },
            { value: 20, displayText: "20kg", isSelected: false }
        ];
        this.products = [
            { id: 1, name: "Fish1", description: "test description 1", imgUrl: "../../assets/images/products/fish1.jpeg", price: 250, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 2, name: "Fish2", description: "test description 2", imgUrl: "../../assets/images/products/fish2.jpeg", price: 350, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 8, name: "Fish3", description: "test description 3", imgUrl: "../../assets/images/products/sc.jpeg", price: 450, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 3, name: "Fish4", description: "test description 4", imgUrl: "../../assets/images/products/fish3.jpeg", price: 500, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 4, name: "Test5", description: "test description 5", imgUrl: "../../assets/images/products/fish4.jpeg", price: 300, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 5, name: "Test6", description: "test description 6", imgUrl: "../../assets/images/products/fish5.jpeg", price: 200, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 6, name: "Test7", description: "test description 7", imgUrl: "../../assets/images/products/fish6.jpeg", price: 150, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false },
            { id: 7, name: "Test8", description: "test description 8", imgUrl: "../../assets/images/products/fish7.jpeg", price: 250, weight: this.productWeights, CalculatedPrice: 0, WeightChanged: false }
        ];
        console.log('products', this.products);
        this.Defaultweight = this.productWeights[0].displayText;
    }
    selectionChanged(product, weight) {
        console.log('selected product', product);
        console.log('selected weight', weight);
        if (weight == 1) {
            product.WeightChanged = false;
        }
        else {
            product.WeightChanged = true;
        }
        product.CalculatedPrice = (product.price) * weight;
        console.log('calculated rate', product.CalculatedPrice);
    }
    compareFn(e1, e2) {
        return e1 && e2 ? e1 == e2 : e1 == e2;
    }
    MovetoCart() {
        this.cartdetails = [];
        this.products.forEach(element => {
            if (element.CalculatedPrice > 0) {
                this.cartdetails.push(element);
            }
        });
        this.common.cartdetails.next(this.cartdetails);
        this.alertservice.presentToast("Item added to Cart.");
        this.router.navigate(["tabs/tab4"]);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);

class Product {
}
class ProductWeight {
}


/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='primary'>\n    <ion-title>\n      Products\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Products</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"MovetoCart()\"><!--[routerLink]=\"['/tabs/tab3']\"-->\n      <ion-icon name=\"cart\"></ion-icon>Buy\n    </ion-fab-button>\n  </ion-fab>\n\n \n    <ion-row>\n        <ion-list>\n          <!-- (click)=\"ItemClicked(info,i)\" -->\n          <ion-item *ngFor=\"let product of products;let i=index\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-card style=\"padding-left: 1%;\"> <img [src]=\"product.imgUrl\"></ion-card>\n                </ion-col>\n                <ion-col size=\"5\">\n                  <div style=\"display: flex;flex-direction: column;padding-top:10%\">\n                    <ion-label>{{product.name}}</ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-select (ionChange)=\"selectionChanged(product,$event.target.value)\" interface=\"popover\" value=\"1\" placeholder=\"Weight/Quantity\" style=\"width: 100%;\">       \n                        <ion-select-option [value]=\"weight.value\" *ngFor=\"let weight of product.weight\" >{{weight.displayText}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                    <ion-label>\n                      Rs: {{product.CalculatedPrice}}\n                    </ion-label>               \n                  </div>               \n                </ion-col>\n                <!-- <ion-col size=\"3\">\n                  <div style=\"display: flex;padding: 5px;padding-top: 25px;\">\n                    <ion-icon style=\"color: #003366 !important;font-size: 25px;padding: 2px;\" name=\"remove-circle\"\n                      (click)=\"decrement(data)\">\n                    </ion-icon>\n                    <ion-label style=\"font-size: 25px;padding: 2px;\">{{data._qtt}}</ion-label>\n                    <ion-icon style=\"color: #003366 !important;font-size: 25px;padding: 2px;\" name=\"add-circle\"\n                      (click)=\"increment(data)\">\n                    </ion-icon>\n                  </div>\n\n                </ion-col> -->\n              </ion-row>\n          </ion-item>\n        </ion-list>\n    </ion-row>\n \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map