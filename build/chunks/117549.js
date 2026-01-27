/** Chunk was on web.js **/
/** chunk id: 117549, original params: e,t,n (module,exports,require) **/
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
let s = n(652215).K3c.AUTO;

function l(e) {
    s = e.mode
}
class c extends(r = i.Ay.Store) {
    get mode() {
        return s
    }
}
o(c, "displayName", "VideoQualityModeStore");
let u = new c(a.h, {
    SET_CHANNEL_VIDEO_QUALITY_MODE: l
})