import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
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
export { NgxPlaidLinkButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmstYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkUsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE2QkQ7SUFxREU7UUFsRFUsVUFBSyxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNELFlBQU8sR0FBcUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxpQkFBWSxHQUFHO1lBQ3JCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IscUJBQXFCLEVBQUUsT0FBTztnQkFDOUIscUJBQXFCLEVBQUUsOEJBQThCO2dCQUNyRCw0QkFBNEIsRUFBRSxhQUFhO2dCQUMzQyxvQkFBb0IsRUFBRSxRQUFRO2dCQUM5QixNQUFNLEVBQUUsR0FBRztnQkFDWCxlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxF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N0M7UUFBUixLQUFLLEVBQUU7cUVBQTBEO0lBQ3pEO1FBQVIsS0FBSyxFQUFFOzhEQUF1QztJQUN0QztRQUFSLEtBQUssRUFBRTttRUFBb0Q7SUFDbkQ7UUFBUixLQUFLLEVBQUU7a0VBQWtEO0lBbkQvQywyQkFBMkI7UUEzQnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLDR3QkFzQlQ7U0FFRixDQUFDO09BQ1csMkJBQTJCLENBa0Z2QztJQUFELGtDQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FsRlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhaWRPbkV2ZW50QXJncywgUGxhaWRPbkV4aXRBcmdzLCBQbGFpZE9uU3VjY2Vzc0FyZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUN1c3RvbVdpbmRvdyB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlJztcblxuZnVuY3Rpb24gZ2V0V2luZG93KCk6IGFueSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtci1uZ3gtcGxhaWQtbGluay1idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIG5neFBsYWlkTGlua1xuICAgICAgICAgICAgW2NsYXNzXT1cImNsYXNzTmFtZVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICBbcHVibGljS2V5XT1cInB1YmxpY0tleVwiXG4gICAgICAgICAgICBbY2xpZW50TmFtZV09XCJjbGllbnROYW1lXCJcbiAgICAgICAgICAgIFthcGlWZXJzaW9uXT1cImFwaVZlcnNpb25cIlxuICAgICAgICAgICAgW2Vudl09XCJlbnZcIlxuICAgICAgICAgICAgW2luc3RpdHV0aW9uXT1cImluc3RpdHV0aW9uXCJcbiAgICAgICAgICAgIFtwcm9kdWN0XT1cInByb2R1Y3RcIlxuICAgICAgICAgICAgW3NlbGVjdEFjY291bnRdPVwic2VsZWN0QWNjb3VudFwiXG4gICAgICAgICAgICBbdG9rZW5dPVwidG9rZW5cIlxuICAgICAgICAgICAgW3dlYmhvb2tdPVwid2ViaG9va1wiXG4gICAgICAgICAgICBbY291bnRyeUNvZGVzXT1cImNvdW50cnlDb2Rlc1wiXG4gICAgICAgICAgICAoU3VjY2Vzcyk9XCJvbkRpcmVjdGl2ZVN1Y2Nlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXhpdCk9XCJvbkRpcmVjdGl2ZUV4aXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoTG9hZCk9XCJvbkRpcmVjdGl2ZUxvYWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXZlbnQpPVwib25EaXJlY3RpdmVFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChDbGljayk9XCJvbkRpcmVjdGl2ZUNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpIEV2ZW50OiBFdmVudEVtaXR0ZXI8UGxhaWRPbkV2ZW50QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBTdWNjZXNzOiBFdmVudEVtaXR0ZXI8UGxhaWRPblN1Y2Nlc3NBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIExvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgRXhpdDogRXZlbnRFbWl0dGVyPFBsYWlkT25FeGl0QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwaVZlcnNpb246IFwidjJcIixcbiAgICBlbnY6IFwic2FuZGJveFwiLFxuICAgIGluc3RpdHV0aW9uOiBudWxsLFxuICAgIHNlbGVjdEFjY291bnQ6IGZhbHNlLFxuICAgIHRva2VuOiBudWxsLFxuICAgIHB1YmxpY0tleTogbnVsbCxcbiAgICB3ZWJob29rOiBcIlwiLFxuICAgIHByb2R1Y3Q6IFtcImF1dGhcIl0sXG4gICAgY291bnRyeUNvZGVzOiBbXCJVU1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzAwODVlNFwiLFxuICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiMzUwbXNcIixcbiAgICAgIFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiOiBcImJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3dcIixcbiAgICAgIFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgICAgXCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJidXR0b25cIixcbiAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI0cHhcIixcbiAgICAgIFwiYm94LXNoYWRvd1wiOlxuICAgICAgICBcIjAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKSwgaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgb3V0bGluZTogXCIwXCIsXG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjogXCJub25lXCIsXG4gICAgICBwYWRkaW5nOiBcIjAgMmVtXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiBcIkxvZyBJbiBUbyBZb3VyIEJhbmsgQWNjb3VudFwiLFxuICAgIGNsYXNzTmFtZTogXCJwbGFpZC1saW5rLWJ1dHRvblwiLFxuICB9O1xuICBASW5wdXQoKSBwdWJsaWNLZXk/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5wdWJsaWNLZXk7XG4gIEBJbnB1dCgpIGFwaVZlcnNpb24/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5hcGlWZXJzaW9uO1xuICBASW5wdXQoKSBlbnY/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5lbnY7XG4gIEBJbnB1dCgpIGluc3RpdHV0aW9uPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuaW5zdGl0dXRpb247XG4gIEBJbnB1dCgpIHByb2R1Y3Q/OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5kZWZhdWx0UHJvcHMucHJvZHVjdDtcbiAgQElucHV0KCkgc2VsZWN0QWNjb3VudD86IGJvb2xlYW4gPSB0aGlzLmRlZmF1bHRQcm9wcy5zZWxlY3RBY2NvdW50O1xuICBASW5wdXQoKSB0b2tlbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLnRva2VuO1xuICBASW5wdXQoKSB3ZWJob29rPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMud2ViaG9vaztcbiAgQElucHV0KCkgY291bnRyeUNvZGVzPzogc3RyaW5nW10gPSB0aGlzLmRlZmF1bHRQcm9wcy5jb3VudHJ5Q29kZXM7XG4gIEBJbnB1dCgpIHN0eWxlPzogYW55ID0gdGhpcy5kZWZhdWx0UHJvcHMuc3R5bGU7XG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5idXR0b25UZXh0O1xuICBASW5wdXQoKSBjbGFzc05hbWU/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5jbGFzc05hbWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBuYXRpdmVXaW5kb3coKTogSUN1c3RvbVdpbmRvdyB7XG4gICAgcmV0dXJuIGdldFdpbmRvdygpO1xuICB9XG5cbiAgb25TY3JpcHRFcnJvcigpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGlzc3VlIGxvYWRpbmcgdGhlIGxpbmstaW5pdGlhbGl6ZS5qcyBzY3JpcHRcIik7XG4gIH1cblxuICBvbkRpcmVjdGl2ZVN1Y2Nlc3MoZXZlbnQ6IFBsYWlkT25TdWNjZXNzQXJncykge1xuICAgIHRoaXMuU3VjY2Vzcy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGlyZWN0aXZlRXhpdChldmVudDogUGxhaWRPbkV4aXRBcmdzKSB7XG4gICAgdGhpcy5FeGl0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVMb2FkKGV2ZW50KSB7XG4gICAgdGhpcy5Mb2FkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVFdmVudChldmVudDogUGxhaWRPbkV2ZW50QXJncykge1xuICAgIHRoaXMuRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkRpcmVjdGl2ZUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19