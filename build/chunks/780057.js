/** chunk id: 780057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048);
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = !1;

function l() {
    s = !1
}

function c() {
    s = !0
}

function u() {
    s = !1
}
class d extends(r = i.Ay.Store) {
    initialize() {
        l()
    }
    isInProgress() {
        return s
    }
    constructor(...e) {
        super(...e), o(this, "summaryInProgress", !1)
    }
}
o(d, "displayName", "ThreadSummaryStore");
let f = new d(a.h, {
    SUMMARIZE_THREAD_START: c,
    SUMMARIZE_THREAD_SUCCESS: u,
    SUMMARIZE_THREAD_FAILURE: u
})