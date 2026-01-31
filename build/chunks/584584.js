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
let y = "DetectedOffPlatformPremiumPerksStore",
    A = {},
    v = {},
    O = [];

function x() {
    let e = !1;
    for (let {
            skuId: t,
            applicationId: n
        }
        of a().values(v)) {
        if (O.includes(t)) continue;
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
        _.A.applicationIdsFetching.has(r.id) || _.A.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != A[t] && (delete A[t], e = !0) : (A[t] = {
            skuId: t,
            applicationId: n
        }, e = !0)
    }
    return e
}
class E extends(r = s.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(m.A, _.A, f.Ay, h.A, g.default), O = null != (e = o.w.get(y)) ? e : O
    }
    getDetectedOffPlatformPremiumPerks() {
        return a().values(A)
    }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
    value: "DetectedOffPlatformPremiumPerksStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : E[i] = "DetectedOffPlatformPremiumPerksStore";
let j = new E(c.h, {
    LOGOUT: function() {
        A = {}, v = {}
    },
    SKU_FETCH_SUCCESS: x,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: x,
    ENTITLEMENT_CREATE: x,
    APPLICATION_FETCH_SUCCESS: x,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
        let {
            skuId: t
        } = e;
        if (delete A[t], O.includes(t)) return !1;
        O.push(t), o.w.set(y, O)
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
                    of b.m_i) r !== t || O.includes(n) || null == v[n] && (_.A.applicationIdsFetched.has(r) || _.A.applicationIdsFetching.has(r) || null != _.A.getForSku(n) || u.LM(r), v[n] = {
                    skuId: n,
                    applicationId: r
                }, e = !0);
        return e && x(), e
    }
})