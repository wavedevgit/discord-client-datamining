/** Chunk was on web.js **/
/** chunk id: 584584, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048), n(321073);
var r, i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    c = n(339048),
    u = n(830382),
    d = n(627363),
    f = n(587895),
    p = n(15285),
    _ = n(287809),
    h = n(469778),
    m = n(67480),
    g = n(652215);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let y = "DetectedOffPlatformPremiumPerksStore",
    b = {},
    O = {},
    v = [];

function A() {
    let e = !1;
    for (let {
            id: t,
            distributor: n
        }
        of p.Ay.getRunningGames())
        if (null != t && n !== g.d3x.DISCORD)
            for (let {
                    skuId: n,
                    applicationId: r
                }
                of g.m_i) r !== t || v.includes(n) || null == O[n] && (h.A.applicationIdsFetched.has(r) || h.A.applicationIdsFetching.has(r) || null != h.A.getForSku(n) || c.LM(r), O[n] = {
                skuId: n,
                applicationId: r
            }, e = !0);
    return e && I(), e
}

function I() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of a().values(O)) {
        if (v.includes(t)) continue;
        let r = f.A.getApplication(n);
        if (null == r) {
            f.A.isFetchingApplication(n) || f.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
            continue
        }
        let i = m.A.get(t);
        if (null == i) {
            m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || u.EX(r.id, t);
            continue
        }
        h.A.applicationIdsFetching.has(r.id) || h.A.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != b[t] && (delete b[t], e = !0) : (b[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}

function S(e) {
    let {
        skuId: t
    } = e;
    if (delete b[t], v.includes(t)) return !1;
    v.push(t), o.w.set(y, v)
}

function T() {
    b = {}, O = {}
}
class C extends(r = s.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(f.A, h.A, p.Ay, m.A, _.default), v = null != (e = o.w.get(y)) ? e : v
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(b)
    }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(l.h, {
    LOGOUT: T,
    SKU_FETCH_SUCCESS: I,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: I,
    ENTITLEMENT_CREATE: I,
    APPLICATION_FETCH_SUCCESS: I,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: S,
    RUNNING_GAMES_CHANGE: A
})