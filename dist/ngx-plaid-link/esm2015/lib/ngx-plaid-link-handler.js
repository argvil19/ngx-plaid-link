export class PlaidLinkHandler {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmstaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wbGFpZC1saW5rLyIsInNvdXJjZXMiOlsibGliL25neC1wbGFpZC1saW5rLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQjs7O09BR0c7SUFDSCxZQUFZLE1BQW1CO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSSxDQUFDLFdBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWlkQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZGVjbGFyZSBsZXQgUGxhaWQ6IGFueTtcblxuZXhwb3J0IGNsYXNzIFBsYWlkTGlua0hhbmRsZXIge1xuXG4gIC8qKlxuICAgKiBIb2xkcyB0aGUgUGxhaWQgTGluayBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgcGxhaWRMaW5rOiBhbnk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGNvbmZpZ3VyZXMgdGhlIFBsYWlkIExpbmsgaGFuZGxlciB3aXRoIGdpdmVuIGNvbmZpZyBvcHRpb25zLlxuICAgKiBAcGFyYW0gUGxhaWRDb25maWcgY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBsYWlkQ29uZmlnKSB7XG4gICAgdGhpcy5wbGFpZExpbmsgPSBQbGFpZC5jcmVhdGUoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBQbGFpZCBMaW5rIHdpbmRvdyBmb3IgdGhpcyBoYW5kbGVyLlxuICAgKiBAcGFyYW0gc3RyaW5nIGluc3RpdHV0aW9uIFRoZSBuYW1lIG9mIHRoZSBpbnN0aXR1dGlvbiB0byBvcGVuXG4gICAqL1xuICBwdWJsaWMgb3BlbihpbnN0aXR1dGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGxhaWRMaW5rLm9wZW4oaW5zdGl0dXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY3VycmVudGx5IG9wZW4gUGxhaWQgTGluayB3aW5kb3cgaWYgYW55LlxuICAgKi9cbiAgcHVibGljIGV4aXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGFpZExpbmsuZXhpdCgpO1xuICB9XG5cbn1cbiJdfQ==