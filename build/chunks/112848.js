/** chunk id: 112848 params = (module,exports,require) **/
r.d(t, {
    $F: () => I,
    Lh: () => p,
    Wo: () => m,
    Xb: () => b,
    bu: () => C,
    p3: () => h,
    rG: () => g
});
var a, i = r(989349),
    n = r.n(i),
    o = r(311907),
    _ = r(439174),
    l = r(622543),
    d = r(287809),
    u = r(166403),
    c = r(474090),
    s = r(416654),
    f = r(788868),
    m = ((a = {}).UPCOMING = "upcoming", a.EARNED = "earned", a);

function p() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return (0, s.v)(e?.id) ?? null
}
let g = e => (0, o.bG)([l.A], () => {
    if (null == e) return null;
    let t = l.A.getUserProfile(e);
    return t?.premiumSince
});

function b() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, c.YE)(e, f.PremiumTypes.TIER_2),
        r = (0, o.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        a = g(e?.id);
    return r ?? a
}
let C = () => {
        let e = Object.values(f.VD),
            t = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
            r = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, f.PremiumTypes.TIER_2) || null == r || null == r.premiumSince) return null;
        let a = n()(),
            i = n()(r.premiumSince).add(1, "day"),
            _ = a.diff(i, "months");
        return e.reduce((e, t) => {
            let {
                id: r,
                tenureReqNumMonths: a
            } = t;
            return _ >= a ? r : e
        }, null)
    },
    I = () => {
        let e, t, r = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
            a = h(r?.id),
            i = (e = p(), t = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, _.Xr)(e, t.premiumSince)),
            n = b();
        return null != a ? {
            ...a,
            earnedOnDate: i,
            status: "earned"
        } : null != n ? {
            ...Object.values(f.VD)[0],
            status: "upcoming"
        } : null
    },
    h = e => {
        let t = (0, s.v)(e);
        return null == t ? null : f.VD[t]
    }