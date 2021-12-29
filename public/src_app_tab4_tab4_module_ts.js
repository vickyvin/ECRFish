(self["webpackChunkECRFish"] = self["webpackChunkECRFish"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 8203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 5300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ 5620);






let Tab4Page = class Tab4Page {
    constructor(common, router) {
        this.common = common;
        this.router = router;
        this.cartdetails = [];
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.common.cartdetails.subscribe(res => {
            this.ProductDetails = res;
            console.log('product-detail', this.ProductDetails);
            if (this.ProductDetails.length > 0) {
                this.totalAmount = 0;
                this.ProductDetails.forEach(element => {
                    this.totalAmount = this.totalAmount + (element.CalculatedPrice);
                    this.NoOfKg = (element.CalculatedPrice / element.price);
                    element.weight = element.weight.filter(x => x.value === this.NoOfKg);
                    console.log('selected weight', element.weight);
                    console.log('Nokg', this.NoOfKg);
                });
                this.common.totalAmount.next(this.totalAmount);
            }
        });
    }
    Canceled() {
        this.common.cartdetails.next([]);
        this.common.totalAmount.next(0);
        this.router.navigate(["/tabs/tab2"]);
    }
    PlaceOrder() {
        this.router.navigate(["/tabs/checkout"]);
    }
};
Tab4Page.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 5300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='primary'>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Cart</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  \n  <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-button color=\"success\" (click)=\"PlaceOrder()\" expand=\"full\" shape=\"round\">\n      <ion-icon name=\"checkmark\"></ion-icon>Order Now\n    </ion-button>\n  </ion-fab>\n  <ion-fab  vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button color=\"danger\"  expand=\"full\" shape=\"round\">\n      Total RS:{{totalAmount}}\n    </ion-button>\n  </ion-fab>\n\n \n    <ion-row>\n        <ion-list>\n          <!-- (click)=\"ItemClicked(info,i)\" -->\n          <ion-item *ngFor=\"let product of ProductDetails;let i=index\" lines=\"none\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-card style=\"padding-left: 1%;\"> <img [src]=\"product.imgUrl\"></ion-card>\n                </ion-col>\n                <ion-col size=\"5\">\n                  <div style=\"display: flex;flex-direction: column;padding-top:10%\">\n                    <ion-label>{{product.name}}</ion-label>\n                    <ion-item lines=\"none\">\n                      <ion-label>\n                        {{product.weight[0].displayText}}\n                      </ion-label> \n                    </ion-item>\n                    <ion-label>\n                      Rs: {{product.CalculatedPrice}}\n                    </ion-label>               \n                  </div>               \n                </ion-col>             \n              </ion-row>\n          </ion-item>       \n        </ion-list>\n        \n    </ion-row>\n    \n   \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map