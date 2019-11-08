(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./node_modules/@ionic-native/firebase/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/firebase/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: Firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Firebase", function() { return Firebase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Firebase = /** @class */ (function (_super) {
    __extends(Firebase, _super);
    function Firebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Firebase.prototype.getToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getToken", {}, arguments); };
    Firebase.prototype.onTokenRefresh = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onTokenRefresh", { "observable": true }, arguments); };
    Firebase.prototype.onNotificationOpen = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onNotificationOpen", { "observable": true }, arguments); };
    Firebase.prototype.grantPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "grantPermission", { "platforms": ["iOS"] }, arguments); };
    Firebase.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasPermission", {}, arguments); };
    Firebase.prototype.setBadgeNumber = function (badgeNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setBadgeNumber", {}, arguments); };
    Firebase.prototype.getBadgeNumber = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getBadgeNumber", {}, arguments); };
    Firebase.prototype.subscribe = function (topic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "subscribe", {}, arguments); };
    Firebase.prototype.unsubscribe = function (topic) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unsubscribe", {}, arguments); };
    Firebase.prototype.unregister = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unregister", {}, arguments); };
    Firebase.prototype.logEvent = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "logEvent", {}, arguments); };
    Firebase.prototype.logError = function (message) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "logError", {}, arguments); };
    Firebase.prototype.setScreenName = function (name) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setScreenName", {}, arguments); };
    Firebase.prototype.setUserId = function (userId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setUserId", {}, arguments); };
    Firebase.prototype.setUserProperty = function (name, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setUserProperty", {}, arguments); };
    Firebase.prototype.fetch = function (cacheExpirationSeconds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "fetch", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Firebase.prototype.activateFetched = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "activateFetched", {}, arguments); };
    Firebase.prototype.getValue = function (key, namespace) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getValue", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Firebase.prototype.getByteArray = function (key, namespace) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getByteArray", { "platforms": ["Android"] }, arguments); };
    Firebase.prototype.getInfo = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getInfo", { "platforms": ["Android"] }, arguments); };
    Firebase.prototype.setConfigSettings = function (settings) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setConfigSettings", { "platforms": ["Android"] }, arguments); };
    Firebase.prototype.setDefaults = function (defaults, namespace) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    Firebase.prototype.startTrace = function (trace) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "startTrace", {}, arguments); };
    Firebase.prototype.incrementCounter = function (trace, counter) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "incrementCounter", {}, arguments); };
    Firebase.prototype.stopTrace = function (trace) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopTrace", {}, arguments); };
    Firebase.prototype.setAnalyticsCollectionEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    Firebase.prototype.setCrashlyticsUserId = function (userId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setCrashlyticsUserId", {}, arguments); };
    Firebase.prototype.verifyPhoneNumber = function (phoneNumber, timeoutDuration) {
        if (timeoutDuration === void 0) { timeoutDuration = 0; }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "verifyPhoneNumber", { "platforms": ["Android", "iOS"], "successIndex": 2, "errorIndex": 3 }, arguments);
    };
    Firebase.prototype.clearAllNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clearAllNotifications", { "platforms": ["Android"] }, arguments); };
    Firebase.pluginName = "Firebase";
    Firebase.plugin = "cordova-plugin-firebase";
    Firebase.pluginRef = "FirebasePlugin";
    Firebase.repo = "https://github.com/arnesson/cordova-plugin-firebase";
    Firebase.platforms = ["Android", "iOS"];
    Firebase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Firebase);
    return Firebase;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBbUNKLDRCQUFpQjs7OztJQU03QywyQkFBUTtJQVdSLGlDQUFjO0lBV2QscUNBQWtCO0lBV2xCLGtDQUFlO0lBU2YsZ0NBQWE7SUFVYixpQ0FBYyxhQUFDLFdBQW1CO0lBU2xDLGlDQUFjO0lBVWQsNEJBQVMsYUFBQyxLQUFhO0lBVXZCLDhCQUFXLGFBQUMsS0FBYTtJQVN6Qiw2QkFBVTtJQVdWLDJCQUFRLGFBQUMsSUFBWSxFQUFFLElBQVM7SUFVaEMsMkJBQVEsYUFBQyxPQUFlO0lBVXhCLGdDQUFhLGFBQUMsSUFBWTtJQVUxQiw0QkFBUyxhQUFDLE1BQWM7SUFXeEIsa0NBQWUsYUFBQyxJQUFZLEVBQUUsS0FBYTtJQWEzQyx3QkFBSyxhQUFDLHNCQUErQjtJQVNyQyxrQ0FBZTtJQWNmLDJCQUFRLGFBQUMsR0FBVyxFQUFFLFNBQWtCO0lBYXhDLCtCQUFZLGFBQUMsR0FBVyxFQUFFLFNBQWtCO0lBVzVDLDBCQUFPO0lBWVAsb0NBQWlCLGFBQUMsUUFBYTtJQWEvQiw4QkFBVyxhQUFDLFFBQWEsRUFBRSxTQUFrQjtJQVM3Qyw2QkFBVSxhQUFDLEtBQWE7SUFZeEIsbUNBQWdCLGFBQUMsS0FBYSxFQUFFLE9BQWU7SUFTL0MsNEJBQVMsYUFBQyxLQUFhO0lBUXZCLGdEQUE2QixhQUFDLE9BQWdCO0lBVzlDLHVDQUFvQixhQUFDLE1BQWM7SUFlbkMsb0NBQWlCLGFBQ2YsV0FBbUIsRUFDbkIsZUFBbUI7UUFBbkIsZ0NBQUEsRUFBQSxtQkFBbUI7OztJQVlyQix3Q0FBcUI7Ozs7OztJQXZUVixRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBckNyQjtFQXFDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBicmluZ3MgcHVzaCBub3RpZmljYXRpb25zLCBhbmFseXRpY3MsIGV2ZW50IHRyYWNraW5nLCBjcmFzaCByZXBvcnRpbmcgYW5kIG1vcmUgZnJvbSBHb29nbGUgRmlyZWJhc2UgdG8geW91ciBDb3Jkb3ZhIHByb2plY3QhIEFuZHJvaWQgYW5kIGlPUyBzdXBwb3J0ZWQgKGluY2x1ZGluZyBpT1MgMTApLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZTogRmlyZWJhc2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlyZWJhc2UuZ2V0VG9rZW4oKVxuICogICAudGhlbih0b2tlbiA9PiBjb25zb2xlLmxvZyhgVGhlIHRva2VuIGlzICR7dG9rZW59YCkpIC8vIHNhdmUgdGhlIHRva2VuIHNlcnZlci1zaWRlIGFuZCB1c2UgaXQgdG8gcHVzaCBub3RpZmljYXRpb25zIHRvIHRoaXMgZGV2aWNlXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHRva2VuJywgZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmZpcmViYXNlLm9uTm90aWZpY2F0aW9uT3BlbigpXG4gKiAgICAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coYFVzZXIgb3BlbmVkIGEgbm90aWZpY2F0aW9uICR7ZGF0YX1gKSk7XG4gKlxuICogdGhpcy5maXJlYmFzZS5vblRva2VuUmVmcmVzaCgpXG4gKiAgIC5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGBHb3QgYSBuZXcgdG9rZW4gJHt0b2tlbn1gKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZScsXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlUGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcm5lc3Nvbi9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UgdG9rZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxudWxsIHwgc3RyaW5nPn0gTm90ZSB0aGF0IHRva2VuIHdpbGwgYmUgbnVsbCBpZiBpdCBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQgeWV0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRva2VuKCk6IFByb21pc2U8bnVsbCB8IHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiBhIHRva2VuIGlzIHJlZnJlc2hlZFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvblRva2VuUmVmcmVzaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBvcGVucyBhIG5vdGlmaWNhdGlvblxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBvbk5vdGlmaWNhdGlvbk9wZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR3JhbnQgcGVybWlzc2lvbiB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGdyYW50UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uIHRvIHJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8e2lzRW5hYmxlZDogYm9vbGVhbn0+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8eyBpc0VuYWJsZWQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaWNvbiBiYWRnZSBudW1iZXIuIFNldCB0byAwIHRvIGNsZWFyIHRoZSBiYWRnZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhZGdlTnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QmFkZ2VOdW1iZXIoYmFkZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpY29uIGJhZGdlIG51bWJlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEJhZGdlTnVtYmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhIHRvcGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSBhIHRvcGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGZyb20gZmlyZWJhc2UsIHVzZWQgdG8gc3RvcCByZWNlaXZpbmcgcHVzaCBub3RpZmljYXRpb25zLlxuICAgKiBDYWxsIHRoaXMgd2hlbiB5b3UgbG9nb3V0IHVzZXIgZnJvbSB5b3VyIGFwcC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5yZWdpc3RlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gZXZlbnQgdXNpbmcgQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nRXZlbnQodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gRXJyb3IgdXNpbmcgRmlyZWJhc2VDcmFzaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBzY3JlZW4gaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFNjcmVlbiBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2NyZWVuTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB1c2VyIGlkIGZvciB1c2UgaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB1c2VyIHByb3BlcnR5IGZvciB1c2UgaW4gQW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBSZW1vdGUgQ29uZmlnIHBhcmFtZXRlciB2YWx1ZXMgZm9yIHlvdXIgYXBwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY2FjaGVFeHBpcmF0aW9uU2Vjb25kc11cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIGZldGNoKGNhY2hlRXhwaXJhdGlvblNlY29uZHM/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgUmVtb3RlIENvbmZpZyBmZXRjaGVkIGNvbmZpZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlRmV0Y2hlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIFJlbW90ZSBDb25maWcgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGdldFZhbHVlKGtleTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIFJlbW90ZSBDb25maWcgYnl0ZSBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBnZXRCeXRlQXJyYXkoa2V5OiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgRmlyZWJhc2VSZW1vdGVDb25maWcgc2luZ2xldG9uIG9iamVjdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBnZXRJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgc2V0dGluZ3MgZm9yIHRoZSBGaXJlYmFzZVJlbW90ZUNvbmZpZyBvYmplY3QncyBvcGVyYXRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzZXRDb25maWdTZXR0aW5ncyhzZXR0aW5nczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHRzIGluIHRoZSBSZW1vdGUgQ29uZmlnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgc2V0RGVmYXVsdHMoZGVmYXVsdHM6IGFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSB0cmFjZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNlIFRyYWNlIG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRUcmFjZSh0cmFjZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVG8gY291bnQgdGhlIHBlcmZvcm1hbmNlLXJlbGF0ZWQgZXZlbnRzIHRoYXQgb2NjdXIgaW4geW91ciBhcHAgKHN1Y2ggYXMgY2FjaGUgaGl0cyBvciByZXRyaWVzKSwgYWRkIGEgbGluZSBvZiBjb2RlXG4gICAqIHNpbWlsYXIgdG8gdGhlIGZvbGxvd2luZyB3aGVuZXZlciB0aGUgZXZlbnQgb2NjdXJzLCB1c2luZyBhIHN0cmluZyBvdGhlciB0aGFuIHJldHJ5IHRvIG5hbWUgdGhhdCBldmVudCBpZiB5b3UgYXJlXG4gICAqIGNvdW50aW5nIGEgZGlmZmVyZW50IHR5cGUgb2YgZXZlbnQ6XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFjZSBUcmFjZSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudGVyIENvdW50ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5jcmVtZW50Q291bnRlcih0cmFjZTogc3RyaW5nLCBjb3VudGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSB0cmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2UgVHJhY2UgbmFtZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wVHJhY2UodHJhY2U6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZS9kaXNhYmxlIGFuYWx5dGljcyBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCB2YWx1ZSB0byBzZXQgY29sbGVjdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBbmFseXRpY3NDb2xsZWN0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIHNldCBVc2VyIElkZW50aWZpZXIgZm9yIGNyYXNobHl0aWNzIHJlcG9ydGluZ1xuICAgKiBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9jcmFzaGx5dGljcy9jdXN0b21pemUtY3Jhc2gtcmVwb3J0cz9hdXRodXNlcj0wI3NldF91c2VyX2lkc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIHZhbHVlIHRvIHNldCB0aGUgdXNlcklkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENyYXNobHl0aWNzVXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gU01TIHRvIHRoZSB1c2VyIHdpdGggdGhlIFNNUyB2ZXJpZmljYXRpb24gY29kZSBhbmQgcmV0dXJucyB0aGUgVmVyaWZpY2F0aW9uIElEIHJlcXVpcmVkIHRvIHNpZ24gaW4gdXNpbmcgcGhvbmUgYXV0aGVudGljYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBob25lTnVtYmVyIFRoZSBwaG9uZSBudW1iZXIsIGluY2x1ZGluZyAnKycgYW5kIGNvdW50cnkgY29kZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dER1cmF0aW9uIChBbmRyb2lkIG9ubHkpIFRoZSB0aW1lb3V0IGluIHNlYyAtIG5vIG1vcmUgU01TIHdpbGwgYmUgc2VudCB0byB0aGlzIG51bWJlciB1bnRpbCB0aGlzIHRpbWVvdXQgZXhwaXJlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHZlcmlmeVBob25lTnVtYmVyKFxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcsXG4gICAgdGltZW91dER1cmF0aW9uID0gMFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgcGVuZGluZyBub3RpZmljYXRpb25zIGZyb20gdGhlIGRyYXdlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBjbGVhckFsbE5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-up/sign-up.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>SignUp</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/pages/sign-up/sign-up.page.ts");







const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }
];
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase/ngx */ "./node_modules/@ionic-native/firebase/ngx/index.js");



let SignUpPage = class SignUpPage {
    constructor(firebase) {
        this.firebase = firebase;
    }
    ngOnInit() {
    }
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_2__["Firebase"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.page.html"),
        styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/pages/sign-up/sign-up.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_2__["Firebase"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map