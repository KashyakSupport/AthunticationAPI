webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<mat-checkbox #show [value]=\"val\" [checked]=\"isChecked\" (onChange)=\"onChange($event)\">Check me!</mat-checkbox>\n<div *ngIf=\"show.checked\">Show Detailssssss</div>   -->\n<mat-toolbar  color=\"primary\" >Simplyst\n        <span class=\"example-spacer\"></span>\n       <!-- <mat-icon class=\"example-icon\">account_box</mat-icon> <a href=\"/signup\">Register</a>  -->\n        <mat-icon class=\"example-icon\">verified_user</mat-icon>  <a routerLink=\"/login\">Login</a>\n       \n</mat-toolbar>\n<div><router-outlet></router-outlet></div>\n\n<!--\n\n<app-signup></app-signup>\n\n\n<app-login></app-login>\n\n-->\n<div ng-app='StarterApp' ng-controller='AppCtrl' layout='column' layout-fill></div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.isChecked = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MaterialModule } from '@angular/material';









// Routing the pages
var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(AppRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatToolbarModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div>\n    <div class=\"example-header\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter users\">\n      </mat-form-field>\n      <button mat-icon-button color=\"accent\" (click)=\"constructor()\">\n          <mat-icon aria-label=\"Example icon-button with a add icon\">add_circle</mat-icon>\n        </button>\n    </div>\n    <div>\n       \n           \n         \n    </div>\n  </div>\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"userId\">\n        <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"progress\">\n        <mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"userName\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"color\">\n        <mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('filter'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
    ], HomeComponent.prototype, "filter", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ng-controller=\"formctrl\" ng-app=\"myApp\">\n  \n  <mat-card>\n  <div class=\"container\">\n  <div id=\"login\">\n      <div class=\"signup-screen\">\n          <div class=\"mat-card-title mat-color-primary mat-shadow-6dp\" >LOGIN</div>\n          <div class=\"divider\"></div>\n        \n      <mat-card-content>\n          <form class=\"user\" method=\"post\" name=\"register\" action=\"/login\" novalidate>\n\n            <div class=\"input-field col s6\">\n              <mat-form-field class=\"example-full-width\">\n                <span matPrefix></span>\n                <input name=\"Username\" matInput placeholder=\"User Name\" [(ngModel)]=\"login.Username\">\n                <mat-icon matSuffix>email</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"input-field col s6\">\n              <mat-form-field class=\"example-full-width\">\n                <span matPrefix></span>\n                <input name=\"password\" type=\"password\" matInput placeholder=\"Password\" required [(ngModel)]=\"login.password\">\n                <mat-icon matSuffix>https</mat-icon>\n              </mat-form-field>\n              </div>\n\n\n\n\n           <!--    <div class=\"input-field col s6\">\n                <mat-form-field class=\"example-full-width\">\n                  <span matPrefix></span>\n                  <input name=\"email\"  matInput placeholder=\"Email\" required [(ngModel)]=\"user.email\">\n                  <mat-icon matSuffix>https</mat-icon>\n                </mat-form-field>\n                </div>\n             <div>\n            <mat-card-actions>\n              <button mat-raised-button>Login</button>\n              \n              <button mat-button>Register</button>\n            </mat-card-actions>\n          </div> -->\n            <div class=\"mat-card-actions \">\n                <button  mat-raised-button type=\"submit\" (click)=\"logins()\">Register</button>\n                  </div>\n            </form>\n          </mat-card-content>\n          </div>\n        </div>\n    </div>\n  </mat-card> \n  </div>\n  \n  \n  <!--\n  <mat-card>\n      <div class=\"mat-card-title mat-color-primary mat-shadow-6dp\" >Register</div>\n      <mat-card-content>\n          <div class=\"input-field col s6\">  <input matInput placeholder=\"First Name\" [(ngModel)]=\"user.fname\"><br /> </div>\n            <div class=\"input-field col s6\">   <input matInput placeholder=\"Last Name\" [(ngModel)]=\"user.lname\"><br /> </div>\n              <div class=\"input-field col s6\">  <input matInput  placeholder=\"User Name\" [(ngModel)]=\"user.email\"><br /></div>\n                <div class=\"input-field col s6\">   <input matInput  placeholder=\"Password\" [(ngModel)]=\"user.password\"><br /></div>\n      </mat-card-content>\n      <mat-card-actions>\n          <button mat-button (click)=\"save()\">Register</button>\n      </mat-card-actions>\n  </mat-card>\n  -->\n<!--\n<div class=\"mat-layout\" ng-controller=\"formctrl\" ng-app=\"myApp\">\n<mat-card>\n\n        <div class=\"mat-card-title mat-color-primary mat-shadow-12dp\" >Sign In\n        <mat-card-content>\n                <form class=\"sup\" method=\"post\" action=\"/login\" >\n                        <div class=\"input-field col s6\">\n                            <mat-form-field class=\"example-full-width\">\n                              <span matPrefix></span>\n                              <input name=\"Username\" matInput placeholder=\"User Name\" [(ngModel)]=\"sup.Username\">\n                              <mat-icon matSuffix>person</mat-icon>\n                            </mat-form-field>\n                        </div> \n                        <div class=\"input-field col s6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <span matPrefix></span>\n                                  <input ng-model=\"uname\" name=\"password\" type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"sup.password\" required>\n                                  <mat-icon matSuffix>https</mat-icon>\n                                </mat-form-field>\n                               </div>\n                               <div class=\"mat-card-actions \">\n                                    <button mat-button><a routerLink=\"\">Forgot password?</a></button>\n                                    <button  mat-raised-button type=\"submit\" (click)=\"dial\">LOGIN</button>\n                                     </div>\n\n\n                 </form>\n\n\n\n\n        </mat-card-content>\n\n    </div>\n\n\n</mat-card>\n</div>\n\n-->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, http, router) {
        this.location = location;
        this.http = http;
        this.router = router;
        this.title = 'login';
        this.login = {
            'Username': '',
            'password': '',
        };
    }
    LoginComponent.prototype.logins = function () {
        var _this = this;
        if (this.login.Username && this.login.password) {
            console.log('submit Post click happend' + this.login);
            this.http.post('http://localhost:8080/login', JSON.stringify(this.login))
                .subscribe(function (result) {
                console.log('submit Post click happend ' + JSON.stringify(_this.login));
                _this.router.navigate(['/home']);
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */]
            ],
            exports: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ng-controller=\"formctrl\" ng-app=\"myApp\">\n\n<mat-card>\n<div class=\"container\">\n<div id=\"signup\">\n    <div class=\"signup-screen\">\n        <div class=\"mat-card-title mat-color-primary mat-shadow-6dp\" >Register</div>\n        <div class=\"divider\"></div>\n      \n    <mat-card-content>\n        <form class=\"user\" method=\"post\" name=\"register\" action=\"/register\" novalidate>\n           \n     <!--     <div class=\"input-field col s6\">\n          <mat-form-field class=\"example-full-width\">\n            <span matPrefix></span>\n            <input name=\"key\" matInput placeholder=\"First Name\" [(ngModel)]=\"user.key\">\n            <mat-icon matSuffix>person</mat-icon>\n          </mat-form-field>\n          </div>\n          <div class=\"input-field col s6\">\n            <mat-form-field class=\"example-full-width\">\n              <span matPrefix></span>\n              <input name=\"lname\" matInput placeholder=\"Last Name\" [(ngModel)]=\"user.lname\">\n              <mat-icon matSuffix>person</mat-icon>\n            </mat-form-field>\n            </div> -->\n          <div class=\"input-field col s6\">\n            <mat-form-field class=\"example-full-width\">\n              <span matPrefix></span>\n              <input name=\"Username\" matInput placeholder=\"User Name\" [(ngModel)]=\"user.Username\">\n              <mat-icon matSuffix>email</mat-icon>\n            </mat-form-field>\n          </div>\n          <div class=\"input-field col s6\">\n            <mat-form-field class=\"example-full-width\">\n              <span matPrefix></span>\n              <input name=\"password\" type=\"password\" matInput placeholder=\"Password\" required [(ngModel)]=\"user.password\">\n              <mat-icon matSuffix>https</mat-icon>\n            </mat-form-field>\n            </div>\n         <!--    <div class=\"input-field col s6\">\n              <mat-form-field class=\"example-full-width\">\n                <span matPrefix></span>\n                <input name=\"email\"  matInput placeholder=\"Email\" required [(ngModel)]=\"user.email\">\n                <mat-icon matSuffix>https</mat-icon>\n              </mat-form-field>\n              </div>\n           <div>\n          <mat-card-actions>\n            <button mat-raised-button>Login</button>\n            \n            <button mat-button>Register</button>\n          </mat-card-actions>\n        </div> -->\n          <div class=\"mat-card-actions \">\n              <button  mat-raised-button type=\"submit\" (click)=\"save()\">Register</button>\n                </div>\n          </form>\n        </mat-card-content>\n        </div>\n      </div>\n  </div>\n</mat-card> \n</div>\n\n\n<!--\n<mat-card>\n    <div class=\"mat-card-title mat-color-primary mat-shadow-6dp\" >Register</div>\n    <mat-card-content>\n        <div class=\"input-field col s6\">  <input matInput placeholder=\"First Name\" [(ngModel)]=\"user.fname\"><br /> </div>\n          <div class=\"input-field col s6\">   <input matInput placeholder=\"Last Name\" [(ngModel)]=\"user.lname\"><br /> </div>\n            <div class=\"input-field col s6\">  <input matInput  placeholder=\"User Name\" [(ngModel)]=\"user.email\"><br /></div>\n              <div class=\"input-field col s6\">   <input matInput  placeholder=\"Password\" [(ngModel)]=\"user.password\"><br /></div>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button (click)=\"save()\">Register</button>\n    </mat-card-actions>\n</mat-card>\n-->"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(location, http, router) {
        this.location = location;
        this.http = http;
        this.router = router;
        this.user = {
            'Username': '',
            'password': '',
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.save = function () {
        var _this = this;
        console.log('submit Post click happend' + this.user);
        this.http.post('http://localhost:8080/register', JSON.stringify(this.user))
            .subscribe(function (result) {
            console.log('submit Post click happend ' + JSON.stringify(_this.user));
            _this.router.navigate(['/login']);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map