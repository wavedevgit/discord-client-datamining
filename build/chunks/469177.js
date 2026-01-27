/** Chunk was on web.js **/
/** chunk id: 469177, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DQ: () => u,
    L7: () => d,
    qr: () => p,
    uG: () => f
}), n(896048), n(638769), n(167789), n(954571), n(652215);
let r = ["COLD_START"],
    i = "NO_REASONS",
    a = !0,
    o = new Map;

function s(e) {
    var t;
    let n = null != (t = o.get(e)) ? t : 0;
    o.set(e, n + 1)
}

function l(e) {
    var t;
    let n = (null != (t = o.get(e)) ? t : 0) - 1;
    n <= 0 ? o.delete(e) : o.set(e, n)
}

function c(e) {
    return "BRIDGE:".concat(e)
}

function u() {
    return o.size > 0 || a
}

function d() {
    let e = [...a ? r : [], ...o.keys()].sort();
    return e.length > 0 ? e.join(",") : i
}

function f(e) {
    _(() => {
        s(e), l(c(e))
    })
}

function p(e) {
    _(() => l(e))
}

function _(e) {
    u(), a = !1, e(), u()
}