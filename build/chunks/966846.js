/** chunk id: 966846, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => J
}), n(896048), n(65821), n(321073), n(667532);
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(506774),
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
    s.w.set(O, e)
}

function D(e, t) {
    return null != S && S.applicationId === e && S.branchId === t || null != T && T.applicationId === e && T.branchId === t
}

function L() {
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

function x(e, t) {
    let n = (0, p.gW)(e, t);
    return v.findIndex(e => e.comboId === n)
}

function M(e, t, n, r) {
    let i = (0, p.gW)(e, t),
        a = {
            comboId: i,
            action: r
        },
        o = A.indexOf(i); - 1 !== o && A.splice(o, 1);
    let s = x(e, t);
    0 !== s && (n ? -1 === s && (v.push(a), L()) : (s > 0 && v.splice(s, 1), v.unshift(a), L())), !n && I && _.A.resume(), P()
}

function j(e, t) {
    let n = (0, p.gW)(e, t),
        r = A.indexOf(n); - 1 !== r && A.splice(r, 1);
    let i = x(e, t); - 1 !== i && (v.splice(i, 1), P()), L()
}

function k(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    N.set((0, p.gW)(t, n), "Install"), M(t, n, !1, "Patch")
}

function U(e) {
    V(e), H(e)
}

function G(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    N.set((0, p.gW)(t, n), "Repair"), M(t, n, !1, "Repair")
}

function F(e) {
    let {
        applicationId: t,
        branchId: n,
        automatic: r
    } = e;
    M(t, n, r, "Patch")
}

function V(e) {
    let {
        applicationId: t,
        branchId: n
    } = e;
    j(t, n)
}

function B(e) {
    let {
        applicationId: t,
        branchId: n
    } = e, r = x(t, n);
    if (r < 1) return !1;
    v.splice(0, 0, v.splice(r, 1)[0]), L(), I && _.A.resume(), P()
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
    !C && (C = !0, L(), I || _.A.resume());
    let n = I;
    I = t.paused, S = t.currentTask, T = t.nextTask;
    let r = !1;
    v = v.filter(e => {
        let {
            comboId: t
        } = e, {
            applicationId: n,
            branchId: i
        } = (0, p.r0)(t), o = m.A.getState(n, i), s = f.A.getTargetBuildId(n, i), l = f.A.getTargetManifests(n, i);
        if (null != o && o.type === g.WTw.UP_TO_DATE && o.buildId === o.targetBuildId && o.buildId === s && a().isEqual(o.manifestIds, o.targetManifestIds) && a().isEqual(o.manifestIds, l)) {
            if (A.push(t), N.has(t)) {
                switch (N.get(t)) {
                    case "Install":
                        c.BK(n, o);
                        break;
                    case "Repair":
                        c.jU(n, o)
                }
                N.delete(t)
            }
            return r = !0, !1
        }
        return !0
    }), L(), (r || n !== I) && P()
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
                j(t, n)
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
    s.w.remove(O), (0, h.isDesktop)() && _.A.pause()
}

function Q(e) {
    return e.map(e => "string" == typeof e ? {
        comboId: e,
        action: "Patch"
    } : e)
}
class X extends(r = o.Ay.Store) {
    initialize() {
        var e;
        let t = null != (e = s.w.get(O)) ? e : {
            queue: null,
            paused: null,
            userActions: null
        };
        null != t.queue && (v = Q(t.queue)), null != t.paused && (I = t.paused), null != t.userActions && (N = new Map(Array.from(t.userActions))), this.waitFor(m.A, u.Ay), this.syncWith([u.Ay], z), this.waitFor(f.A, d.default, m.A)
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
        return x(e, t)
    }
    isCorruptInstallation() {
        return w
    }
}
y(X, "displayName", "DispatchManagerStore");
let J = new X(l.h, {
    DISPATCH_APPLICATION_INSTALL: k,
    DISPATCH_APPLICATION_UPDATE: F,
    DISPATCH_APPLICATION_UNINSTALL: U,
    DISPATCH_APPLICATION_CANCEL: V,
    DISPATCH_APPLICATION_REPAIR: G,
    DISPATCH_APPLICATION_MOVE_UP: B,
    DISPATCH_APPLICATION_REMOVE_FINISHED: H,
    DISPATCH_APPLICATION_STATE_UPDATE: Y,
    DISPATCH_APPLICATION_ERROR: K,
    CONNECTION_OPEN: q,
    LOGOUT: Z
})