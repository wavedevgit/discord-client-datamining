/** chunk id: 881902, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(439372),
    i = n(201718);

function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function o(e) {
    i.P.refetch(e.user_id)
}
class s extends r.A {
    constructor(...e) {
        super(...e), a(this, "actions", {
            USER_APPLICATION_IDENTITY_UPDATE: o,
            USER_APPLICATION_IDENTITY_REMOVE: o
        })
    }
}
let l = new s