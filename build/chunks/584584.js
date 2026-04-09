/** chunk id: 584584 params = (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(321073);
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    r = n(506774),
    s = n(73153),
    o = n(339048),
    c = n(830382),
    u = n(627363),
    d = n(587895),
    _ = n(15285),
    A = n(287809),
    m = n(469778),
    E = n(67480),
    T = n(652215);
let I = "DetectedOffPlatformPremiumPerksStore",
    N = {},
    g = {},
    f = [];

function C() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of l().values(g)) {
        if (f.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || u.Ay.fetchApplication(n);
            continue
        }
        let l = E.A.get(t);
        if (null == l) {
            E.A.isFetching(t) || E.A.didFetchingSkuFail(t) || c.EX(i.id, t);
            continue
        }
        m.A.applicationIdsFetching.has(i.id) || m.A.isEntitledToSku(A.default.getCurrentUser(), t, i.id, i.id) || !l.available ? null != N[t] && (delete N[t], e = !0) : (N[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class h extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, m.A, _.Ay, E.A, A.default), f = r.w.get(I) ?? f
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(N)
    }
}
let p = new h(s.h, {
    LOGOUT: function() {
        N = {}, g = {}
    },
    SKU_FETCH_SUCCESS: C,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
    ENTITLEMENT_CREATE: C,
    APPLICATION_FETCH_SUCCESS: C,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete N[t], f.includes(t)) return !1;
        f.push(t), r.w.set(I, f)
    },
    RUNNING_GAMES_CHANGE: function() {
        let e = !1;
        for (let {
                id: t,
                distributor: n
            }
            of _.Ay.getRunningGames())
            if (null != t && n !== T.d3x.DISCORD)
                for (let {
                        skuId: n,
                        applicationId: i
                    }
                    of T.m_i) i !== t || f.includes(n) || null == g[n] && (m.A.applicationIdsFetched.has(i) || m.A.applicationIdsFetching.has(i) || null != m.A.getForSku(n) || o.LM(i), g[n] = {
                    skuId: n,
                    applicationId: i
                }, e = !0);
        return e && C(), e
    }
})