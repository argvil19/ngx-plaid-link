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
export { PlaidLinkHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmstaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7SUFPRTs7O09BR0c7SUFDSCwwQkFBWSxNQUFtQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFJLEdBQVgsVUFBWSxXQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhaWRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5kZWNsYXJlIGxldCBQbGFpZDogYW55O1xuXG5leHBvcnQgY2xhc3MgUGxhaWRMaW5rSGFuZGxlciB7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBQbGFpZCBMaW5rIGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBwbGFpZExpbms6IGFueTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgY29uZmlndXJlcyB0aGUgUGxhaWQgTGluayBoYW5kbGVyIHdpdGggZ2l2ZW4gY29uZmlnIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBQbGFpZENvbmZpZyBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUGxhaWRDb25maWcpIHtcbiAgICB0aGlzLnBsYWlkTGluayA9IFBsYWlkLmNyZWF0ZShjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIFBsYWlkIExpbmsgd2luZG93IGZvciB0aGlzIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBzdHJpbmcgaW5zdGl0dXRpb24gVGhlIG5hbWUgb2YgdGhlIGluc3RpdHV0aW9uIHRvIG9wZW5cbiAgICovXG4gIHB1YmxpYyBvcGVuKGluc3RpdHV0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wbGFpZExpbmsub3BlbihpbnN0aXR1dGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjdXJyZW50bHkgb3BlbiBQbGFpZCBMaW5rIHdpbmRvdyBpZiBhbnkuXG4gICAqL1xuICBwdWJsaWMgZXhpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWlkTGluay5leGl0KCk7XG4gIH1cblxufVxuIl19