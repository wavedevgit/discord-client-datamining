/** chunk id: 380020, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(73153),
    i = n(439372),
    a = n(461213);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class s extends i.A {
    constructor(...e) {
        super(...e), o(this, "stores", new Map().set(a.A, l))
    }
}

function l() {
    r.h.dispatch({
        type: "SELF_PRESENCE_STORE_UPDATE",
        status: a.A.getStatus(),
        activities: a.A.getActivities(!0),
        hiddenActivities: a.A.getHiddenActivities()
    })
}
let c = new s