/** chunk id: 668731, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(321073), n(896048);
var r, i = n(812729),
    a = n.n(i),
    o = n(311907),
    s = n(73153);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = [n(732755).A],
    u = [];

function d() {
    let e = [];
    for (let t of c) {
        let n = t.getActivity();
        null != n && e.push(n)
    }
    return !a()(e, u) && (u = e, !0)
}
class f extends(r = o.Ay.Store) {
    initialize() {
        this.syncWith(c, d)
    }
    getActivities() {
        return u
    }
}
l(f, "displayName", "FirstPartyRichPresenceStore");
let p = new f(s.h)