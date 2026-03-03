/** chunk id: 584584, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
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
    m = n(15285),
    _ = n(287809),
    A = n(469778),
    f = n(67480),
    h = n(652215);
let g = "DetectedOffPlatformPremiumPerksStore",
    E = {},
    p = {},
    x = [];

function C() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of l().values(p)) {
        if (x.includes(t)) continue;
        let i = u.A.getApplication(n);
        if (null == i) {
            u.A.isFetchingApplication(n) || u.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
            continue
        }
        let l = f.A.get(t);
        if (null == l) {
            f.A.isFetching(t) || f.A.didFetchingSkuFail(t) || c.EX(i.id, t);
            continue
        }
        A.A.applicationIdsFetching.has(i.id) || A.A.isEntitledToSku(_.default.getCurrentUser(), t, i.id, i.id) || !l.available ? null != E[t] && (delete E[t], e = !0) : (E[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class I extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(u.A, A.A, m.Ay, f.A, _.default), x = r.w.get(g) ?? x
    }
    getDetectedOffPlatformPremiumPerks() {
        return l().values(E)
    }
}
let T = new I(s.h, {
    LOGOUT: function() {
        E = {}, p = {}
    },
    SKU_FETCH_SUCCESS: C,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
    ENTITLEMENT_CREATE: C,
    APPLICATION_FETCH_SUCCESS: C,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete E[t], x.includes(t)) return !1;
        x.push(t), r.w.set(g, x)
    },
    RUNNING_GAMES_CHANGE: function() {
        let e = !1;
        for (let {
                id: t,
                distributor: n
            }
            of m.Ay.getRunningGames())
            if (null != t && n !== h.d3x.DISCORD)
                for (let {
                        skuId: n,
                        applicationId: i
                    }
                    of h.m_i) i !== t || x.includes(n) || null == p[n] && (A.A.applicationIdsFetched.has(i) || A.A.applicationIdsFetching.has(i) || null != A.A.getForSku(n) || o.LM(i), p[n] = {
                    skuId: n,
                    applicationId: i
                }, e = !0);
        return e && C(), e
    }
})