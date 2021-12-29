(self["webpackChunkECRFish"] = self["webpackChunkECRFish"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 4272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4272);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1506);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 8182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);





// import { AuthService } from '../auth.service';


let LoginPage = class LoginPage {
    constructor(router, modalController, navCtrl, alertService) {
        this.router = router;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    // ngOnInit() {
    // }
    // // login(form){
    // //   this.router.navigateByUrl("tabs");
    // //   // this.authService.login(form.value).subscribe((res)=>{
    // //   //   this.router.navigateByUrl('home');
    // //   // });
    // // }
    // login() {
    //   this.authService.login();
    //   console.log(TOKEN_KEY);
    // }
    ngOnInit() {
    }
    // Dismiss Login Modal
    dismissLogin() {
        this.modalController.dismiss();
    }
    // On Register button tap, dismiss login modal and open register modal
    // async registerModal() {
    //   this.dismissLogin();
    //   const registerModal = await this.modalController.create({
    //     component: RegisterPage
    //   });
    //   return await registerModal.present();
    // }
    login(form) {
        //alert('log in clicked');
        this.alertService.presentToast('Login Successfull');
        //if(this.authService.isLoggedIn)
        //this.authService.setAdmin(true);
        //this.authService.isAdmin = true;
        this.router.navigate(['/tabs']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\nion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\nion-item.item {\n  opacity: 0.6;\n  margin-bottom: 1px;\n}\n\nion-item.item .label {\n  width: 10%;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFWSjs7QUFZRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFUSjs7QUFXRTtFQUdFLFlBQUE7RUFDQSxrQkFBQTtBQVZKOztBQVdJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFUTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taXRlbXtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuLy8gICAgIC0tY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuLy8gaW9uLWJ1dHRvbntcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxuLy8gfVxyXG4vLyBpb24tY29udGVudFxyXG4vLyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuLy8gfVxyXG5pb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLml0ZW0ge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgLmxhYmVsIHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 8182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class='cont'>\n    <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\" class=\"ion-padding\">\n        <ion-grid style=\"padding-top: 15%;\">\n          <ion-row color=\"primary\" class='ion-justify-content-center'>\n            <ion-col class='ion-align-self-center' size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n              <div class='ion-text-center'>\n                <h3 style=\"color: white;\">Login</h3>\n              </div>\n              <div class=\"ion-padding\">\n                <div>\n                  <ion-item>\n                    <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n                  </ion-item>\n                </div>\n               \n               <div style=\"padding-top: 5%;\">\n                <ion-item>\n                  <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n                </ion-item>\n               </div>             \n              </div>\n              <div class=\"ion-padding\">\n                <!-- <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button> -->\n                <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button>\n              </div>\n              <div class=\"ion-text-center\">\n                If you don't have an account, please <a routerLink='/register' style=\"color: white;\">\n                 Register</a> first!\n                  </div>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n              <div text-center>\n            If you don't have an account, please <a routerLink='/register'>\n              register</a> first!\n              </div>\n          </ion-row> -->\n        </ion-grid>\n      </form>\n      <!-- <p text-center>Don't have a account?</p>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"registerModal()\">Register</ion-button> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map