/** Chunk was on web.js **/
/** chunk id: 966846, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => J
}), n(896048), n(65821), n(321073), n(667532);
var r, i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(92077),
    u = n(15285),
    d = n(961350),
    f = n(568004),
    p = n(674378),
    _ = n(962052),
    h = n(723702),
    m = n(194871),
    g = n(652215),
    E = n(613057);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let b = [E.Hi.AUTHENTICATION_FAILED, E.Hi.NOT_ENTITLED],
    O = "DispatchManagerStore",
    v = [],
    A = [],
    I = !1,
    S = null,
    T = null,
    C = !1,
    N = new Map,
    w = !1,
    R = null;

function P() {
    let e = {
        queue: v,
        paused: I,
        userActions: Array.from(N)
    };
    o.w.set(O, e)
}

function D(e, t) {
    return null != S && S.applicationId === e && S.branchId === t || null != T && T.applicationId === e && T.branchId === t
}

function x() {
    let e = v[0];
    if (null != e) {
        let {
            comboId: t,
            action: n
        } = e, {
            applicationId: r,
            branchId: i
        } = (0, p.r0)(t);
        if (!D(r, i)) {
            let e = d.default.getToken(),
                t = d.default.getId();
            if (null == e) throw Error("missing user token");
            w = !_.A.setCurrentTask(r, i, n, t, e)
        }
    }
}

function L(e, t) {
    let n = (0, p.gW)(e, t);
    return v.findIndex(e => e.comboId === n)
}

function j(e, t, n, r) {
    let i = (0, p.gW)(e, t),
        a = {
            comboId: i,
            action: r
        },
        s = A.indexOf(i); - 1 !== s && A.splice(s, 1);
    let o = L(e, t);
    0 !== o && (n ? -1 === o && (v.push(a), x()) : (o > 0 && v.splice(o, 1), v.unshift(a), x())), !n && I && _.A.resume(), P()
}

function M(e, t) {
    let n = (0, p.gW)(e, t),
        r = A.indexOf(n); - 1 !== r && A.splice(r, 1);
    let i = L(e, t); - 1 !== i && (v.splice(i, 1), P()), x()
}

function k(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    N.set((0, p.gW)(t, n), "Install"), j(t, n, !1, "Patch")
}

function U(e) {
    F(e), H(e)
}

function G(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    N.set((0, p.gW)(t, n), "Repair"), j(t, n, !1, "Repair")
}

function V(e) {
    let {
        applicationId: t,
        branchId: n,
        automatic: r
    } = e;
    j(t, n, r, "Patch")
}

function F(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    M(t, n)
}

function B(e) {
    let {
        applicationId: t,
        branchId: n
    } = e, r = L(t, n);
    if (r < 1) return !1;
    v.splice(0, 0, v.splice(r, 1)[0]), x(), I && _.A.resume(), P()
}

function H(e) {
    let {
        applicationId: t,
        branchId: n
    } = e, r = (0, p.gW)(t, n), i = A.indexOf(r); - 1 !== i && A.splice(i, 1)
}

function Y(e) {
    let {
        state: t
    } = e;
    !C && (C = !0, x(), I || _.A.resume());
    let n = I;
    I = t.paused, S = t.currentTask, T = t.nextTask;
    let r = !1;
    v = v.filter(e => {
        let {
            comboId: t
        } = e, {
            applicationId: n,
            branchId: i
        } = (0, p.r0)(t), s = m.A.getState(n, i), o = f.A.getTargetBuildId(n, i), l = f.A.getTargetManifests(n, i);
        if (null != s && s.type === g.WTw.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === o && a().isEqual(s.manifestIds, s.targetManifestIds) && a().isEqual(s.manifestIds, l)) {
            if (A.push(t), N.has(t)) {
                switch (N.get(t)) {
                    case "Install":
                        c.BK(n, s);
                        break;
                    case "Repair":
                        c.jU(n, s)
                }
                N.delete(t)
            }
            return r = !0, !1
        }
        return !0
    }), x(), (r || n !== I) && P()
}

function W() {
    let e = d.default.getToken(),
        t = d.default.getId();
    null != e && _.A.setCredentials(t, e)
}

function K(e) {
    let {
        error: t
    } = e, {
        code: n
    } = t;
    if (null != n) {
        if (b.includes(n)) W();
        else if (n === E.Hi.APPLICATION_NOT_FOUND) {
            let {
                context: e
            } = t;
            if (null != e) {
                let {
                    application_id: t,
                    branch_id: n
                } = e;
                M(t, n)
            }
        }
    }
}

function z() {
    for (let e of u.Ay.getRunningDiscordApplicationIds()) c.ZT(e, e);
    let e = u.Ay.getVisibleGame();
    return I || null == e || e.pid === R || c.v7(), R = null == e ? null : e.pid, !1
}

function q() {
    (0, h.isDesktop)() && W()
}

function Z() {
    o.w.remove(O), (0, h.isDesktop)() && _.A.pause()
}

function X(e) {
    return e.map(e => "string" == typeof e ? {
        comboId: e,
        action: "Patch"
    } : e)
}
class Q extends(r = s.Ay.Store) {
    initialize() {
        var e;
        let t = null != (e = o.w.get(O)) ? e : {
            queue: null,
            paused: null,
            userActions: null
        };
        null != t.queue && (v = X(t.queue)), null != t.paused && (I = t.paused), null != t.userActions && (N = new Map(Array.from(t.userActions))), this.waitFor(m.A, u.Ay), this.syncWith([u.Ay], z), this.waitFor(f.A, d.default, m.A)
    }
    get activeItems() {
        return v.map(e => {
            let {
                comboId: t
            } = e;
            return (0, p.r0)(t)
        })
    }
    get finishedItems() {
        return A.map(p.r0)
    }
    get paused() {
        return I
    }
    getQueuePosition(e, t) {
        return L(e, t)
    }
    isCorruptInstallation() {
        return w
    }
}
y(Q, "displayName", "DispatchManagerStore");
let J = new Q(l.h, {
    DISPATCH_APPLICATION_INSTALL: k,
    DISPATCH_APPLICATION_UPDATE: V,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: F,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: B,
    DISPATCH_APPLICATION_REMOVE_FINISHED: H,
    DISPATCH_APPLICATION_STATE_UPDATE: Y,
    DISPATCH_APPLICATION_ERROR: K,
    CONNECTION_OPEN: q,
    LOGOUT: Z
})