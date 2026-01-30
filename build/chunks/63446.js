/** chunk id: 63446, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(439372),
    i = n(287809),
    a = n(38050);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class s extends r.A {
    constructor(...e) {
        super(...e), o(this, "actions", {
            HAVEN_DISCONNECT: e => this.handleHavenDisconnect(e)
        }), o(this, "handleHavenDisconnect", e => {
            let t = i.default.getCurrentUser();
            e.userId === (null == t ? void 0 : t.id) && a.n.getState().resetPlayback()
        })
    }
}
let l = new s