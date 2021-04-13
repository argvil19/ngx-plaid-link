import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
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
export { NgxPlaidLinkButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmstYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkUsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE2QkQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFxRHRDO1FBbERVLFVBQUssR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxZQUFPLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsaUJBQVksR0FBRztZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsU0FBUztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLHFCQUFxQixFQUFFLE9BQU87Z0JBQzlCLHFCQUFxQixFQUFFLDhCQUE4QjtnQkFDckQsNEJBQTRCLEVBQUUsYUFBYTtnQkFDM0Msb0JBQW9CLEVBQUUsUUFBUTtnQkFDOUIsTUFBTSxFQUFFLEdBQUc7Z0JB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QUU7aUVBQTBEO0FBQ3pEO0lBQVIsS0FBSyxFQUFFOzBEQUF1QztBQUN0QztJQUFSLEtBQUssRUFBRTsrREFBb0Q7QUFDbkQ7SUFBUixLQUFLLEVBQUU7OERBQWtEO0FBbkQvQywyQkFBMkI7SUEzQnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO0tBRUYsQ0FBQztHQUNXLDJCQUEyQixDQWtGdkM7U0FsRlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhaWRPbkV2ZW50QXJncywgUGxhaWRPbkV4aXRBcmdzLCBQbGFpZE9uU3VjY2Vzc0FyZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUN1c3RvbVdpbmRvdyB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmsuZGlyZWN0aXZlJztcblxuZnVuY3Rpb24gZ2V0V2luZG93KCk6IGFueSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtci1uZ3gtcGxhaWQtbGluay1idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIG5neFBsYWlkTGlua1xuICAgICAgICAgICAgW2NsYXNzXT1cImNsYXNzTmFtZVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICBbcHVibGljS2V5XT1cInB1YmxpY0tleVwiXG4gICAgICAgICAgICBbY2xpZW50TmFtZV09XCJjbGllbnROYW1lXCJcbiAgICAgICAgICAgIFthcGlWZXJzaW9uXT1cImFwaVZlcnNpb25cIlxuICAgICAgICAgICAgW2Vudl09XCJlbnZcIlxuICAgICAgICAgICAgW2luc3RpdHV0aW9uXT1cImluc3RpdHV0aW9uXCJcbiAgICAgICAgICAgIFtwcm9kdWN0XT1cInByb2R1Y3RcIlxuICAgICAgICAgICAgW3NlbGVjdEFjY291bnRdPVwic2VsZWN0QWNjb3VudFwiXG4gICAgICAgICAgICBbdG9rZW5dPVwidG9rZW5cIlxuICAgICAgICAgICAgW3dlYmhvb2tdPVwid2ViaG9va1wiXG4gICAgICAgICAgICBbY291bnRyeUNvZGVzXT1cImNvdW50cnlDb2Rlc1wiXG4gICAgICAgICAgICAoU3VjY2Vzcyk9XCJvbkRpcmVjdGl2ZVN1Y2Nlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXhpdCk9XCJvbkRpcmVjdGl2ZUV4aXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoTG9hZCk9XCJvbkRpcmVjdGl2ZUxvYWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoRXZlbnQpPVwib25EaXJlY3RpdmVFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChDbGljayk9XCJvbkRpcmVjdGl2ZUNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpIEV2ZW50OiBFdmVudEVtaXR0ZXI8UGxhaWRPbkV2ZW50QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBTdWNjZXNzOiBFdmVudEVtaXR0ZXI8UGxhaWRPblN1Y2Nlc3NBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIExvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgRXhpdDogRXZlbnRFbWl0dGVyPFBsYWlkT25FeGl0QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwaVZlcnNpb246IFwidjJcIixcbiAgICBlbnY6IFwic2FuZGJveFwiLFxuICAgIGluc3RpdHV0aW9uOiBudWxsLFxuICAgIHNlbGVjdEFjY291bnQ6IGZhbHNlLFxuICAgIHRva2VuOiBudWxsLFxuICAgIHB1YmxpY0tleTogbnVsbCxcbiAgICB3ZWJob29rOiBcIlwiLFxuICAgIHByb2R1Y3Q6IFtcImF1dGhcIl0sXG4gICAgY291bnRyeUNvZGVzOiBbXCJVU1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzAwODVlNFwiLFxuICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiMzUwbXNcIixcbiAgICAgIFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiOiBcImJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3dcIixcbiAgICAgIFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgICAgXCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJidXR0b25cIixcbiAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICBcImJvcmRlci1yYWRpdXNcIjogXCI0cHhcIixcbiAgICAgIFwiYm94LXNoYWRvd1wiOlxuICAgICAgICBcIjAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKSwgaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgb3V0bGluZTogXCIwXCIsXG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjogXCJub25lXCIsXG4gICAgICBwYWRkaW5nOiBcIjAgMmVtXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiBcIkxvZyBJbiBUbyBZb3VyIEJhbmsgQWNjb3VudFwiLFxuICAgIGNsYXNzTmFtZTogXCJwbGFpZC1saW5rLWJ1dHRvblwiLFxuICB9O1xuICBASW5wdXQoKSBwdWJsaWNLZXk/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5wdWJsaWNLZXk7XG4gIEBJbnB1dCgpIGFwaVZlcnNpb24/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5hcGlWZXJzaW9uO1xuICBASW5wdXQoKSBlbnY/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5lbnY7XG4gIEBJbnB1dCgpIGluc3RpdHV0aW9uPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuaW5zdGl0dXRpb247XG4gIEBJbnB1dCgpIHByb2R1Y3Q/OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5kZWZhdWx0UHJvcHMucHJvZHVjdDtcbiAgQElucHV0KCkgc2VsZWN0QWNjb3VudD86IGJvb2xlYW4gPSB0aGlzLmRlZmF1bHRQcm9wcy5zZWxlY3RBY2NvdW50O1xuICBASW5wdXQoKSB0b2tlbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLnRva2VuO1xuICBASW5wdXQoKSB3ZWJob29rPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMud2ViaG9vaztcbiAgQElucHV0KCkgY291bnRyeUNvZGVzPzogc3RyaW5nW10gPSB0aGlzLmRlZmF1bHRQcm9wcy5jb3VudHJ5Q29kZXM7XG4gIEBJbnB1dCgpIHN0eWxlPzogYW55ID0gdGhpcy5kZWZhdWx0UHJvcHMuc3R5bGU7XG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5idXR0b25UZXh0O1xuICBASW5wdXQoKSBjbGFzc05hbWU/OiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRQcm9wcy5jbGFzc05hbWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBuYXRpdmVXaW5kb3coKTogSUN1c3RvbVdpbmRvdyB7XG4gICAgcmV0dXJuIGdldFdpbmRvdygpO1xuICB9XG5cbiAgb25TY3JpcHRFcnJvcigpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGlzc3VlIGxvYWRpbmcgdGhlIGxpbmstaW5pdGlhbGl6ZS5qcyBzY3JpcHRcIik7XG4gIH1cblxuICBvbkRpcmVjdGl2ZVN1Y2Nlc3MoZXZlbnQ6IFBsYWlkT25TdWNjZXNzQXJncykge1xuICAgIHRoaXMuU3VjY2Vzcy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRGlyZWN0aXZlRXhpdChldmVudDogUGxhaWRPbkV4aXRBcmdzKSB7XG4gICAgdGhpcy5FeGl0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVMb2FkKGV2ZW50KSB7XG4gICAgdGhpcy5Mb2FkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25EaXJlY3RpdmVFdmVudChldmVudDogUGxhaWRPbkV2ZW50QXJncykge1xuICAgIHRoaXMuRXZlbnQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkRpcmVjdGl2ZUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19