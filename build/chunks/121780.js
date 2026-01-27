/** Chunk was on web.js **/
/** chunk id: 121780, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(518977);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = null;

function c(e) {
    var t;
    let {
        countryCode: n
    } = e;
    null != n && (l = null != (t = (0, o.XF)(n)) ? t : (0, o.rE)())
}
class u extends(r = i.Ay.Store) {
    getCountryCode() {
        return l
    }
}
s(u, "displayName", "LocationMetadataStore");
let d = new u(a.h, {
    CONNECTION_OPEN: c,
    SET_LOCATION_METADATA: c
})