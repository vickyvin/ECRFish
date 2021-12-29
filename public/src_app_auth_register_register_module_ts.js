(self["webpackChunkECRFish"] = self["webpackChunkECRFish"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 2638:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1351);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6108:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 2638);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 1351);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4176);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 4169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let RegisterPage = class RegisterPage {
    constructor(modalController, router, alertService) {
        this.modalController = modalController;
        this.router = router;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    // Dismiss Register Modal
    dismissRegister() {
        this.modalController.dismiss();
    }
    // On Login button tap, dismiss Register modal and open login Modal
    // async loginModal() {
    //   this.dismissRegister();
    //   const loginModal = await this.modalController.create({
    //     component: LoginPage,
    //   });
    //   return await loginModal.present();
    // }
    register(form) {
        if (form.value.password !== form.value.Confirmpassword) {
            return this.alertService.presentToast('Password and Confirm Password is Not Matching..');
        }
        this.alertService.presentToast('Successfully Registered');
        this.router.navigate(['/login']);
        /*  this.authService.register(form.value.email, form.value.password).then(
           data => {
             
             this.alertService.presentToast('Successfully Registered');
             this.router.navigate(['/login']);
           },
           error => {
             console.log(error);
             this.alertService.presentToast('Registeration Failed..!');
           },
         ); */
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 4169:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\nion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\nion-item.item {\n  opacity: 0.6;\n  margin-bottom: 1px;\n}\n\nion-item.item .label {\n  width: 10%;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFFSjs7QUFBRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFHTiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLml0ZW0ge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAubGFiZWwge1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ 4176:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class='cont'>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n    <div style=\"padding-top: 15%;\">\n      <div class='ion-text-center'>\n        <h3 style=\"color: white;\">Register</h3>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-item>\n          <ion-label position=\"floating\">Email/Mobile</ion-label>\n          <ion-input type=\"email\" ngModel name=\"email\" required></ion-input>\n        </ion-item>\n      </div>\n     <div style=\"padding-top: 3%;\" class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" ngModel name=\"password\" required></ion-input>\n      </ion-item>\n     </div>\n     <div style=\"padding-top: 3%;\" class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" ngModel name=\"Confirmpassword\" required></ion-input>\n      </ion-item>\n     </div>\n  \n      <div class=\"ion-padding\" class=\"ion-padding\">\n        <ion-button type=\"submit\" [disabled]='form.invalid' expand=\"full\" color=\"danger\">Register</ion-button>\n      </div>\n    </div>\n\n  </form>\n  <ion-row class='ion-justify-content-center'>\n    <div class='ion-text-center'>\n      <div>\n        Return to  <a routerLink='/login' style=\"color: white;\"> Login\n        </a>\n      </div>   \n    </div>\n  </ion-row>\n  <!-- <ion-row>\n    <div text-center>\n        <a routerLink='/login'>Log In</a>\n   \n   \n    </div> \n</ion-row> -->\n  <!-- <p text-center>Already have a account?</p>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"loginModal()\">Login</ion-button> -->\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map