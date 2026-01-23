/** Chunk was on web.js **/
/** chunk id: 115036, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a;
n.d(t, {
    A: () => w
});
var s, o = n(835245),
    l = n(311907),
    c = n(506774),
    u = n(451988),
    d = n(73153),
    f = n(6981),
    p = n(427157),
    _ = n(353835),
    h = n(723702),
    m = n(536194);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let E = "BrowserHandoffStore",
    y = !1,
    b = new u.Ep;

function O() {
    null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), _.A.focus(null, !0))
}

function v() {
    i = null, b.stop(), y = !1, c.w.set(E, y)
}

function A(e) {
    r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
}

function I(e) {
    if (null != i) return !1;
    i = (0, o.A)(), b.start(e.timeout, () => (0, f.mZ)()), O()
}

function S(e) {
    let {
        handoffKey: t,
        handoffToken: n,
        timeout: r
    } = e;
    if (null == t || null == n) return !1;
    y = !0, b.start(r, () => (0, f.mZ)())
}

function T(e) {
    a = new p.A(e.user)
}

function C() {
    v()
}
class N extends(s = l.Ay.Store) {
    initialize() {
        !1 !== c.w.get(E) && (y = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
    }
    isHandoffAvailable() {
        return !m.P.isDisallowPopupsSet() && y
    }
    get user() {
        return a
    }
    get key() {
        return i
    }
}
g(N, "displayName", "BrowserHandoffStore");
let w = new N(d.h, {
    RPC_SERVER_READY: A,
    BROWSER_HANDOFF_BEGIN: I,
    BROWSER_HANDOFF_FROM_APP: S,
    BROWSER_HANDOFF_UNAVAILABLE: v,
    BROWSER_HANDOFF_SET_USER: T,
    LOGIN: C,
    LOGIN_SUCCESS: C,
    LOGOUT: C,
    REGISTER: C
})