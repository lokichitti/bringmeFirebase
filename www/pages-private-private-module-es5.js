(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-private-private-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/private/private.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/private/private.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>private</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/private/private.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/private/private.module.ts ***!
  \*************************************************/
/*! exports provided: PrivatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePageModule", function() { return PrivatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _private_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private.page */ "./src/app/pages/private/private.page.ts");







var routes = [
    {
        path: '',
        component: _private_page__WEBPACK_IMPORTED_MODULE_6__["PrivatePage"]
    }
];
var PrivatePageModule = /** @class */ (function () {
    function PrivatePageModule() {
    }
    PrivatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_private_page__WEBPACK_IMPORTED_MODULE_6__["PrivatePage"]]
        })
    ], PrivatePageModule);
    return PrivatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/private/private.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/private/private.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJpdmF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/private/private.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/private/private.page.ts ***!
  \***********************************************/
/*! exports provided: PrivatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePage", function() { return PrivatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivatePage = /** @class */ (function () {
    function PrivatePage() {
    }
    PrivatePage.prototype.ngOnInit = function () {
    };
    PrivatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! raw-loader!./private.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/private/private.page.html"),
            styles: [__webpack_require__(/*! ./private.page.scss */ "./src/app/pages/private/private.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivatePage);
    return PrivatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-private-private-module-es5.js.map