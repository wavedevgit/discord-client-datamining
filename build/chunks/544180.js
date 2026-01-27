/** Chunk was on web.js **/
/** chunk id: 544180, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r, i = n(311907),
    a = n(73153),
    o = n(209489),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = s.wY_.UNKNOWN,
    u = s.NKC.UNKNOWN,
    d = null;

function f(e) {
    var t;
    c = null != e.type ? e.type : s.wY_.UNKNOWN, u = null != (t = e.effectiveSpeed) ? t : s.NKC.UNKNOWN, d = e.serviceProvider, _.emitChange()
}
class p extends(r = i.Ay.Store) {
    initialize() {
        o.A.getNetworkInformation().then(f), o.A.addChangeCallback(f)
    }
    getType() {
        return c
    }
    getEffectiveConnectionSpeed() {
        return u
    }
    getServiceProvider() {
        return d
    }
}
l(p, "displayName", "NetworkStore");
let _ = new p(a.h, {}),
    h = _