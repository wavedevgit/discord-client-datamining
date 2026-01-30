/** chunk id: 861638, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ht: () => eo,
    Vc: () => es,
    as: () => ea
}), n(65821), n(321073);
var r = n(835245),
    i = n(71931),
    a = n(311907),
    o = n(506774),
    s = n(73153),
    l = n(237774),
    c = n(626584),
    u = n(142120),
    d = n(961350),
    f = n(885576),
    p = n(383501),
    _ = n(954571),
    h = n(927813),
    m = n(728458),
    g = n(616005),
    E = n(789999),
    y = n(604594),
    b = n(565783),
    O = n(652215);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}
let I = 27,
    S = 15 * h.A.Millis.MINUTE,
    T = h.A.Millis.SECOND,
    C = "LAST_CLIENT_HEARTBEAT_SESSION",
    N = "user",
    w = new c.A("SessionHeartbeatScheduler"),
    R = null,
    P = null,
    D = 0,
    L = 0,
    x = {
        state: "uninitialized"
    },
    M = p.A.getState(),
    j = (0, E.R)(),
    k = d.default.getToken();

function U() {
    if (null != R) return;
    let e = 0 === L ? 0 : S - (performance.now() - L);
    m.A.addBreadcrumb({
        message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(e / 1e3, " seconds. Scheduling Heartbeat")
    }), R = {
        type: "timeout",
        id: setTimeout(() => {
            B(), R = {
                type: "interval",
                id: setInterval(() => {
                    B()
                }, S)
            }
        }, e)
    }
}

function G() {
    if (null == R) return !1;
    switch (R.type) {
        case "timeout":
            clearTimeout(R.id);
            break;
        case "interval":
            clearInterval(R.id);
            break;
        default:
            R.type
    }
    return R = null, !0
}

function F() {
    G() && (m.A.addBreadcrumb({
        category: N,
        message: "Stopping Analytics Heartbeat"
    }), (0, l.p)())
}

function V() {
    var e;
    let t = null != (e = f.A.getIdleSince()) ? e : 0;
    return {
        is_idle: f.A.isIdle(),
        idle_duration_ms: Date.now() - t,
        is_afk: f.A.isAFK(),
        is_system_suspended: f.A.getSystemSuspended(),
        is_system_locked: f.A.getSystemLocked()
    }
}
async function B() {
    let e = Date.now(),
        t = await eo(),
        n = Date.now();
    if (null == t) return void m.A.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
    m.A.addBreadcrumb({
        category: N,
        message: "Tracking Heartbeat",
        data: {
            initialized: t.createdAtTimestamp
        }
    });
    let r = A({
        client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
        client_heartbeat_version: I
    }, (0, g.Q)(), V());
    _.default.track(O.HAw.CLIENT_HEARTBEAT, r), L = performance.now(), (0, l.p)()
}

function H() {
    if (!(null != k && (0, b.$)()) || performance.now() - L <= S) return;
    let e = {
        client_heartbeat_version: I
    };
    _.default.track(O.HAw.CLIENT_HEARTBEAT_SKIPPED, e)
}

function Y() {}

function W() {
    let e = [];
    return null != k && (j && e.push("foregrounded"), M === O.S7L.RTC_CONNECTED && e.push("rtc_connected")), {
        active: e.length > 0,
        ver: I,
        reasons: e
    }
}

function K() {
    return W().active
}

function z() {
    K() ? U() : F(), J()
}

function q() {
    null == P && (P = {
        id: setInterval(() => {
            H()
        }, S),
        type: "interval"
    })
}

function Z(e) {
    let t = performance.now();
    if (!(t - D < T)) try {
        o.w.set(C, e), D = t
    } catch (e) {
        m.A.captureException(e)
    }
}

function Q(e) {
    return null == e ? null : e.version !== y.Ir ? (w.warn("Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(y.Ir)), null) : e
}

function X() {
    o.w.remove(C), x = {
        state: "loaded",
        session: null
    }, F(), L = 0
}

function J() {
    var e;
    null == (e = u.A.getSocket()) || e.handleActiveStateChange(W())
}
async function $() {
    let e = await eo(!1);
    if (null != e) {
        var t;
        null == (t = u.A.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C)
    }
}

function ee() {
    let e = d.default.getToken();
    k !== e && (k = e, X()), z()
}

function et() {
    let e = p.A.getState();
    M !== e && (M = e, z())
}

function en(e) {
    let {
        focused: t
    } = e;
    j !== t && (j = t, z())
}

function er(e) {
    let {
        state: t
    } = e, n = t === O.g6G.ACTIVE;
    j !== n && (j = n, z())
}

function ei() {
    M = p.A.getState(), j = (0, E.R)(), ee()
}

function ea() {
    m.A.addBreadcrumb({
        message: "Initializing SessionHeartbeatScheduler"
    }), p.A.addChangeListener(et), d.default.addChangeListener(ee), s.h.subscribe("WINDOW_FOCUS", en), s.h.subscribe("APP_STATE_UPDATE", er), s.h.subscribe("CONNECTION_OPEN", $), z(), q(), a.Ay.initialized.then(ei)
}
async function eo() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = null,
        a = "loaded" === x.state ? null == (e = x.session) ? void 0 : e.uuid : null;
    try {
        n = "uninitialized" === x.state ? Q(await o.w.getAfterRefresh(C)) : x.session
    } catch (e) {
        m.A.captureException(e)
    }
    return (() => {
        let e = Date.now();
        if (K() ? ((null == n || (0, y.aE)(n)) && (n = {
                uuid: (0, r.A)(),
                createdAtTimestamp: e,
                lastUsedTimestamp: e,
                version: y.Ir
            }, D = 0), n.lastUsedTimestamp = e, Z(n)) : null != n && (0, y.aE)(n) && (n = null), x = {
                state: "loaded",
                session: n
            }, null != n && a !== n.uuid && t) {
            var o;
            null == (o = u.A.getSocket()) || o.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.C)
        }
        return n
    })()
}

function es() {
    let e = "uninitialized" === x.state ? Q(o.w.get(C)) : x.session;
    return null == e || (0, y.aE)(e) ? null : e
}