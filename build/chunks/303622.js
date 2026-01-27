/** Chunk was on web.js **/
/** chunk id: 303622, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(616093);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = {};

function c(e) {
    let {
        labFeature: t,
        enabled: n
    } = e;
    l[t] = n
}
class u extends(r = i.Ay.DeviceSettingsStore) {
    getUserAgnosticState() {
        return {
            toggleStates: l
        }
    }
    initialize(e) {
        for (var t in o.A) {
            var n, r;
            l[t] = null != (n = null == e || null == (r = e.toggleStates) ? void 0 : r[t]) && n
        }
    }
    get(e) {
        var t;
        return null != (t = l[e]) && t
    }
    set(e, t) {
        return l[e] = t, t
    }
}
s(u, "displayName", "LabFeatureStore"), s(u, "persistKey", "LabFeatureStore");
let d = new u(a.h, {
    LAB_FEATURE_TOGGLE: c
})