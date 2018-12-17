(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree\n    [dataSource]=\"dataSource\"\n    [treeControl]=\"treeControl\"\n>\n    <mat-tree-node\n        *matTreeNodeDef=\"let node\"\n        matTreeNodeToggle\n        matTreeNodePadding\n    >\n        {{node.filename}}\n    </mat-tree-node>\n\n    <mat-tree-node\n        *matTreeNodeDef=\"let node;when: hasChild\"\n        matTreeNodePadding\n    >\n        <button\n            mat-icon-button\n            matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n        >\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        {{node.filename}}\n    </mat-tree-node>\n</mat-tree>\n\n<mat-tree\n    [dataSource]=\"secondDataSource\"\n    [treeControl]=\"treeControl\"\n>\n    <mat-tree-node\n        *matTreeNodeDef=\"let node\"\n        matTreeNodeToggle\n        matTreeNodePadding\n    >\n        {{node.filename}}\n    </mat-tree-node>\n\n    <mat-tree-node\n        *matTreeNodeDef=\"let node;when: hasChild\"\n        matTreeNodePadding\n    >\n        <button\n            mat-icon-button\n            matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n        >\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        {{node.filename}}\n    </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  outline: none;\n  border-color: transparent; }\n\n.mat-tree {\n  width: 50%; }\n\n.mat-tree:first-of-type {\n  float: left; }\n\n.mat-tree:last-of-type {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90eHVzby9Eb2N1bWVudHMvUHJveWVjdHMvdHJlZS10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYTtFQUNiLDBCQUF5QixFQUN6Qjs7QUFFRDtFQUNDLFdBQVUsRUFDVjs7QUFFRDtFQUNDLFlBQVcsRUFDWDs7QUFDRDtFQUNDLGFBQVksRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtdHJlZSB7XG5cdHdpZHRoOiA1MCU7XG59XG5cbi5tYXQtdHJlZTpmaXJzdC1vZi10eXBlIHtcblx0ZmxvYXQ6IGxlZnQ7XG59XG4ubWF0LXRyZWU6bGFzdC1vZi10eXBlIHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: FileNode, FileFlatNode, FileDatabase, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");





/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = JSON.stringify({
    Dashboard: 'png',
    Calendar: {
        'Aircraft and Crew Calendar': ''
    },
    Trips: {
        'Create Trip': 'png',
        'Trips List': {
            'Trip Details': {
                'Trip Summary': 'dir',
                'Legs List': {
                    'Leg Details': {
                        'Leg Summary': {
                            'Pax Details': {
                                APIS: 'dir'
                            },
                            'Services Details': 'dir',
                            'Permits Details': 'dir'
                        },
                        Airports: 'dir',
                        'Feasibility Checks': {
                            'Crew Feasibility': 'dir',
                            'Aircraft Feasibility': 'dir'
                        },
                        Alerts: 'dir',
                        'Leg Preparation': {
                            'Fuel on Board': 'dir',
                            Payload: 'dir',
                            Performance: 'dir',
                            'Weight & Balance': 'dir',
                            'Weather/NOTAMs, Weather Brief': 'dir'
                        },
                        Routes: {
                            'SkyVector Map': 'dir',
                            'Router to Alternates': 'dir',
                            'Select Route': 'dir',
                            'Save Routes/Custom Stored Routes': 'dir',
                            'ETOPS/ETP': 'dir',
                            'Route Optimize': 'dir',
                            CDR: 'dir',
                            'Routing: Full List of Route Options': 'dir',
                            'Military Requirements for Flight Planning': 'dir'
                        },
                        'Filing Flight Plan': {
                            'Notification Filing': 'dir',
                            'Flight Plan (PDF)': {
                                'Notifitacion EDCT/CTOT': 'dir',
                                'Notifitacion PDC/DCL (PDF)': 'dir'
                            }
                        },
                        Safety: {
                            'FRAT FLight Risk Assessment Tool': 'dir',
                            'Flight Risk (link to 3rd party)': 'dir'
                        }
                    }
                },
                'Edit Trip': 'dir',
                'Slot Reservation': 'dir',
                'Runwat Analysis': 'dir',
                'Flight Brief': {
                    'Intelligence Brief': 'dir',
                    'Flight Risk Summary': 'dir',
                    'Fax/Email Package': 'dir',
                    'Package Status': 'dir',
                    'FAA Perti Document': 'dir',
                    'Informative Leg PDF Documents': 'dir',
                    GENDEC: 'dir'
                },
                'Schedule Crew': 'dir',
                Pax: {
                    'Add Passengers': 'dir',
                    'Passengers Details': 'dir'
                },
                Fuel: {
                    Tankering: 'dir',
                    'Fuel Planner': 'dir',
                    'Fuel Guzzlers': 'dir'
                },
                Services: {
                    'Cost Paramenters': 'dir'
                },
                Permits: 'dir'
            }
        }
    },
    Aircraft: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    },
    Airports: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    },
    'Document Manager': 'png',
    Directory: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    },
    'Messages Datalink': 'png'
});
var SECOND_TREE_DATA = JSON.stringify({
    Settings: {
        'User Profile': 'png',
        'User Preferences': 'png',
        'Roles/permissions': 'png',
        'RolesLog Out': 'png'
    },
    Chat: 'png',
    Feedback: 'png',
    'Track FLights': 'png',
    'Weather Videos': 'png',
    Notifications: 'png'
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.secondDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        var secondDataObject = JSON.parse(SECOND_TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        var secondData = this.buildFileTree(secondDataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
        this.secondDataChange.next(secondData);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(database) {
        var _this = this;
        this.title = 'tree-test';
        this.transformer = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.secondDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) { return (_this.dataSource.data = data); });
        database.secondDataChange.subscribe(function (secondData) { return (_this.secondDataSource.data = secondData); });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [FileDatabase],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FileDatabase])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _pages__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.module */ "./src/app/pages/pages.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return _pages_module__WEBPACK_IMPORTED_MODULE_0__["PagesModule"]; });

// MODULE



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/shared/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/app/shared/components/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [],
            declarations: [___WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"]],
            providers: [],
            exports: [___WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/example/example.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/example/example.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Example works!</p>\n"

/***/ }),

/***/ "./src/app/shared/components/example/example.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/example/example.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/example/example.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/example/example.component.ts ***!
  \****************************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
    }
    ExampleComponent.prototype.ngOnInit = function () { };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/shared/components/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/shared/components/example/example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example/example.component */ "./src/app/shared/components/example/example.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return _example_example_component__WEBPACK_IMPORTED_MODULE_0__["ExampleComponent"]; });




/***/ }),

/***/ "./src/app/shared/constants/entity/example.constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/entity/example.constants.ts ***!
  \**************************************************************/
/*! exports provided: EXAMPLE_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_CONSTANTS", function() { return EXAMPLE_CONSTANTS; });
var EXAMPLE_CONSTANTS = /** @class */ (function () {
    function EXAMPLE_CONSTANTS() {
    }
    EXAMPLE_CONSTANTS.FOO = 'foo';
    return EXAMPLE_CONSTANTS;
}());



/***/ }),

/***/ "./src/app/shared/constants/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: EXAMPLE_CONSTANTS, COMMON_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity_example_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/example.constants */ "./src/app/shared/constants/entity/example.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_CONSTANTS", function() { return _entity_example_constants__WEBPACK_IMPORTED_MODULE_0__["EXAMPLE_CONSTANTS"]; });

/* harmony import */ var _shared_common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/common.constants */ "./src/app/shared/constants/shared/common.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return _shared_common_constants__WEBPACK_IMPORTED_MODULE_1__["COMMON_CONSTANTS"]; });

// ENTITY

// SHARED



/***/ }),

/***/ "./src/app/shared/constants/shared/common.constants.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/constants/shared/common.constants.ts ***!
  \*************************************************************/
/*! exports provided: COMMON_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return COMMON_CONSTANTS; });
var COMMON_CONSTANTS = /** @class */ (function () {
    function COMMON_CONSTANTS() {
    }
    COMMON_CONSTANTS.FOO = 'foo';
    return COMMON_CONSTANTS;
}());



/***/ }),

/***/ "./src/app/shared/directives/directives.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/app/shared/directives/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [],
            declarations: [___WEBPACK_IMPORTED_MODULE_1__["ExampleDirective"]],
            providers: [],
            exports: [___WEBPACK_IMPORTED_MODULE_1__["ExampleDirective"]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/example.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/example.directive.ts ***!
  \********************************************************/
/*! exports provided: ExampleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDirective", function() { return ExampleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleDirective = /** @class */ (function () {
    function ExampleDirective() {
    }
    ExampleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appExample]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleDirective);
    return ExampleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/directives/index.ts ***!
  \********************************************/
/*! exports provided: ExampleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.directive */ "./src/app/shared/directives/example.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleDirective", function() { return _example_directive__WEBPACK_IMPORTED_MODULE_0__["ExampleDirective"]; });




/***/ }),

/***/ "./src/app/shared/helpers/entity/example.helper.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/helpers/entity/example.helper.ts ***!
  \*********************************************************/
/*! exports provided: ExampleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHelper", function() { return ExampleHelper; });
var ExampleHelper = /** @class */ (function () {
    function ExampleHelper() {
    }
    ExampleHelper.privateMethod = function () {
        // code
    };
    ExampleHelper.publicMethod = function () {
        // code
    };
    return ExampleHelper;
}());



/***/ }),

/***/ "./src/app/shared/helpers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/index.ts ***!
  \*****************************************/
/*! exports provided: ExampleHelper, VerticalEaseInEaseOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity_example_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/example.helper */ "./src/app/shared/helpers/entity/example.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleHelper", function() { return _entity_example_helper__WEBPACK_IMPORTED_MODULE_0__["ExampleHelper"]; });

/* harmony import */ var _shared_animations_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animations.helper */ "./src/app/shared/helpers/shared/animations.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalEaseInEaseOutAnimation", function() { return _shared_animations_helper__WEBPACK_IMPORTED_MODULE_1__["VerticalEaseInEaseOutAnimation"]; });

// ENTITY

// SHARED



/***/ }),

/***/ "./src/app/shared/helpers/shared/animations.helper.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/helpers/shared/animations.helper.ts ***!
  \************************************************************/
/*! exports provided: VerticalEaseInEaseOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalEaseInEaseOutAnimation", function() { return VerticalEaseInEaseOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var VerticalEaseInEaseOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('verticalEaseInEaseOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                height: 0,
                'padding-bottom': 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                height: 0,
                'padding-bottom': 0
            }))
        ])
    ])
];


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, ExampleModel, FormModel, ExampleService, CommonService, ExampleComponent, ExampleDirective, ExamplePipe, ExampleHelper, EXAMPLE_CONSTANTS, COMMON_CONSTANTS, VerticalEaseInEaseOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/shared/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["ExampleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["FormModel"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ExampleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CommonService"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives */ "./src/app/shared/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_3__["ExampleDirective"]; });

/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamplePipe", function() { return _pipes__WEBPACK_IMPORTED_MODULE_4__["ExamplePipe"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/app/shared/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["ExampleHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalEaseInEaseOutAnimation", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["VerticalEaseInEaseOutAnimation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/app/shared/constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_CONSTANTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_6__["EXAMPLE_CONSTANTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_6__["COMMON_CONSTANTS"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]; });








// MODULE



/***/ }),

/***/ "./src/app/shared/models/entity/example.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/entity/example.model.ts ***!
  \*******************************************************/
/*! exports provided: ExampleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModel", function() { return ExampleModel; });
var ExampleModel = /** @class */ (function () {
    function ExampleModel() {
    }
    return ExampleModel;
}());



/***/ }),

/***/ "./src/app/shared/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: ExampleModel, FormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity_example_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/example.model */ "./src/app/shared/models/entity/example.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleModel", function() { return _entity_example_model__WEBPACK_IMPORTED_MODULE_0__["ExampleModel"]; });

/* harmony import */ var _shared_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/form.model */ "./src/app/shared/models/shared/form.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return _shared_form_model__WEBPACK_IMPORTED_MODULE_1__["FormModel"]; });

// ENTITY

// SHARED



/***/ }),

/***/ "./src/app/shared/models/shared/form.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/shared/form.model.ts ***!
  \****************************************************/
/*! exports provided: FormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return FormModel; });
var FormModel = /** @class */ (function () {
    function FormModel() {
    }
    return FormModel;
}());



/***/ }),

/***/ "./src/app/shared/pipes/example.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/example.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExamplePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePipe", function() { return ExamplePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplePipe = /** @class */ (function () {
    function ExamplePipe() {
    }
    ExamplePipe.prototype.transform = function (value, args) {
        return null;
    };
    ExamplePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'example'
        })
    ], ExamplePipe);
    return ExamplePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: ExamplePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.pipe */ "./src/app/shared/pipes/example.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamplePipe", function() { return _example_pipe__WEBPACK_IMPORTED_MODULE_0__["ExamplePipe"]; });




/***/ }),

/***/ "./src/app/shared/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [___WEBPACK_IMPORTED_MODULE_1__["ExamplePipe"]]
        };
    };
    var PipesModule_1;
    PipesModule = PipesModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [],
            declarations: [___WEBPACK_IMPORTED_MODULE_1__["ExamplePipe"]],
            providers: [],
            exports: [___WEBPACK_IMPORTED_MODULE_1__["ExamplePipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/shared/services/api/example.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/api/example.service.ts ***!
  \********************************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleService = /** @class */ (function () {
    function ExampleService() {
    }
    ExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleService);
    return ExampleService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ExampleService, CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_example_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/example.service */ "./src/app/shared/services/api/example.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return _api_example_service__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]; });

/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/common.service */ "./src/app/shared/services/shared/common.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return _shared_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]; });

// API

// SHARED



/***/ }),

/***/ "./src/app/shared/services/services.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/services.module.ts ***!
  \****************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule_1 = ServicesModule;
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: [___WEBPACK_IMPORTED_MODULE_1__["ExampleService"], ___WEBPACK_IMPORTED_MODULE_1__["CommonService"]]
        };
    };
    var ServicesModule_1;
    ServicesModule = ServicesModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [],
            declarations: [],
            providers: [],
            exports: []
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/shared/services/shared/common.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/shared/common.service.ts ***!
  \**********************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/directives.module */ "./src/app/shared/directives/directives.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.module */ "./src/app/shared/services/services.module.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"].forRoot(), _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"].forRoot()],
            declarations: [],
            providers: [],
            exports: [_directives_directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/txuso/Documents/Proyects/tree-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map