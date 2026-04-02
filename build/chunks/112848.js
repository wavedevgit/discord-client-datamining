/** chunk id: 112848 params = (module,exports,require) **/
n.d(t, {
    $F: () => g,
    Lh: () => p,
    Wo: () => _,
    Xb: () => T,
    bu: () => x,
    p3: () => A,
    rG: () => N
});
var r, a = n(989349),
    l = n.n(a),
    i = n(311907),
    s = n(439174),
    u = n(622543),
    d = n(287809),
    c = n(166403),
    m = n(474090),
    o = n(416654),
    E = n(788868),
    _ = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function p() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return (0, o.v)(e?.id) ?? null
}
let N = e => (0, i.bG)([u.A], () => {
    if (null == e) return null;
    let t = u.A.getUserProfile(e);
    return t?.premiumSince
});

function T() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, m.YE)(e, E.PremiumTypes.TIER_2),
        n = (0, i.bG)([c.A], () => {
            let e = c.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        r = N(e?.id);
    return n ?? r
}
let x = () => {
        let e = Object.values(E.VD),
            t = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            n = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription());
        if (!(0, m.YE)(t, E.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = l()(),
            a = l()(n.premiumSince).add(1, "day"),
            s = r.diff(a, "months");
        return e.reduce((e, t) => {
            let {
                id: n,
                tenureReqNumMonths: r
            } = t;
            return s >= r ? n : e
        }, null)
    },
    g = () => {
        let e, t, n = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            r = A(n?.id),
            a = (e = p(), t = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince)),
            l = T();
        return null != r ? {
            ...r,
            earnedOnDate: a,
            status: "earned"
        } : null != l ? {
            ...Object.values(E.VD)[0],
            status: "upcoming"
        } : null
    },
    A = e => {
        let t = (0, o.v)(e);
        return null == t ? null : E.VD[t]
    }