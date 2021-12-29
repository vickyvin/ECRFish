(self["webpackChunkECRFish"] = self["webpackChunkECRFish"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 1594:
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent),
/* harmony export */   "Orders": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkout.component.html */ 1932);
/* harmony import */ var _checkout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component.scss */ 6328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ 5620);








let CheckoutComponent = class CheckoutComponent {
    constructor(formbuilder, common, _router, db) {
        this.formbuilder = formbuilder;
        this.common = common;
        this._router = _router;
        this.db = db;
        this.totalAmount = 0;
        this.myorders = [];
        this.isBuyNowDisabled = true;
        this.isNewAddress = false;
    }
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
            CustomerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    addressChange(address) {
        this.isBuyNowDisabled = false;
    }
    BuyNowClick() {
        let products;
        let order = new Orders();
        alert("Saved successfully");
        this.common.cartdetails.subscribe(t => {
            products = t;
        });
        order.product = products;
        order.orderID = "1";
        order.orderDate = new Date().toISOString();
        order.status = "Booked";
        order.total = this.totalAmount;
        this.myorders.push(order);
        //this.storage.set('orders', this.myorders);
        this._router.navigate(["home/myaccount/myorders"]);
    }
    AddAddress(form) {
        if (form.valid) {
            //this.api.saveCustAddress(form.value).subscribe(obj=>console.log(obj))
        }
        else {
            alert('form not valid');
        }
    }
    ngOnDestroy() {
        this.common.cartdetails.next(null);
        this.common.totalAmount.next(0);
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore }
];
CheckoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkout_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckoutComponent);

class Orders {
}


/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);



let CommonService = class CommonService {
    constructor() {
        this.ProductDetails = [];
        this.cartdetails = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.ProductDetails);
        this.totalAmount = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
};
CommonService.ctorParameters = () => [];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkout/checkout.component */ 1594);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 7008)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab4_tab4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
            },
            {
                path: 'checkout',
                component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutComponent
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkout/checkout.component */ 1594);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage, _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutComponent]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 6328:
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1932:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color='primary'>\r\n    <ion-title>\r\n      Order\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list style=\"padding: 35px;\">\r\n    <ion-radio-group value=\"biff\">\r\n      <ion-list-header>\r\n        <ion-label>Default Address</ion-label>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let ad of addressData;let i=index\" style=\"padding: 5px;font-size: 14px;\" lines=\"none\">\r\n        <div style=\"display: flex;flex-direction: column;padding: 10px;\">\r\n          <span>{{ad.customerName}},</span>\r\n          <span>{{ad.phoneNumber}}</span>\r\n          <span>{{ad.email}}</span>\r\n          <span>{{ad.address}}</span>\r\n        </div>\r\n        <ion-radio (ionFocus)=\"addressChange(ad)\" slot=\"start\" value=\"address{{i}}\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header style=\"padding: 10px;\">\r\n      <ion-label>Add New Address</ion-label>\r\n      <ion-item>\r\n        <ion-button  (click)=\"isNewAddress=true\" slot=\"end\" color=\"primary\">Add</ion-button>\r\n      </ion-item>\r\n      \r\n    </ion-list-header>\r\n    <form *ngIf='isNewAddress' style=\"padding: 10px;\" [formGroup]=\"form\">\r\n      <ion-item>\r\n        <ion-label class=\"lbl\" position=\"floating\">Name</ion-label>\r\n        <ion-input name=\"Name\" formControlName=\"CustomerName\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"lbl\" position=\"floating\">Phone Number</ion-label>\r\n        <ion-input name=\"PhoneNumber\" formControlName=\"PhoneNumber\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"lbl\" position=\"floating\">Email Id</ion-label>\r\n        <ion-input name=\"Emailid\" formControlName=\"Email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"lbl\" position=\"floating\">Address </ion-label>\r\n        <ion-textarea name=\"Address\" formControlName=\"City\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        \r\n        <ion-button  (click)=\"AddAddress(form)\" slot=\"end\" color=\"primary\">Save</ion-button>\r\n      </ion-item>\r\n    </form>\r\n    <ion-item>\r\n      <ion-text slot=\"start\"><strong>Total Amt: </strong><br>{{totalAmount}}</ion-text>\r\n      <ion-button [disabled]=\"isBuyNowDisabled\" (click)=\"BuyNowClick()\" slot=\"end\" color=\"primary\">Buy Now</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"triangle\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"ellipse\"></ion-icon>\n      <ion-label>Products</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>Cart</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"square\"></ion-icon>\n      <ion-label>Help</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map