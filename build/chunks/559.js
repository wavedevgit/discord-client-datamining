/** chunk id: 559, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => r
});
var a = n(315069);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class r extends a.A {
    static fromServer(e) {
        return new r(e)
    }
    setPassword(e) {
        return this.password = e, this
    }
    constructor(e) {
        super(), l(this, "id", void 0), l(this, "summary", void 0), l(this, "userIds", void 0), l(this, "password", void 0), this.id = e.pool_id, this.summary = e.summary, this.userIds = e.user_ids
    }
}