/** Chunk was on web.js **/
/** chunk id: 6981, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J0: () => s,
    Qh: () => o,
    ST: () => i,
    mZ: () => a,
    uA: () => l
});
var r = n(73153);

function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    r.h.dispatch({
        type: "BROWSER_HANDOFF_BEGIN",
        timeout: e
    })
}

function a(e, t) {
    r.h.dispatch({
        type: "BROWSER_HANDOFF_END",
        handoffToken: e,
        fingerprint: t
    })
}

function o(e) {
    let {
        handoffKey: t,
        handoffToken: n,
        handoffSource: i,
        timeout: a = 1e4
    } = e;
    r.h.dispatch({
        type: "BROWSER_HANDOFF_FROM_APP",
        handoffKey: t,
        handoffToken: n,
        handoffSource: i,
        timeout: a
    })
}

function s() {
    r.h.dispatch({
        type: "BROWSER_HANDOFF_UNAVAILABLE"
    })
}

function l(e) {
    r.h.dispatch({
        type: "BROWSER_HANDOFF_SET_USER",
        user: e
    })
}