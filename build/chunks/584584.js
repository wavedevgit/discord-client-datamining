/** chunk id: 584584 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(321073);
var i = n(735438),
    r = n.n(i),
    l = n(311907),
    s = n(506774),
    a = n(73153),
    o = n(339048),
    c = n(830382),
    u = n(627363),
    d = n(587895),
    _ = n(15285),
    A = n(287809),
    E = n(469778),
    m = n(67480),
    I = n(652215);
let T = "DetectedOffPlatformPremiumPerksStore",
    g = {},
    N = {},
    f = [];

function C() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of r().values(N)) {
        if (f.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || u.Ay.fetchApplication(n);
            continue
        }
        let r = m.A.get(t);
        if (null == r) {
            m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || c.EX(i.id, t);
            continue
        }
        E.A.applicationIdsFetching.has(i.id) || E.A.isEntitledToSku(A.default.getCurrentUser(), t, i.id, i.id) || !r.available ? null != g[t] && (delete g[t], e = !0) : (g[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class p extends l.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, E.A, _.Ay, m.A, A.default), f = s.w.get(T) ?? f
    }
    getDetectedOffPlatformPremiumPerks() {
        return r().values(g)
    }
}
let h = new p(a.h, {
    LOGOUT: function() {
        g = {}, N = {}
    },
    SKU_FETCH_SUCCESS: C,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
    ENTITLEMENT_CREATE: C,
    APPLICATION_FETCH_SUCCESS: C,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete g[t], f.includes(t)) return !1;
        f.push(t), s.w.set(T, f)
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
                    of I.m_i) i !== t || f.includes(n) || null == N[n] && (E.A.applicationIdsFetched.has(i) || E.A.applicationIdsFetching.has(i) || null != E.A.getForSku(n) || o.LM(i), N[n] = {
                    skuId: n,
                    applicationId: i
                }, e = !0);
        return e && C(), e
    }
})