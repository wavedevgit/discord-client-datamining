/** chunk id: 131319, original params: e,t,n (module,exports,require) **/
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
let s = n(731854).PR;

function l(e) {
    s = e.bitrate
}
class c extends(r = i.Ay.Store) {
    get bitrate() {
        return s
    }
}
o(c, "displayName", "BitRateStore");
let u = new c(a.h, {
    SET_CHANNEL_BITRATE: l
})