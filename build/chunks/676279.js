/** Chunk was on web.js **/
/** chunk id: 676279, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    EL: () => g,
    TM: () => S,
    Z5: () => p,
    cy: () => v,
    gm: () => I,
    nr: () => A
});
var r, i, a, o, s, l, c = n(481613),
    u = n.n(c);
let d = (null != (r = u().name) ? r : "unknown").toLowerCase(),
    f = "chrome" === d.toLowerCase() ? parseInt(null != (i = u().version) ? i : "", 10) : -1;

function p() {
    return f
}
let _ = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : -1;

function h() {
    return _
}
let m = "firefox" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : -1;

function g() {
    return m
}
let E = "edge" === d.toLowerCase() ? parseInt(null != (s = u().version) ? s : "", 10) : -1;

function y() {
    return E
}
let b = "safari" === d.toLowerCase() ? parseInt(null != (l = u().version) ? l : "", 10) : -1;

function O() {
    return b
}

function v() {
    return -1 !== p() || -1 !== h() || -1 !== g() || -1 !== y() || O() >= 14
}

function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/")
}

function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
    return -1 !== e.toLowerCase().indexOf("firefox")
}

function S() {
    var e;
    let t = window.navigator,
        n = (null == (e = t.mediaCapabilities) ? void 0 : e.decodingInfo) != null;
    return A(t.userAgent) && n
}