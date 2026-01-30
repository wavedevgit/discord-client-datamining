/** chunk id: 159551, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    F: () => u
}), n(321073);
var r = n(73153);
let i = 1e3,
    a = 100,
    o = [],
    s = null;

function l() {
    0 !== o.length && (r.h.dispatch({
        type: "OVERLAY_ADD_LOGS_BATCH",
        logs: o
    }), o = [], null != s && (clearTimeout(s), s = null))
}

function c() {
    null == s && (s = setTimeout(() => {
        l()
    }, i))
}

function u(e) {
    o.push(e), o.length >= a ? l() : c()
}