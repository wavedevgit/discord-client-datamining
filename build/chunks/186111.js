/** chunk id: 186111, original params: e,t,n (module,exports,require) **/
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
let s = [];

function l(e) {
    let {
        component: t
    } = e;
    if (s.indexOf(t) >= 0) return !1;
    s = [...s, t]
}

function c() {
    if (0 === s.length) return !1;
    s = s.slice(0, -1)
}

function u() {
    s = []
}
class d extends(r = i.Ay.Store) {
    hasLayers() {
        return s.length > 0
    }
    getLayers() {
        return s
    }
}
o(d, "displayName", "LayerStore");
let f = new d(a.h, {
    LAYER_PUSH: l,
    LAYER_POP: c,
    LAYER_POP_ALL: u,
    LOGOUT: u,
    NOTIFICATION_CLICK: u
})