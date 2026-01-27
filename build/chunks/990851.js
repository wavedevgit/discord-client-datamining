/** Chunk was on web.js **/
/** chunk id: 990851, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r = n(439372),
    i = n(15285),
    a = n(760751),
    o = n(667269);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    var t, n;
    let {
        game: r
    } = e, s = i.Ay.isDetectionEnabled(r), l = null != (t = r.id) ? t : null == (n = a.A.getGameByName(r.name)) ? void 0 : n.id;
    null != l && (0, o.J)(l, s)
}
class c extends r.A {
    constructor(...e) {
        super(...e), s(this, "actions", {
            RUNNING_GAME_TOGGLE_DETECTION: l,
            RUNNING_GAME_DELETE_ENTRY: l
        })
    }
}
let u = new c