(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/map/map.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div #map style=\"height:100%;\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");







var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home #floating-panel {\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  z-index: 5;\n  background-color: #fff;\n  padding: 5px;\n  border: 1px solid #999;\n  text-align: center;\n  font-family: \"Roboto\", \"sans-serif\";\n  line-height: 30px;\n  padding-left: 10px;\n}\npage-home #map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6dXJlL0lPTklDL0xPS0EtR0lUL2JyaW5nbWVGaXJlYmFzZS9zcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XG4gICAgI2Zsb2F0aW5nLXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICB6LWluZGV4OiA1O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICNtYXAge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfSIsInBhZ2UtaG9tZSAjZmxvYXRpbmctcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbnBhZ2UtaG9tZSAjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MapPage = /** @class */ (function () {
    function MapPage(googleMaps, plt, nav) {
        this.googleMaps = googleMaps;
        this.plt = plt;
        this.nav = nav;
    }
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.initMap();
        });
    };
    MapPage.prototype.initMap = function () {
        var map = this.googleMaps.create(this.element.nativeElement);
        map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).then(function (data) {
            var coordinates = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLng"](33.6396965, -84.4304574);
            var position = {
                target: coordinates,
                zoom: 17
            };
            map.animateCamera(position);
            var markerOptions = {
                position: coordinates,
                icon: "assets/images/icons8-Marker-64.png",
                title: 'Our first POI'
            };
            var marker = map.addMarker(markerOptions)
                .then(function (marker) {
                marker.showInfoWindow();
            });
        });
    };
    MapPage.ctorParameters = function () { return [
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapPage.prototype, "element", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/pages/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-map-module-es5.js.map