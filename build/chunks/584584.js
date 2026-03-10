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
    A = n(287809),
    m = n(469778),
    E = n(67480),
    I = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    f = {},
    N = {},
    C = [];

function g() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of l().values(N)) {
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
        m.A.applicationIdsFetching.has(i.id) || m.A.isEntitledToSku(A.default.getCurrentUser(), t, i.id, i.id) || !l.available ? null != f[t] && (delete f[t], e = !0) : (f[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class h extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(u.A, m.A, _.Ay, E.A, A.default), C = r.w.get(T) ?? C
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(f)
    }
}
let p = new h(s.h, {
    LOGOUT: function() {
        f = {}, N = {}
    },
    SKU_FETCH_SUCCESS: g,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: g,
    ENTITLEMENT_CREATE: g,
    APPLICATION_FETCH_SUCCESS: g,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete f[t], C.includes(t)) return !1;
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
                    of I.m_i) i !== t || C.includes(n) || null == N[n] && (m.A.applicationIdsFetched.has(i) || m.A.applicationIdsFetching.has(i) || null != m.A.getForSku(n) || o.LM(i), N[n] = {
                    skuId: n,
                    applicationId: i
                }, e = !0);
        return e && g(), e
    }
})