import { __decorate, __awaiter, __generator } from 'tslib';
import { Injectable, EventEmitter, Input, Output, Component, HostBinding, HostListener, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var PlaidLinkHandler = /** @class */ (function () {
    /**
     * Constructor configures the Plaid Link handler with given config options.
     * @param PlaidConfig config
     */
    function PlaidLinkHandler(config) {
        this.plaidLink = Plaid.create(config);
    }
    /**
     * Open the Plaid Link window for this handler.
     * @param string institution The name of the institution to open
     */
    PlaidLinkHandler.prototype.open = function (institution) {
        this.plaidLink.open(institution);
    };
    /**
     * Closes the currently open Plaid Link window if any.
     */
    PlaidLinkHandler.prototype.exit = function () {
        this.plaidLink.exit();
    };
    return PlaidLinkHandler;
}());

var NgxPlaidLinkService = /** @class */ (function () {
    function NgxPlaidLinkService() {
    }
    /**
     * Create a Plaid Link instance as soon as Plaid Link has loaded.
     * @param PlaidConfig config
     * @returns Promise<PlaidLinkHandler>
     */
    NgxPlaidLinkService.prototype.createPlaid = function (config) {
        return this.loadPlaid().then(function () {
            return new PlaidLinkHandler(config);
        });
    };
    /**
     * Load or wait for the Plaid Link library to load.
     * @returns Promise<void>
     */
    NgxPlaidLinkService.prototype.loadPlaid = function () {
        if (!this.loaded) {
            this.loaded = new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js';
                script.onerror = function (e) { return reject(e); };
                if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            resolve();
                        }
                    };
                }
                else {
                    script.onload = function () {
                        resolve();
                    };
                }
                document.getElementsByTagName('body')[0].appendChild(script);
            });
        }
        return this.loaded;
    };
    NgxPlaidLinkService = __decorate([
        Injectable()
    ], NgxPlaidLinkService);
    return NgxPlaidLinkService;
}());

function getWindow() {
    return window;
}
var NgxPlaidLinkButtonComponent = /** @class */ (function () {
    function NgxPlaidLinkButtonComponent() {
        this.Event = new EventEmitter();
        this.Success = new EventEmitter();
        this.Click = new EventEmitter();
        this.Load = new EventEmitter();
        this.Exit = new EventEmitter();
        this.defaultProps = {
            apiVersion: "v2",
            env: "sandbox",
            institution: null,
            selectAccount: false,
            token: null,
            publicKey: null,
            webhook: "",
            product: ["auth"],
            countryCodes: ["US"],
            style: {
                "background-color": "#0085e4",
                "transition-duration": "350ms",
                "transition-property": "background-color, box-shadow",
                "transition-timing-function": "ease-in-out",
                "-webkit-appearance": "button",
                border: "0",
                "border-radius": "4px",
                "box-shadow": "0 2px 4px 0 rgba(0,0,0,0.1), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                color: "#fff",
                "font-size": "20px",
                height: "56px",
                outline: "0",
                "text-align": "center",
                "text-transform": "none",
                padding: "0 2em",
                cursor: "pointer"
            },
            buttonText: "Log In To Your Bank Account",
            className: "plaid-link-button",
        };
        this.publicKey = this.defaultProps.publicKey;
        this.apiVersion = this.defaultProps.apiVersion;
        this.env = this.defaultProps.env;
        this.institution = this.defaultProps.institution;
        this.product = this.defaultProps.product;
        this.selectAccount = this.defaultProps.selectAccount;
        this.token = this.defaultProps.token;
        this.webhook = this.defaultProps.webhook;
        this.countryCodes = this.defaultProps.countryCodes;
        this.style = this.defaultProps.style;
        this.buttonText = this.defaultProps.buttonText;
        this.className = this.defaultProps.className;
    }
    Object.defineProperty(NgxPlaidLinkButtonComponent.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    NgxPlaidLinkButtonComponent.prototype.onScriptError = function () {
        console.error("There was an issue loading the link-initialize.js script");
    };
    NgxPlaidLinkButtonComponent.prototype.onDirectiveSuccess = function (event) {
        this.Success.emit(event);
    };
    NgxPlaidLinkButtonComponent.prototype.onDirectiveExit = function (event) {
        this.Exit.emit(event);
    };
    NgxPlaidLinkButtonComponent.prototype.onDirectiveLoad = function (event) {
        this.Load.emit(event);
    };
    NgxPlaidLinkButtonComponent.prototype.onDirectiveEvent = function (event) {
        this.Event.emit(event);
    };
    NgxPlaidLinkButtonComponent.prototype.onDirectiveClick = function (event) {
        this.Click.emit(event);
    };
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "clientName", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkButtonComponent.prototype, "Event", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkButtonComponent.prototype, "Success", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkButtonComponent.prototype, "Click", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkButtonComponent.prototype, "Load", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkButtonComponent.prototype, "Exit", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "publicKey", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "apiVersion", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "env", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "institution", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "product", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "selectAccount", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "token", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "webhook", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "countryCodes", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "buttonText", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkButtonComponent.prototype, "className", void 0);
    NgxPlaidLinkButtonComponent = __decorate([
        Component({
            selector: "mr-ngx-plaid-link-button",
            template: "\n    <button ngxPlaidLink\n            [class]=\"className\"\n            [ngStyle]=\"style\"\n            [publicKey]=\"publicKey\"\n            [clientName]=\"clientName\"\n            [apiVersion]=\"apiVersion\"\n            [env]=\"env\"\n            [institution]=\"institution\"\n            [product]=\"product\"\n            [selectAccount]=\"selectAccount\"\n            [token]=\"token\"\n            [webhook]=\"webhook\"\n            [countryCodes]=\"countryCodes\"\n            (Success)=\"onDirectiveSuccess($event)\"\n            (Exit)=\"onDirectiveExit($event)\"\n            (Load)=\"onDirectiveLoad($event)\"\n            (Event)=\"onDirectiveEvent($event)\"\n            (Click)=\"onDirectiveClick($event)\"\n    >\n      {{ buttonText }}\n    </button>\n  "
        })
    ], NgxPlaidLinkButtonComponent);
    return NgxPlaidLinkButtonComponent;
}());

function getWindow$1() {
    return window;
}
var NgxPlaidLinkDirective = /** @class */ (function () {
    function NgxPlaidLinkDirective(plaidLinkLoader) {
        this.plaidLinkLoader = plaidLinkLoader;
        this.Event = new EventEmitter();
        this.Click = new EventEmitter();
        this.Load = new EventEmitter();
        this.Exit = new EventEmitter();
        this.Success = new EventEmitter();
        this.defaultProps = {
            apiVersion: "v2",
            env: "sandbox",
            institution: null,
            selectAccount: false,
            publicKey: null,
            token: null,
            webhook: "",
            product: ["auth"],
            countryCodes: ["US"]
        };
        this.publicKey = this.defaultProps.publicKey;
        this.apiVersion = this.defaultProps.apiVersion;
        this.env = this.defaultProps.env;
        this.institution = this.defaultProps.institution;
        this.product = this.defaultProps.product;
        this.selectAccount = this.defaultProps.selectAccount;
        this.token = this.defaultProps.token;
        this.webhook = this.defaultProps.webhook;
        this.countryCodes = this.defaultProps.countryCodes;
        this.disabledButton = true;
    }
    NgxPlaidLinkDirective.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handler;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plaidLinkLoader
                            .createPlaid({
                            env: this.env,
                            key: this.publicKey,
                            product: this.product,
                            apiVersion: "v2",
                            clientName: this.clientName,
                            countryCodes: this.countryCodes,
                            onSuccess: function (public_token, metadata) { return _this.onSuccess(public_token, metadata); },
                            onExit: function (err, metadata) { return _this.onExit(err, metadata); },
                            onEvent: function (eventName, metadata) { return _this.onEvent(eventName, metadata); },
                            onLoad: function () { return _this.onLoad(); },
                            selectAccount: this.selectAccount,
                            token: this.token || null,
                            webhook: this.webhook || null
                        })];
                    case 1:
                        handler = _a.sent();
                        this.disabledButton = false;
                        this.plaidLinkHandler = handler;
                        return [2 /*return*/];
                }
            });
        });
    };
    NgxPlaidLinkDirective.prototype.onExit = function (error, metadata) {
        this.Exit.emit({ error: error, metadata: metadata });
    };
    NgxPlaidLinkDirective.prototype.onEvent = function (eventName, metadata) {
        this.Event.emit({ eventName: eventName, metadata: metadata });
    };
    NgxPlaidLinkDirective.prototype.onSuccess = function (token, metadata) {
        this.Success.emit({ token: token, metadata: metadata });
    };
    NgxPlaidLinkDirective.prototype.onClick = function ($event) {
        this.Click.emit($event);
        // Open to a specific institution if necessary;
        var institution = this.institution || null;
        if (this.plaidLinkHandler) {
            this.plaidLinkHandler.open(institution);
        }
    };
    NgxPlaidLinkDirective.prototype.onLoad = function ($event) {
        if ($event === void 0) { $event = "link_loaded"; }
        this.Load.emit($event);
    };
    NgxPlaidLinkDirective.ctorParameters = function () { return [
        { type: NgxPlaidLinkService }
    ]; };
    __decorate([
        Output()
    ], NgxPlaidLinkDirective.prototype, "Event", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkDirective.prototype, "Click", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkDirective.prototype, "Load", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkDirective.prototype, "Exit", void 0);
    __decorate([
        Output()
    ], NgxPlaidLinkDirective.prototype, "Success", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "clientName", void 0);
    __decorate([
        HostBinding('disabled')
    ], NgxPlaidLinkDirective.prototype, "disabledButton", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "publicKey", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "apiVersion", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "env", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "institution", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "product", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "selectAccount", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "token", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "webhook", void 0);
    __decorate([
        Input()
    ], NgxPlaidLinkDirective.prototype, "countryCodes", void 0);
    __decorate([
        HostListener('click', ['$event'])
    ], NgxPlaidLinkDirective.prototype, "onClick", null);
    NgxPlaidLinkDirective = __decorate([
        Directive({
            selector: '[ngxPlaidLink]'
        })
    ], NgxPlaidLinkDirective);
    return NgxPlaidLinkDirective;
}());

var NgxPlaidLinkModule = /** @class */ (function () {
    function NgxPlaidLinkModule() {
    }
    NgxPlaidLinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: [
                NgxPlaidLinkService
            ],
            declarations: [NgxPlaidLinkButtonComponent, NgxPlaidLinkDirective],
            exports: [NgxPlaidLinkButtonComponent, NgxPlaidLinkDirective]
        })
    ], NgxPlaidLinkModule);
    return NgxPlaidLinkModule;
}());

/*
 * Public API Surface of ngx-plaid-link
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPlaidLinkButtonComponent, NgxPlaidLinkDirective, NgxPlaidLinkModule, NgxPlaidLinkService, PlaidLinkHandler };
//# sourceMappingURL=ngx-plaid-link.js.map
