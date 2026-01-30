/** chunk id: 157257, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => p
});
var i, a = n(311907),
    o = n(73153),
    s = n(15285),
    l = n(760751);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    r = e.currentGame
}

function d(e) {
    r = e.associatedGame
}
class f extends(i = a.Ay.Store) {
    initialize() {
        this.waitFor(l.A, s.Ay)
    }
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = s.Ay.getGameOrTransformedSubgameForPID(e);
        return l.A.getGameByName(null == t ? void 0 : t.name)
    }
    getGame() {
        return r
    }
}
c(f, "displayName", "OverlayRunningGameStore");
let p = new f(o.h, {
    OVERLAY_INITIALIZE: u,
    OVERLAY_SET_ASSOCIATED_GAME: d
})