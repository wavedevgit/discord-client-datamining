/** chunk id: 825772, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(315069),
    i = n(427157);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class a extends r.A {
    static createFromServer(e) {
        return new a(e)
    }
    isPrimary() {
        return 1 === this.member_type
    }
    isMember() {
        return 2 === this.member_type && null != this.accepted_at
    }
    isInvited() {
        return 2 === this.member_type && null == this.accepted_at
    }
    constructor(e) {
        super(), l(this, "user", void 0), l(this, "member_type", void 0), l(this, "accepted_at", void 0), this.user = new i.A(e.user), this.member_type = e.member_type, this.accepted_at = e.accepted_at
    }
}