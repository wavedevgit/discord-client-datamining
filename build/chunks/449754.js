/** Chunk was on web.js **/
/** chunk id: 449754, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var r = n(982520),
    i = n.n(r),
    a = n(439372),
    o = n(400492);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = 100,
    c = .5,
    u = 500,
    d = (0, o.Qh)("vibing_wumpus", "vibing_wumpus", 0),
    f = 0,
    p = 0,
    _ = null;

function h(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * p),
        a = Math.round(100 * f);
    n > 0 && a >= r || n < 0 && a <= r ? (clearInterval(_), 0 === r && null != t && t()) : (a += n, f = a / 100, d.volume = i()(f, 0, c))
}

function m(e) {
    null != _ && clearInterval(_), p = 0;
    let t = b();
    _ = setInterval(() => {
        h(t, e)
    }, l)
}

function g() {
    null != _ && clearInterval(_), d.loop(), p = c;
    let e = b();
    _ = setInterval(() => h(e), l)
}

function E() {
    m(d.pause.bind(d))
}

function y() {
    m(d.stop.bind(d))
}

function b() {
    return l / u * (p - f)
}
class O extends a.A {
    constructor(...e) {
        super(...e), s(this, "actions", {
            VIBING_WUMPUS_PLAY_MUSIC: g,
            VIBING_WUMPUS_STOP_MUSIC: y,
            VIBING_WUMPUS_PAUSE_MUSIC: E
        })
    }
}
let v = new O