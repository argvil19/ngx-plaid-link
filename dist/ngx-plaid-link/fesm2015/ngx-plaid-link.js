import { __decorate, __awaiter } from 'tslib';
import { Injectable, EventEmitter, Input, Output, Component, HostBinding, HostListener, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class PlaidLinkHandler {
    /**
     * Constructor configures the Plaid Link handler with given config options.
     * @param PlaidConfig config
     */
    constructor(config) {
        this.plaidLink = Plaid.create(config);
    }
    /**
     * Open the Plaid Link window for this handler.
     * @param string institution The name of the institution to open
     */
    open(institution) {
        this.plaidLink.open(institution);
    }
    /**
     * Closes the currently open Plaid Link window if any.
     */
    exit() {
        this.plaidLink.exit();
    }
}

let NgxPlaidLinkService = class NgxPlaidLinkService {
    constructor() { }
    /**
     * Create a Plaid Link instance as soon as Plaid Link has loaded.
     * @param PlaidConfig config
     * @returns Promise<PlaidLinkHandler>
     */
    createPlaid(config) {
        return this.loadPlaid().then(() => {
            return new PlaidLinkHandler(config);
        });
    }
    /**
     * Load or wait for the Plaid Link library to load.
     * @returns Promise<void>
     */
    loadPlaid() {
        if (!this.loaded) {
            this.loaded = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js';
                script.onerror = (e) => reject(e);
                if (script.readyState) {
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            resolve();
                        }
                    };
                }
                else {
                    script.onload = () => {
                        resolve();
                    };
                }
                document.getElementsByTagName('body')[0].appendChild(script);
            });
        }
        return this.loaded;
    }
};
NgxPlaidLinkService = __decorate([
    Injectable()
], NgxPlaidLinkService);

function getWindow() {
    return window;
}
let NgxPlaidLinkButtonComponent = class NgxPlaidLinkButtonComponent {
    constructor() {
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
    get nativeWindow() {
        return getWindow();
    }
    onScriptError() {
        console.error("There was an issue loading the link-initialize.js script");
    }
    onDirectiveSuccess(event) {
        this.Success.emit(event);
    }
    onDirectiveExit(event) {
        this.Exit.emit(event);
    }
    onDirectiveLoad(event) {
        this.Load.emit(event);
    }
    onDirectiveEvent(event) {
        this.Event.emit(event);
    }
    onDirectiveClick(event) {
        this.Click.emit(event);
    }
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
        template: `
    <button ngxPlaidLink
            [class]="className"
            [ngStyle]="style"
            [publicKey]="publicKey"
            [clientName]="clientName"
            [apiVersion]="apiVersion"
            [env]="env"
            [institution]="institution"
            [product]="product"
            [selectAccount]="selectAccount"
            [token]="token"
            [webhook]="webhook"
            [countryCodes]="countryCodes"
            (Success)="onDirectiveSuccess($event)"
            (Exit)="onDirectiveExit($event)"
            (Load)="onDirectiveLoad($event)"
            (Event)="onDirectiveEvent($event)"
            (Click)="onDirectiveClick($event)"
    >
      {{ buttonText }}
    </button>
  `
    })
], NgxPlaidLinkButtonComponent);

function getWindow$1() {
    return window;
}
let NgxPlaidLinkDirective = class NgxPlaidLinkDirective {
    constructor(plaidLinkLoader) {
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            let handler = yield this.plaidLinkLoader
                .createPlaid({
                env: this.env,
                key: this.publicKey,
                product: this.product,
                apiVersion: "v2",
                clientName: this.clientName,
                countryCodes: this.countryCodes,
                onSuccess: (public_token, metadata) => this.onSuccess(public_token, metadata),
                onExit: (err, metadata) => this.onExit(err, metadata),
                onEvent: (eventName, metadata) => this.onEvent(eventName, metadata),
                onLoad: () => this.onLoad(),
                selectAccount: this.selectAccount,
                token: this.token || null,
                webhook: this.webhook || null
            });
            this.disabledButton = false;
            this.plaidLinkHandler = handler;
        });
    }
    onExit(error, metadata) {
        this.Exit.emit({ error, metadata });
    }
    onEvent(eventName, metadata) {
        this.Event.emit({ eventName, metadata });
    }
    onSuccess(token, metadata) {
        this.Success.emit({ token, metadata });
    }
    onClick($event) {
        this.Click.emit($event);
        // Open to a specific institution if necessary;
        const institution = this.institution || null;
        if (this.plaidLinkHandler) {
            this.plaidLinkHandler.open(institution);
        }
    }
    onLoad($event = "link_loaded") {
        this.Load.emit($event);
    }
};
NgxPlaidLinkDirective.ctorParameters = () => [
    { type: NgxPlaidLinkService }
];
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

let NgxPlaidLinkModule = class NgxPlaidLinkModule {
};
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

/*
 * Public API Surface of ngx-plaid-link
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPlaidLinkButtonComponent, NgxPlaidLinkDirective, NgxPlaidLinkModule, NgxPlaidLinkService, PlaidLinkHandler };
//# sourceMappingURL=ngx-plaid-link.js.map
