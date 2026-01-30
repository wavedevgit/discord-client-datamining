/** chunk id: 689168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048);
var r, i = n(311907),
    a = n(451988),
    o = n(73153),
    s = n(375492),
    l = n(461213),
    c = n(652215);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}
let f = {},
    p = {},
    _ = 12e4,
    h = 15e3;

function m(e) {
    let {
        applicationId: t,
        activityType: n
    } = e, r = f[t];
    if (null == r) return !1;
    delete r[n]
}

function g(e, t, n) {
    null != p[e] && p[e].stop();
    let r = new a.Ep;
    r.start(n, () => o.h.dispatch({
        type: "ACTIVITY_LAUNCH_FAIL",
        applicationId: e,
        activityType: t
    })), p[e] = r
}

function E(e, t, n) {
    var r, i;
    let {
        applicationId: a,
        remotePartyId: o
    } = n;
    if (e === c.eAD.COMPLETE) {
        null == (i = f[a]) || delete i[t], null != p[a] && (p[a].stop(), delete p[a]);
        return
    }
    let s = null != (r = f[a]) ? r : {};
    s[t] = {
        state: e,
        remotePartyId: o
    }, f[a] = s, __OVERLAY__ || e !== c.eAD.FAILED ? e === c.eAD.LOADING && null != o && g(a, t, h) : g(a, t, _)
}

function y(e) {
    let {
        activityLauncherStates: t
    } = e;
    f = d({}, t)
}

function b(e) {
    return E(c.eAD.COMPLETE, c.xL.JOIN, e)
}

function O() {
    let e = Object.entries(f).map(e => {
            var t;
            let [n, r] = e;
            return {
                applicationId: n,
                remotePartyId: null == (t = r[c.xL.JOIN]) ? void 0 : t.remotePartyId
            }
        }).filter(e => {
            let {
                remotePartyId: t
            } = e;
            return null != t
        }),
        t = !1;
    return e.forEach(e => {
        var n, r;
        let {
            applicationId: i,
            remotePartyId: a
        } = e, o = s.A.getApplicationActivity(i), u = l.A.getApplicationActivity(i);
        ((null == o || null == (n = o.party) ? void 0 : n.id) === a || (null == u || null == (r = u.party) ? void 0 : r.id) === a) && (E(c.eAD.COMPLETE, c.xL.JOIN, {
            applicationId: i,
            remotePartyId: a
        }), t = !0)
    }), t
}
class v extends(r = i.Ay.Store) {
    initialize() {
        this.syncWith([s.A, l.A], O)
    }
    getState(e, t) {
        var n;
        let r = f[e];
        return null == r || null == (n = r[t]) ? void 0 : n.state
    }
    getStates() {
        return f
    }
}
u(v, "displayName", "ActivityLauncherStore");
let A = new v(o.h, {
    OVERLAY_INITIALIZE: y,
    ACTIVITY_JOIN_LOADING: e => E(c.eAD.LOADING, c.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: e => E(c.eAD.FAILED, c.xL.JOIN, e),
    ACTIVITY_JOIN: b,
    EMBEDDED_ACTIVITY_CLOSE: b,
    ACTIVITY_LAUNCH_FAIL: m
})