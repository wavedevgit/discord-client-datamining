/** chunk id: 461213, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => z
}), n(321073), n(896048), n(638769), n(938796);
var r, i = n(812729),
    a = n.n(i),
    o = n(735438),
    s = n.n(o),
    l = n(665260),
    c = n(311907),
    u = n(73153),
    d = n(90644),
    f = n(655116),
    p = n(253932),
    _ = n(617617),
    h = n(674378),
    m = n(760751),
    g = n(885576),
    E = n(189081),
    y = n(375492),
    b = n(290863),
    O = n(528767),
    v = n(652215);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let I = !1,
    S = v.clD.ONLINE,
    T = v.clD.UNKNOWN,
    C = 0,
    N = [],
    w = [],
    R = !1,
    P = !0,
    D = Object.freeze([]),
    L = Object.freeze([]),
    x = [],
    M = [];

function j(e) {
    if (0 === e.length) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === v.$pd.PLAYING ? n.push(r) : t.push(r);
    return 0 === n.length || 1 === n.length ? e : [...t, [...n].sort(b.m)[0]].sort(b.m)
}

function k(e) {
    return (0, h.kv)(e, E.A)
}

function U(e) {
    let t = m.A.getGameByName(e);
    return null != t ? k(t.id) : p.tz.getSetting()
}

function G(e) {
    var t;
    if ((0, l.Lt)(null != (t = e.flags) ? t : 0, v.jUm.CONTEXTLESS)) return !0;
    switch (e.type) {
        case v.$pd.LISTENING:
            if ((0, d.A)(e)) return f.A.shouldShowActivity();
            if (null != e.application_id) return k(e.application_id);
            return !1;
        case v.$pd.PLAYING:
            return null != e.application_id ? k(e.application_id) : U(e.name);
        case v.$pd.STREAMING:
        case v.$pd.WATCHING:
        default:
            return null == e.application_id || k(e.application_id)
    }
}

function F() {
    P = !0, T = S, V()
}

function V() {
    var e;
    if (C = null != (e = g.A.getIdleSince()) ? e : 0, R = g.A.isAFK(), P) S = T;
    else if (I) S = v.clD.INVISIBLE;
    else {
        let e = p.jP.getSetting();
        S = e !== v.clD.UNKNOWN ? e : v.clD.ONLINE
    }
    S === v.clD.ONLINE && C > 0 && (S = v.clD.IDLE);
    let t = !1,
        n = P || S === v.clD.INVISIBLE ? [] : y.A.getActivities().filter(G);
    a()(N, n) || (N = n, w = j(n), t = !0);
    let r = O.A.getRemoteActivities();
    D !== r && (D = r, t = !0);
    let i = O.A.getHiddenActivities();
    L !== i && (L = i), t && (M = j(x = s()([...N, ...D.filter(e => e.type !== v.$pd.CUSTOM_STATUS)].sort(b.m)).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()))
}

function B(e) {
    return I = e.invisible, V()
}

function H() {
    return I = !1, V()
}

function Y() {
    P = !1, T = v.clD.UNKNOWN, V(), b.A.setCurrentUserOnConnectionOpen(S, x)
}

function W() {
    Y()
}
class K extends(r = c.Ay.Store) {
    initialize() {
        this.waitFor(m.A, g.A, E.A, y.A, b.A, O.A, f.A, _.A), this.syncWith([y.A], V)
    }
    getLocalPresence() {
        return {
            status: S,
            since: C,
            activities: w,
            afk: R
        }
    }
    getStatus() {
        return S
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : w
    }
    getUnfilteredActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? x : N
    }
    getHiddenActivities() {
        return L
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return this.getActivities(e)[0]
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity(t => t.application_id === e, t)
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e)
    }
}
A(K, "displayName", "SelfPresenceStore");
let z = new K(u.h, {
    START_SESSION: V,
    CONNECTION_OPEN: W,
    CONNECTION_OPEN_SUPPLEMENTAL: Y,
    OVERLAY_INITIALIZE: Y,
    CONNECTION_CLOSED: V,
    IDLE: V,
    AFK: V,
    RUNNING_GAMES_CHANGE: V,
    STREAMING_UPDATE: V,
    USER_SETTINGS_PROTO_UPDATE: V,
    LOCAL_ACTIVITY_UPDATE: V,
    SPOTIFY_PLAYER_STATE: V,
    SPOTIFY_PLAYER_PLAY: V,
    USER_CONNECTIONS_UPDATE: V,
    SESSIONS_REPLACE: V,
    RPC_APP_DISCONNECTED: V,
    LIBRARY_FETCH_SUCCESS: V,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: V,
    LOGOUT: F,
    FORCE_INVISIBLE: B,
    WINDOW_FOCUS: H
})