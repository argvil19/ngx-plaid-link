import { __awaiter, __decorate } from "tslib";
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { NgxPlaidLinkService } from './ngx-plaid-link.service';
function getWindow() {
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
export { NgxPlaidLinkDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBsYWlkLWxpbmsvIiwic291cmNlcyI6WyJsaWIvbmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFXRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQW1DaEMsWUFBb0IsZUFBb0M7UUFBcEMsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBbEM5QyxVQUFLLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsWUFBTyxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWpFLGlCQUFZLEdBQUc7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLFNBQVM7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3JCLENBQUM7UUFFTyxjQUFTLEdBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDakQsZUFBVSxHQUFZ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QUFHLGFBQWE7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7O1lBbERzQyxtQkFBbUI7O0FBbEM5QztJQUFULE1BQU0sRUFBRTtvREFBNEQ7QUFDM0Q7SUFBVCxNQUFNLEVBQUU7b0RBQStDO0FBQzlDO0lBQVQsTUFBTSxFQUFFO21EQUE4QztBQUM3QztJQUFULE1BQU0sRUFBRTttREFBMEQ7QUFDekQ7SUFBVCxNQUFNLEVBQUU7c0RBQWdFO0FBRWhFO0lBQVIsS0FBSyxFQUFFO3lEQUFvQjtBQUdIO0lBQXhCLFdBQVcsQ0FBQyxVQUFVLENBQUM7NkRBQXlCO0FBZXhDO0lBQVIsS0FBSyxFQUFFO3dEQUFrRDtBQUNqRDtJQUFSLEtBQUssRUFBRTt5REFBb0Q7QUFDbkQ7SUFBUixLQUFLLEVBQUU7a0RBQXNDO0FBQ3JDO0lBQVIsS0FBSyxFQUFFOzBEQUFzRDtBQUNyRDtJQUFSLEtBQUssRUFBRTtzREFBcUQ7QUFDcEQ7SUFBUixLQUFLLEVBQUU7NERBQTJEO0FBQzFEO0lBQVIsS0FBSyxFQUFFO29EQUEwQztBQUN6QztJQUFSLEtBQUssRUFBRTtzREFBOEM7QUFDN0M7SUFBUixLQUFLLEVBQUU7MkRBQTBEO0FBd0NsRTtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvREFRakM7QUFoRlUscUJBQXFCO0lBSGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQztHQUNXLHFCQUFxQixDQXFGakM7U0FyRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYWlkTGlua0hhbmRsZXIgfSBmcm9tICcuL25neC1wbGFpZC1saW5rLWhhbmRsZXInO1xuaW1wb3J0IHtcbiAgUGxhaWRFcnJvck1ldGFkYXRhLFxuICBQbGFpZEVycm9yT2JqZWN0LFxuICBQbGFpZEV2ZW50TWV0YWRhdGEsXG4gIFBsYWlkT25FdmVudEFyZ3MsXG4gIFBsYWlkT25FeGl0QXJncyxcbiAgUGxhaWRPblN1Y2Nlc3NBcmdzLFxuICBQbGFpZFN1Y2Nlc3NNZXRhZGF0YVxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmd4UGxhaWRMaW5rU2VydmljZSB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmsuc2VydmljZSc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvdygpOiBhbnkge1xuICByZXR1cm4gd2luZG93O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21XaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBQbGFpZDoge1xuICAgIGNyZWF0ZTogRnVuY3Rpb247XG4gIH07XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hQbGFpZExpbmtdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtEaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgRXZlbnQ6IEV2ZW50RW1pdHRlcjxQbGFpZE9uRXZlbnRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIExvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgRXhpdDogRXZlbnRFbWl0dGVyPFBsYWlkT25FeGl0QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBTdWNjZXNzOiBFdmVudEVtaXR0ZXI8UGxhaWRPblN1Y2Nlc3NBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBjbGllbnROYW1lOiBzdHJpbmc7XG4gIFxuXG4gIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZEJ1dHRvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIHBsYWlkTGlua0hhbmRsZXI6IFBsYWlkTGlua0hhbmRsZXI7XG4gIHByaXZhdGUgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwaVZlcnNpb246IFwidjJcIixcbiAgICBlbnY6IFwic2FuZGJveFwiLFxuICAgIGluc3RpdHV0aW9uOiBudWxsLFxuICAgIHNlbGVjdEFjY291bnQ6IGZhbHNlLFxuICAgIHB1YmxpY0tleTogbnVsbCxcbiAgICB0b2tlbjogbnVsbCxcbiAgICB3ZWJob29rOiBcIlwiLFxuICAgIHByb2R1Y3Q6IFtcImF1dGhcIl0sXG4gICAgY291bnRyeUNvZGVzOiBbXCJVU1wiXVxuICB9O1xuXG4gIEBJbnB1dCgpIHB1YmxpY0tleT86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLnB1YmxpY0tleTtcbiAgQElucHV0KCkgYXBpVmVyc2lvbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmFwaVZlcnNpb247XG4gIEBJbnB1dCgpIGVudj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmVudjtcbiAgQElucHV0KCkgaW5zdGl0dXRpb24/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5pbnN0aXR1dGlvbjtcbiAgQElucHV0KCkgcHJvZHVjdD86IEFycmF5PHN0cmluZz4gPSB0aGlzLmRlZmF1bHRQcm9wcy5wcm9kdWN0O1xuICBASW5wdXQoKSBzZWxlY3RBY2NvdW50PzogYm9vbGVhbiA9IHRoaXMuZGVmYXVsdFByb3BzLnNlbGVjdEFjY291bnQ7XG4gIEBJbnB1dCgpIHRva2VuPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMudG9rZW47XG4gIEBJbnB1dCgpIHdlYmhvb2s/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy53ZWJob29rO1xuICBASW5wdXQoKSBjb3VudHJ5Q29kZXM/OiBzdHJpbmdbXSA9IHRoaXMuZGVmYXVsdFByb3BzLmNvdW50cnlDb2RlcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYWlkTGlua0xvYWRlcjogTmd4UGxhaWRMaW5rU2VydmljZSkge1xuICAgIHRoaXMuZGlzYWJsZWRCdXR0b24gPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgbGV0IGhhbmRsZXI6IFBsYWlkTGlua0hhbmRsZXIgPSBhd2FpdCB0aGlzLnBsYWlkTGlua0xvYWRlclxuICAgICAgLmNyZWF0ZVBsYWlkKHtcbiAgICAgICAgZW52OiB0aGlzLmVudixcbiAgICAgICAga2V5OiB0aGlzLnB1YmxpY0tleSxcbiAgICAgICAgcHJvZHVjdDogdGhpcy5wcm9kdWN0LFxuICAgICAgICBhcGlWZXJzaW9uOiBcInYyXCIsXG4gICAgICAgIGNsaWVudE5hbWU6IHRoaXMuY2xpZW50TmFtZSxcbiAgICAgICAgY291bnRyeUNvZGVzOiB0aGlzLmNvdW50cnlDb2RlcyxcbiAgICAgICAgb25TdWNjZXNzOiAocHVibGljX3Rva2VuLCBtZXRhZGF0YSkgPT4gdGhpcy5vblN1Y2Nlc3MocHVibGljX3Rva2VuLCBtZXRhZGF0YSksXG4gICAgICAgIG9uRXhpdDogKGVyciwgbWV0YWRhdGEpID0+IHRoaXMub25FeGl0KGVyciwgbWV0YWRhdGEpLFxuICAgICAgICBvbkV2ZW50OiAoZXZlbnROYW1lLCBtZXRhZGF0YSkgPT4gdGhpcy5vbkV2ZW50KGV2ZW50TmFtZSwgbWV0YWRhdGEpLFxuICAgICAgICBvbkxvYWQ6ICgpID0+IHRoaXMub25Mb2FkKCksXG4gICAgICAgIHNlbGVjdEFjY291bnQ6IHRoaXMuc2VsZWN0QWNjb3VudCxcbiAgICAgICAgdG9rZW46IHRoaXMudG9rZW4gfHwgbnVsbCxcbiAgICAgICAgd2ViaG9vazogdGhpcy53ZWJob29rIHx8IG51bGxcbiAgICAgIH0pO1xuICAgIHRoaXMuZGlzYWJsZWRCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnBsYWlkTGlua0hhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIG9uRXhpdChlcnJvcjogUGxhaWRFcnJvck9iamVjdCwgbWV0YWRhdGE6IFBsYWlkRXJyb3JNZXRhZGF0YSkge1xuICAgIHRoaXMuRXhpdC5lbWl0KHtlcnJvciwgbWV0YWRhdGF9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXRhZGF0YTogUGxhaWRFdmVudE1ldGFkYXRhKSB7XG4gICAgdGhpcy5FdmVudC5lbWl0KHtldmVudE5hbWUsIG1ldGFkYXRhfSk7XG4gIH1cblxuICBwdWJsaWMgb25TdWNjZXNzKHRva2VuOiBzdHJpbmcsIG1ldGFkYXRhOiBQbGFpZFN1Y2Nlc3NNZXRhZGF0YSkge1xuICAgIHRoaXMuU3VjY2Vzcy5lbWl0KHt0b2tlbiwgbWV0YWRhdGF9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLkNsaWNrLmVtaXQoJGV2ZW50KTtcbiAgICAvLyBPcGVuIHRvIGEgc3BlY2lmaWMgaW5zdGl0dXRpb24gaWYgbmVjZXNzYXJ5O1xuICAgIGNvbnN0IGluc3RpdHV0aW9uID0gdGhpcy5pbnN0aXR1dGlvbiB8fCBudWxsO1xuICAgIGlmICh0aGlzLnBsYWlkTGlua0hhbmRsZXIpIHtcbiAgICAgIHRoaXMucGxhaWRMaW5rSGFuZGxlci5vcGVuKGluc3RpdHV0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkKCRldmVudCA9IFwibGlua19sb2FkZWRcIikge1xuICAgIHRoaXMuTG9hZC5lbWl0KCRldmVudCk7XG4gIH1cbn1cbiJdfQ==