(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-public-public-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/public/public.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/public/public.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>public</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/public/public.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/public/public.module.ts ***!
  \***********************************************/
/*! exports provided: PublicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPageModule", function() { return PublicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _public_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public.page */ "./src/app/pages/public/public.page.ts");







var routes = [
    {
        path: '',
        component: _public_page__WEBPACK_IMPORTED_MODULE_6__["PublicPage"]
    }
];
var PublicPageModule = /** @class */ (function () {
    function PublicPageModule() {
    }
    PublicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_public_page__WEBPACK_IMPORTED_MODULE_6__["PublicPage"]]
        })
    ], PublicPageModule);
    return PublicPageModule;
}());



/***/ }),

/***/ "./src/app/pages/public/public.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/public/public.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9wdWJsaWMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/public.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/public/public.page.ts ***!
  \*********************************************/
/*! exports provided: PublicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPage", function() { return PublicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicPage = /** @class */ (function () {
    function PublicPage() {
    }
    PublicPage.prototype.ngOnInit = function () {
    };
    PublicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! raw-loader!./public.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/public/public.page.html"),
            styles: [__webpack_require__(/*! ./public.page.scss */ "./src/app/pages/public/public.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicPage);
    return PublicPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-public-public-module-es5.js.map