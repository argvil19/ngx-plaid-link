import { EventEmitter } from '@angular/core';
import { PlaidErrorMetadata, PlaidErrorObject, PlaidEventMetadata, PlaidOnEventArgs, PlaidOnExitArgs, PlaidOnSuccessArgs, PlaidSuccessMetadata } from './interfaces';
import { NgxPlaidLinkService } from './ngx-plaid-link.service';
export interface ICustomWindow extends Window {
    Plaid: {
        create: Function;
    };
}
export declare class NgxPlaidLinkDirective {
    private plaidLinkLoader;
    Event: EventEmitter<PlaidOnEventArgs>;
    Click: EventEmitter<any>;
    Load: EventEmitter<any>;
    Exit: EventEmitter<PlaidOnExitArgs>;
    Success: EventEmitter<PlaidOnSuccessArgs>;
    clientName: string;
    disabledButton: boolean;
    private plaidLinkHandler;
    private defaultProps;
    publicKey?: string;
    apiVersion?: string;
    env?: string;
    institution?: string;
    product?: Array<string>;
    selectAccount?: boolean;
    token?: string;
    webhook?: string;
    countryCodes?: string[];
    constructor(plaidLinkLoader: NgxPlaidLinkService);
    ngOnInit(): Promise<void>;
    onExit(error: PlaidErrorObject, metadata: PlaidErrorMetadata): void;
    onEvent(eventName: string, metadata: PlaidEventMetadata): void;
    onSuccess(token: string, metadata: PlaidSuccessMetadata): void;
    onClick($event: any): void;
    onLoad($event?: string): void;
}
