/** Chunk was on web.js **/
/** chunk id: 199543, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(439372),
    i = n(966597),
    a = n(216623);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function s() {
    i.A.getCurrentConfig({
        location: "saved_messages_manager"
    }, {
        autoTrackExposure: !1
    }).enabled && (0, a.AX)()
}
class l extends r.A {
    constructor(...e) {
        super(...e), o(this, "actions", {
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
        }), o(this, "handlePostConnectionOpen", () => {
            s()
        })
    }
}
let c = new l