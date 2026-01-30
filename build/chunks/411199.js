/** chunk id: 411199, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(247775),
    i = n(73153),
    a = n(272355),
    o = n(723702);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class l extends a.A {
    _initialize() {
        i.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
    }
    _terminate() {
        i.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
    }
    constructor(...e) {
        super(...e), s(this, "handleConnectionOpen", e => {
            ((0, o.isWindows)() || (0, o.isMac)()) && r.encryptAndStoreTokens()
        })
    }
}
let c = new l