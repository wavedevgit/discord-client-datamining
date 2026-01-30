/** chunk id: 210528, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
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
let s = !1;

function l(e) {
    let {
        isRegistered: t
    } = e;
    s = t
}
class c extends(r = i.Ay.Store) {
    isProtocolRegistered() {
        return s
    }
}
o(c, "displayName", "SpotifyProtocolStore");
let u = new c(a.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: l
})