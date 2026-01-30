/** chunk id: 819235, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => H
}), n(896048);
var r = n(735438),
    i = n(306264),
    a = n(73153),
    o = n(439372),
    s = n(658160),
    l = n(142120),
    c = n(962173),
    u = n(885576),
    d = n(531685),
    f = n(927813),
    p = n(99066),
    _ = n(86070),
    h = n(435738),
    m = n(99753),
    g = n(424994),
    E = n(652215);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let b = 4,
    O = 2 * f.A.Millis.MINUTE,
    v = g.X1.GLOBAL_FEED,
    A = 15 * f.A.Millis.MINUTE,
    I = new Map,
    S = new Set,
    T = new Map,
    C = null,
    N = (0, r.debounce)(_.Q1, 3e3, {
        trailing: !0
    });

function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * O
}

function R(e, t) {
    a.h.dispatch({
        type: "CONTENT_INVENTORY_SET_FEED_STATE",
        feedId: e,
        state: t
    })
}

function P(e) {
    if (S.has(e) || e === g.X1.GAME_PROFILE_FEED && (!(0, s.L0)("ContentInventoryManager") || void 0 !== m.A.getFeed(e))) return !1;
    if (e === v) {
        if (!(0, p.VS)("ContentInventoryManager") || h.A.hidden && null != m.A.getFeed(e) || !d.A.isFocused() || !l.A.isConnected()) return !1;
        let t = u.A.getIdleSince();
        if (null != t && Date.now() - t > A) return !1
    }
    return !0
}

function D(e) {
    R(e, {
        loading: !1
    });
    let t = I.get(e);
    void 0 !== t && (clearTimeout(t), I.delete(e))
}

function L() {
    var e;
    let t = null != (e = T.get(v)) ? e : 0;
    if (t > 0 && t <= b || (D(v), !P(v))) return;
    let n = m.A.getFeed(v);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == C) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), r) + (t > 0 ? w() : 0);
    R(v, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a)
    }), I.set(v, setTimeout(() => x({
        feedId: v,
        feature: i.M.INBOX
    }), a))
}
async function x(e) {
    let {
        feedId: t,
        feature: n,
        force: r = !1
    } = e;
    if (P(t) || r) try {
        let e = m.A.getFeed(t);
        S.add(t), R(t, {
            loading: !0
        });
        let r = await (0, _.sy)({
            token: null == e ? void 0 : e.refresh_token,
            feedId: t,
            feature: n
        });
        a.h.dispatch({
            type: "CONTENT_INVENTORY_SET_FEED",
            feedId: t,
            feed: r
        }), T.set(t, 0), S.delete(t), R(t, {
            loading: !1
        }), t === v && (C = null, L())
    } catch (o) {
        var i;
        let e = null != (i = T.get(t)) ? i : 0;
        if (e < b) {
            let i = f.A.Millis.MINUTE * Math.pow(2, e) + w(e);
            I.set(t, setTimeout(() => x({
                feedId: t,
                feature: n,
                force: r
            }), i)), T.set(t, e + 1)
        } else a.h.dispatch({
            type: "CONTENT_INVENTORY_CLEAR_FEED",
            feedId: t
        });
        S.delete(t)
    }
}

function M() {
    L()
}

function j() {
    M()
}

function k() {
    D(v)
}

function U(e) {
    let {
        feedId: t,
        feature: n
    } = e;
    D(t), x({
        feedId: t,
        feature: n,
        force: !0
    })
}

function G(e) {
    let {
        refreshAfterMs: t
    } = e, n = m.A.getFeed(v);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) == null || (C = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), L())
}

function F(e) {
    var t;
    let {
        connectionId: n,
        track: r
    } = e;
    null == n || (null == (t = c.A.getAccount(n, E.fg2.SPOTIFY)) ? void 0 : t.showActivity) && N(n, r)
}

function V() {
    x({
        feedId: g.X1.GLOBAL_FEED,
        feature: i.M.GAME_PROFILE
    })
}
class B extends o.A {
    constructor(...e) {
        super(...e), y(this, "actions", {
            POST_CONNECTION_OPEN: j,
            CONNECTION_CLOSED: k,
            WINDOW_FOCUS: M,
            IDLE: M,
            CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
            CONTENT_INVENTORY_MANUAL_REFRESH: U,
            CONTENT_INVENTORY_INBOX_STALE: G,
            SPOTIFY_NEW_TRACK: F,
            GAME_PROFILE_OPEN: V
        })
    }
}
let H = new B