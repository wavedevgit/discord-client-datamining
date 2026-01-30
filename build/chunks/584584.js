/** chunk id: 584584, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048), n(321073);
var r, i, l = n(735438),
    a = n.n(l),
    s = n(311907),
    o = n(506774),
    c = n(73153),
    u = n(339048),
    d = n(830382),
    p = n(627363),
    m = n(587895),
    f = n(15285),
    g = n(287809),
    _ = n(469778),
    h = n(67480),
    b = n(652215);
let A = "DetectedOffPlatformPremiumPerksStore",
    y = {},
    v = {},
    x = [];

function O() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of a().values(v)) {
        if (x.includes(t)) continue;
        let r = m.A.getApplication(n);
        if (null == r) {
            m.A.isFetchingApplication(n) || m.A.didFetchingApplicationFail(n) || p.Ay.fetchApplication(n);
            continue
        }
        let i = h.A.get(t);
        if (null == i) {
            h.A.isFetching(t) || h.A.didFetchingSkuFail(t) || d.EX(r.id, t);
            continue
        }
        _.A.applicationIdsFetching.has(r.id) || _.A.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != y[t] && (delete y[t], e = !0) : (y[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class E extends(r = s.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(m.A, _.A, f.Ay, h.A, g.default), x = null != (e = o.w.get(A)) ? e : x
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(y)
    }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
    value: "DetectedOffPlatformPremiumPerksStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : E[i] = "DetectedOffPlatformPremiumPerksStore";
let j = new E(c.h, {
    LOGOUT: function() {
        y = {}, v = {}
    },
    SKU_FETCH_SUCCESS: O,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
    ENTITLEMENT_CREATE: O,
    APPLICATION_FETCH_SUCCESS: O,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete y[t], x.includes(t)) return !1;
        x.push(t), o.w.set(A, x)
    },
    RUNNING_GAMES_CHANGE: function() {
        let e = !1;
        for (let {
                id: t,
                distributor: n
            }
            of f.Ay.getRunningGames())
            if (null != t && n !== b.d3x.DISCORD)
                for (let {
                        skuId: n,
                        applicationId: r
                    }
                    of b.m_i) r !== t || x.includes(n) || null == v[n] && (_.A.applicationIdsFetched.has(r) || _.A.applicationIdsFetching.has(r) || null != _.A.getForSku(n) || u.LM(r), v[n] = {
                    skuId: n,
                    applicationId: r
                }, e = !0);
        return e && O(), e
    }
})