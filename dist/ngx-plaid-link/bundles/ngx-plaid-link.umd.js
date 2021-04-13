(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-plaid-link', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-plaid-link'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            core.Injectable()
        ], NgxPlaidLinkService);
        return NgxPlaidLinkService;
    }());

    function getWindow() {
        return window;
    }
    var NgxPlaidLinkButtonComponent = /** @class */ (function () {
        function NgxPlaidLinkButtonComponent() {
            this.Event = new core.EventEmitter();
            this.Success = new core.EventEmitter();
            this.Click = new core.EventEmitter();
            this.Load = new core.EventEmitter();
            this.Exit = new core.EventEmitter();
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
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "clientName", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkButtonComponent.prototype, "Event", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkButtonComponent.prototype, "Success", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkButtonComponent.prototype, "Click", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkButtonComponent.prototype, "Load", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkButtonComponent.prototype, "Exit", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "publicKey", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "apiVersion", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "env", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "institution", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "product", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "selectAccount", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "token", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "webhook", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "countryCodes", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "buttonText", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkButtonComponent.prototype, "className", void 0);
        NgxPlaidLinkButtonComponent = __decorate([
            core.Component({
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
            this.Event = new core.EventEmitter();
            this.Click = new core.EventEmitter();
            this.Load = new core.EventEmitter();
            this.Exit = new core.EventEmitter();
            this.Success = new core.EventEmitter();
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
            core.Output()
        ], NgxPlaidLinkDirective.prototype, "Event", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkDirective.prototype, "Click", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkDirective.prototype, "Load", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkDirective.prototype, "Exit", void 0);
        __decorate([
            core.Output()
        ], NgxPlaidLinkDirective.prototype, "Success", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "clientName", void 0);
        __decorate([
            core.HostBinding('disabled')
        ], NgxPlaidLinkDirective.prototype, "disabledButton", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "publicKey", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "apiVersion", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "env", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "institution", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "product", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "selectAccount", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "token", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "webhook", void 0);
        __decorate([
            core.Input()
        ], NgxPlaidLinkDirective.prototype, "countryCodes", void 0);
        __decorate([
            core.HostListener('click', ['$event'])
        ], NgxPlaidLinkDirective.prototype, "onClick", null);
        NgxPlaidLinkDirective = __decorate([
            core.Directive({
                selector: '[ngxPlaidLink]'
            })
        ], NgxPlaidLinkDirective);
        return NgxPlaidLinkDirective;
    }());

    var NgxPlaidLinkModule = /** @class */ (function () {
        function NgxPlaidLinkModule() {
        }
        NgxPlaidLinkModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
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

    exports.NgxPlaidLinkButtonComponent = NgxPlaidLinkButtonComponent;
    exports.NgxPlaidLinkDirective = NgxPlaidLinkDirective;
    exports.NgxPlaidLinkModule = NgxPlaidLinkModule;
    exports.NgxPlaidLinkService = NgxPlaidLinkService;
    exports.PlaidLinkHandler = PlaidLinkHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-plaid-link.umd.js.map
