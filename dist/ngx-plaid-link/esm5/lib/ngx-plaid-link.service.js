import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PlaidLinkHandler } from './ngx-plaid-link-handler';
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
export { NgxPlaidLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHNUQ7SUFJRTtJQUFnQixDQUFDO0lBRWpCOzs7O09BSUc7SUFDSSx5Q0FBVyxHQUFsQixVQUFtQixNQUFtQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDM0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHVDQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUM5QyxJQUFNLE1BQU0sR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLHlEQUF5RCxDQUFDO2dCQUN2RSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUNyQixNQUFNLENBQUMsa0JBQWtCLEdBQUc7d0JBQzFCLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7NEJBQ3RFLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7NEJBQ2pDLE9BQU8sRUFBRSxDQUFDO3lCQUNYO29CQUNILENBQUMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxNQUFNLENBQUMsTUFBTSxHQUFHO3dCQUNkLE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUMsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQTdDVSxtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1CLENBK0MvQjtJQUFELDBCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0EvQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhaWRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUGxhaWRMaW5rSGFuZGxlciB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmstaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtTZXJ2aWNlIHtcblxuICBwcml2YXRlIGxvYWRlZDogUHJvbWlzZTx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQbGFpZCBMaW5rIGluc3RhbmNlIGFzIHNvb24gYXMgUGxhaWQgTGluayBoYXMgbG9hZGVkLlxuICAgKiBAcGFyYW0gUGxhaWRDb25maWcgY29uZmlnXG4gICAqIEByZXR1cm5zIFByb21pc2U8UGxhaWRMaW5rSGFuZGxlcj5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVQbGFpZChjb25maWc6IFBsYWlkQ29uZmlnKTogUHJvbWlzZTxQbGFpZExpbmtIYW5kbGVyPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZFBsYWlkKCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBsYWlkTGlua0hhbmRsZXIoY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG9yIHdhaXQgZm9yIHRoZSBQbGFpZCBMaW5rIGxpYnJhcnkgdG8gbG9hZC5cbiAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICAgKi9cbiAgcHVibGljIGxvYWRQbGFpZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmxvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0OiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5wbGFpZC5jb20vbGluay92Mi9zdGFibGUvbGluay1pbml0aWFsaXplLmpzJztcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoZTogYW55KSA9PiByZWplY3QoZSk7XG4gICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkO1xuICB9XG5cbn1cbiJdfQ==