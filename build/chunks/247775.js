/** Chunk was on web.js **/
/** chunk id: 247775, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.r(t), n.d(t, {
    encryptAndStoreTokens: () => R,
    getAnalyticsToken: () => O,
    getToken: () => v,
    hideToken: () => T,
    init: () => b,
    removeAnalyticsToken: () => w,
    removeToken: () => N,
    setAnalyticsToken: () => A,
    setToken: () => I,
    showToken: () => C
}), n(896048);
var a = n(506774),
    s = n(818348);
let o = "dQw4w9WgXcQ:",
    l = "__analytics__";

function c(e) {
    return [...e].reduce((e, t) => {
        let [n, r] = t;
        return e[n] = r, e
    }, {})
}
let u = null,
    d = window.DiscordNative;
null != d && (u = d.safeStorage);
let f = !1,
    p = {},
    _ = {},
    h = !1,
    m = !1;

function g() {
    if (h) {
        a.w.remove(s.il), a.w.remove(s.zy);
        return
    }
    null != i ? a.w.set(s.il, i) : a.w.remove(s.il), a.w.set(s.zy, _)
}

function E(e) {
    return null == e || 0 === e.length ? {
        decryptedToken: null,
        wasEncrypted: !1
    } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o) ? {
        decryptedToken: u.decryptString(e.substring(o.length)),
        wasEncrypted: !0
    } : {
        decryptedToken: e,
        wasEncrypted: !1
    }
}

function y(e) {
    return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
}

function b() {
    if (m) return;
    i = a.w.get(s.il), _ = a.w.get(s.zy) || {};
    let {
        decryptedToken: e,
        wasEncrypted: t
    } = E(i);
    f = t, r = e, p = c(Object.entries(_).map(e => {
        let [t, n] = e, {
            decryptedToken: r,
            wasEncrypted: i
        } = E(n);
        return f = i || f, [t, r]
    }).filter(e => {
        let [t, n] = e;
        return null != n
    })), m = !0
}

function O() {
    return v(l)
}

function v(e) {
    return (b(), null != e) ? p[e] : r
}

function A(e) {
    null == e ? N(l) : S(e, l)
}

function I(e, t) {
    null == e ? N(t) : (r = e, S(e, t))
}

function S(e, t) {
    null != t && (p[t] = e), f ? R() : (i = r, _ = p, g())
}

function T() {
    h || (h = !0, g())
}

function C() {
    h && (h = !1, g())
}

function N(e) {
    let t = r;
    return null != e && (t = p[e], delete p[e], delete _[e]), t === r && (r = null, i = null), g(), null != t
}

function w() {
    return N(l)
}

function R() {
    (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != r && (i = y(r)), _ = c(Object.entries(p).map(e => {
        let [t, n] = e;
        return [t, y(n)]
    })), f = !0) : (i = r, _ = p), g()
}