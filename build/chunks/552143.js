/** chunk id: 552143, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(451988),
    i = n(73153),
    a = n(439372);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = 3e3;
class l extends a.A {
    _terminate() {
        this.clearErrorTimeout.stop()
    }
    constructor(...e) {
        super(...e), o(this, "clearErrorTimeout", new r.Ep), o(this, "actions", {
            MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
        }), o(this, "handleNoiseCancellationError", () => {
            this.clearErrorTimeout.start(s, () => i.h.dispatch({
                type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
            }))
        })
    }
}
let c = new l