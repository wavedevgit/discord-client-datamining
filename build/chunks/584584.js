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
    d = n(627363),
    u = n(587895),
    _ = n(15285),
    m = n(287809),
    A = n(469778),
    E = n(67480),
    I = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    N = {},
    f = {},
    C = [];

function g() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of l().values(f)) {
        if (C.includes(t)) continue;
        let i = u.A.getApplication(n);
        if (null == i) {
            u.A.isFetchingApplication(n) || u.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
            continue
        }
        let l = E.A.get(t);
        if (null == l) {
            E.A.isFetching(t) || E.A.didFetchingSkuFail(t) || c.EX(i.id, t);
            continue
        }
        A.A.applicationIdsFetching.has(i.id) || A.A.isEntitledToSku(m.default.getCurrentUser(), t, i.id, i.id) || !l.available ? null != N[t] && (delete N[t], e = !0) : (N[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class h extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(u.A, A.A, _.Ay, E.A, m.default), C = r.w.get(T) ?? C
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(N)
    }
}
let p = new h(s.h, {
    LOGOUT: function() {
        N = {}, f = {}
    },
    SKU_FETCH_SUCCESS: g,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: g,
    ENTITLEMENT_CREATE: g,
    APPLICATION_FETCH_SUCCESS: g,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete N[t], C.includes(t)) return !1;
        C.push(t), r.w.set(T, C)
    },
    RUNNING_GAMES_CHANGE: function() {
        let e = !1;
        for (let {
                id: t,
                distributor: n
            }
            of _.Ay.getRunningGames())
            if (null != t && n !== I.d3x.DISCORD)
                for (let {
                        skuId: n,
                        applicationId: i
                    }
                    of I.m_i) i !== t || C.includes(n) || null == f[n] && (A.A.applicationIdsFetched.has(i) || A.A.applicationIdsFetching.has(i) || null != A.A.getForSku(n) || o.LM(i), f[n] = {
                    skuId: n,
                    applicationId: i
                }, e = !0);
        return e && g(), e
    }
})