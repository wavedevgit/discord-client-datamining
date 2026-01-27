/** Chunk was on web.js **/
/** chunk id: 199944, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(439372),
    i = n(913612),
    a = n(942405);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class s extends r.A {
    handlePostConnectionOpen() {
        (0, i.C)(), (0, a.Tn)("startup")
    }
    handleLogout() {
        (0, a.AV)()
    }
    constructor(...e) {
        super(...e), o(this, "actions", {
            POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            LOGOUT: this.handleLogout
        })
    }
}
let l = new s