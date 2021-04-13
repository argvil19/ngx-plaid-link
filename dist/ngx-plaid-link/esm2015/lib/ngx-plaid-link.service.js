import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PlaidLinkHandler } from './ngx-plaid-link-handler';
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
export { NgxPlaidLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsZ0JBQWdCLENBQUM7SUFFakI7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxNQUFtQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbEQsTUFBTSxNQUFNLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyx5REFBeUQsQ0FBQztnQkFDdkUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3JCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7d0JBQy9CLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7NEJBQ3RFLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7NEJBQ2pDLE9BQU8sRUFBRSxDQUFDO3lCQUNYO29CQUNILENBQUMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDbkIsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQyxDQUFDO2lCQUNIO2dCQUNELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBRUYsQ0FBQTtBQS9DWSxtQkFBbUI7SUFEL0IsVUFBVSxFQUFFO0dBQ0EsbUJBQW1CLENBK0MvQjtTQS9DWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFpZENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBQbGFpZExpbmtIYW5kbGVyIH0gZnJvbSAnLi9uZ3gtcGxhaWQtbGluay1oYW5kbGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFBsYWlkTGlua1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9hZGVkOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBsYWlkIExpbmsgaW5zdGFuY2UgYXMgc29vbiBhcyBQbGFpZCBMaW5rIGhhcyBsb2FkZWQuXG4gICAqIEBwYXJhbSBQbGFpZENvbmZpZyBjb25maWdcbiAgICogQHJldHVybnMgUHJvbWlzZTxQbGFpZExpbmtIYW5kbGVyPlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVBsYWlkKGNvbmZpZzogUGxhaWRDb25maWcpOiBQcm9taXNlPFBsYWlkTGlua0hhbmRsZXI+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkUGxhaWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGxhaWRMaW5rSGFuZGxlcihjb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgb3Igd2FpdCBmb3IgdGhlIFBsYWlkIExpbmsgbGlicmFyeSB0byBsb2FkLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gICAqL1xuICBwdWJsaWMgbG9hZFBsYWlkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMubG9hZGVkID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHQ6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnBsYWlkLmNvbS9saW5rL3YyL3N0YWJsZS9saW5rLWluaXRpYWxpemUuanMnO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlOiBhbnkpID0+IHJlamVjdChlKTtcbiAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gIH1cblxufVxuIl19