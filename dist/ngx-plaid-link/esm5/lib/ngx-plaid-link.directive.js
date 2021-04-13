import { __awaiter, __decorate, __generator } from "tslib";
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { NgxPlaidLinkService } from './ngx-plaid-link.service';
function getWindow() {
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
export { NgxPlaidLinkDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBsYWlkLWxpbmsvIiwic291cmNlcyI6WyJsaWIvbmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFXRDtJQW1DRSwrQkFBb0IsZUFBb0M7UUFBcEMsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBbEM5QyxVQUFLLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsWUFBTyxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWpFLGlCQUFZLEdBQUc7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLFNBQVM7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUM7UUFFTyxjQUFTLEdBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDakQsZUFBVSxHQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFD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Z0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsc0JBQXNCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQWpEb0MsbUJBQW1COztJQWxDOUM7UUFBVCxNQUFNLEVBQUU7d0RBQTREO0lBQzNEO1FBQVQsTUFBTSxFQUFFO3dEQUErQztJQUM5QztRQUFULE1BQU0sRUFBRTt1REFBOEM7SUFDN0M7UUFBVCxNQUFNLEVBQUU7dURBQTBEO0lBQ3pEO1FBQVQsTUFBTSxFQUFFOzBEQUFnRTtJQUVoRTtRQUFSLEtBQUssRUFBRTs2REFBb0I7SUFHSDtRQUF4QixXQUFXLENBQUMsVUFBVSxDQUFDO2lFQUF5QjtJQWV4QztRQUFSLEtBQUssRUFBRTs0REFBa0Q7SUFDakQ7UUFBUixLQUFLLEVBQUU7NkRBQW9EO0lBQ25EO1FBQVIsS0FBSyxFQUFFO3NEQUFzQztJQUNyQztRQUFSLEtBQUssRUFBRTs4REFBc0Q7SUFDckQ7UUFBUixLQUFLLEVBQUU7MERBQXFEO0lBQ3BEO1FBQVIsS0FBSyxFQUFFO2dFQUEyRDtJQUMxRDtRQUFSLEtBQUssRUFBRTt3REFBMEM7SUFDekM7UUFBUixLQUFLLEVBQUU7MERBQThDO0lBQzdDO1FBQVIsS0FBSyxFQUFFOytEQUEwRDtJQXdDbEU7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBUWpDO0lBaEZVLHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7T0FDVyxxQkFBcUIsQ0FxRmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQXJGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhaWRMaW5rSGFuZGxlciB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmstaGFuZGxlcic7XG5pbXBvcnQge1xuICBQbGFpZEVycm9yTWV0YWRhdGEsXG4gIFBsYWlkRXJyb3JPYmplY3QsXG4gIFBsYWlkRXZlbnRNZXRhZGF0YSxcbiAgUGxhaWRPbkV2ZW50QXJncyxcbiAgUGxhaWRPbkV4aXRBcmdzLFxuICBQbGFpZE9uU3VjY2Vzc0FyZ3MsXG4gIFBsYWlkU3VjY2Vzc01ldGFkYXRhXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOZ3hQbGFpZExpbmtTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtcGxhaWQtbGluay5zZXJ2aWNlJztcblxuZnVuY3Rpb24gZ2V0V2luZG93KCk6IGFueSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFBsYWlkOiB7XG4gICAgY3JlYXRlOiBGdW5jdGlvbjtcbiAgfTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFBsYWlkTGlua10nXG59KVxuZXhwb3J0IGNsYXNzIE5neFBsYWlkTGlua0RpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBFdmVudDogRXZlbnRFbWl0dGVyPFBsYWlkT25FdmVudEFyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgTG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBFeGl0OiBFdmVudEVtaXR0ZXI8UGxhaWRPbkV4aXRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxQbGFpZE9uU3VjY2Vzc0FyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgXG5cbiAgQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkQnV0dG9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgcGxhaWRMaW5rSGFuZGxlcjogUGxhaWRMaW5rSGFuZGxlcjtcbiAgcHJpdmF0ZSBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBpVmVyc2lvbjogXCJ2MlwiLFxuICAgIGVudjogXCJzYW5kYm94XCIsXG4gICAgaW5zdGl0dXRpb246IG51bGwsXG4gICAgc2VsZWN0QWNjb3VudDogZmFsc2UsXG4gICAgcHVibGljS2V5OiBudWxsLFxuICAgIHRva2VuOiBudWxsLFxuICAgIHdlYmhvb2s6IFwiXCIsXG4gICAgcHJvZHVjdDogW1wiYXV0aFwiXSxcbiAgICBjb3VudHJ5Q29kZXM6IFtcIlVTXCJdXG4gIH07XG5cbiAgQElucHV0KCkgcHVibGljS2V5Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMucHVibGljS2V5O1xuICBASW5wdXQoKSBhcGlWZXJzaW9uPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuYXBpVmVyc2lvbjtcbiAgQElucHV0KCkgZW52Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuZW52O1xuICBASW5wdXQoKSBpbnN0aXR1dGlvbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmluc3RpdHV0aW9uO1xuICBASW5wdXQoKSBwcm9kdWN0PzogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZGVmYXVsdFByb3BzLnByb2R1Y3Q7XG4gIEBJbnB1dCgpIHNlbGVjdEFjY291bnQ/OiBib29sZWFuID0gdGhpcy5kZWZhdWx0UHJvcHMuc2VsZWN0QWNjb3VudDtcbiAgQElucHV0KCkgdG9rZW4/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy50b2tlbjtcbiAgQElucHV0KCkgd2ViaG9vaz86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLndlYmhvb2s7XG4gIEBJbnB1dCgpIGNvdW50cnlDb2Rlcz86IHN0cmluZ1tdID0gdGhpcy5kZWZhdWx0UHJvcHMuY291bnRyeUNvZGVzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhaWRMaW5rTG9hZGVyOiBOZ3hQbGFpZExpbmtTZXJ2aWNlKSB7XG4gICAgdGhpcy5kaXNhYmxlZEJ1dHRvbiA9IHRydWU7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBsZXQgaGFuZGxlcjogUGxhaWRMaW5rSGFuZGxlciA9IGF3YWl0IHRoaXMucGxhaWRMaW5rTG9hZGVyXG4gICAgICAuY3JlYXRlUGxhaWQoe1xuICAgICAgICBlbnY6IHRoaXMuZW52LFxuICAgICAgICBrZXk6IHRoaXMucHVibGljS2V5LFxuICAgICAgICBwcm9kdWN0OiB0aGlzLnByb2R1Y3QsXG4gICAgICAgIGFwaVZlcnNpb246IFwidjJcIixcbiAgICAgICAgY2xpZW50TmFtZTogdGhpcy5jbGllbnROYW1lLFxuICAgICAgICBjb3VudHJ5Q29kZXM6IHRoaXMuY291bnRyeUNvZGVzLFxuICAgICAgICBvblN1Y2Nlc3M6IChwdWJsaWNfdG9rZW4sIG1ldGFkYXRhKSA9PiB0aGlzLm9uU3VjY2VzcyhwdWJsaWNfdG9rZW4sIG1ldGFkYXRhKSxcbiAgICAgICAgb25FeGl0OiAoZXJyLCBtZXRhZGF0YSkgPT4gdGhpcy5vbkV4aXQoZXJyLCBtZXRhZGF0YSksXG4gICAgICAgIG9uRXZlbnQ6IChldmVudE5hbWUsIG1ldGFkYXRhKSA9PiB0aGlzLm9uRXZlbnQoZXZlbnROYW1lLCBtZXRhZGF0YSksXG4gICAgICAgIG9uTG9hZDogKCkgPT4gdGhpcy5vbkxvYWQoKSxcbiAgICAgICAgc2VsZWN0QWNjb3VudDogdGhpcy5zZWxlY3RBY2NvdW50LFxuICAgICAgICB0b2tlbjogdGhpcy50b2tlbiB8fCBudWxsLFxuICAgICAgICB3ZWJob29rOiB0aGlzLndlYmhvb2sgfHwgbnVsbFxuICAgICAgfSk7XG4gICAgdGhpcy5kaXNhYmxlZEJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMucGxhaWRMaW5rSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgb25FeGl0KGVycm9yOiBQbGFpZEVycm9yT2JqZWN0LCBtZXRhZGF0YTogUGxhaWRFcnJvck1ldGFkYXRhKSB7XG4gICAgdGhpcy5FeGl0LmVtaXQoe2Vycm9yLCBtZXRhZGF0YX0pO1xuICB9XG5cbiAgcHVibGljIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG1ldGFkYXRhOiBQbGFpZEV2ZW50TWV0YWRhdGEpIHtcbiAgICB0aGlzLkV2ZW50LmVtaXQoe2V2ZW50TmFtZSwgbWV0YWRhdGF9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1Y2Nlc3ModG9rZW46IHN0cmluZywgbWV0YWRhdGE6IFBsYWlkU3VjY2Vzc01ldGFkYXRhKSB7XG4gICAgdGhpcy5TdWNjZXNzLmVtaXQoe3Rva2VuLCBtZXRhZGF0YX0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKCRldmVudCkge1xuICAgIHRoaXMuQ2xpY2suZW1pdCgkZXZlbnQpO1xuICAgIC8vIE9wZW4gdG8gYSBzcGVjaWZpYyBpbnN0aXR1dGlvbiBpZiBuZWNlc3Nhcnk7XG4gICAgY29uc3QgaW5zdGl0dXRpb24gPSB0aGlzLmluc3RpdHV0aW9uIHx8IG51bGw7XG4gICAgaWYgKHRoaXMucGxhaWRMaW5rSGFuZGxlcikge1xuICAgICAgdGhpcy5wbGFpZExpbmtIYW5kbGVyLm9wZW4oaW5zdGl0dXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkxvYWQoJGV2ZW50ID0gXCJsaW5rX2xvYWRlZFwiKSB7XG4gICAgdGhpcy5Mb2FkLmVtaXQoJGV2ZW50KTtcbiAgfVxufVxuIl19