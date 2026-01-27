/** Chunk was on web.js **/
/** chunk id: 978495, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $P: () => c,
    Kh: () => u,
    Oy: () => d,
    RJ: () => a,
    al: () => l,
    cZ: () => s,
    wu: () => i
}), n(747238), n(64700);
let r = ["gif", "webp", "png", "apng"];

function i(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src
}

function a(e) {
    let t = e.toLowerCase().split(".").pop();
    return null != t && r.includes(t)
}

function o(e) {
    return !!i(e) && null != e.src && a(e.src)
}

function s(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src
}

function l(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie
}

function c(e) {
    return "type" in e && "rive" === e.type && "function" == typeof e.rive
}

function u(e) {
    return "type" in e && "dynamic" === e.type && "component" in e
}

function d(e) {
    return null != e && (o(e) || s(e) || l(e) || c(e))
}