/** chunk id: 587481, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    ls: () => o,
    uj: () => s,
    v1: () => a,
    y5: () => l
});
var r = n(506774);
let i = "MediaPlayerVolume";

function a() {
    var e;
    let {
        volume: t
    } = null != (e = r.w.get(i)) ? e : {};
    return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
}

function o(e) {
    r.w.set(i, {
        volume: e,
        muted: s()
    })
}

function s() {
    var e;
    let {
        muted: t
    } = null != (e = r.w.get(i)) ? e : {};
    return "boolean" != typeof t && (t = !1), t
}

function l(e) {
    r.w.set(i, {
        volume: a(),
        muted: e
    })
}