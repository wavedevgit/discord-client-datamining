/** chunk id: 112848 params = (module,exports,require) **/
a.d(t, {
    $F: () => h,
    Lh: () => f,
    Wo: () => p,
    Xb: () => g,
    bu: () => C,
    p3: () => x,
    rG: () => b
});
var r, n = a(989349),
    o = a.n(n),
    i = a(311907),
    c = a(439174),
    _ = a(622543),
    d = a(287809),
    s = a(166403),
    l = a(474090),
    u = a(416654),
    m = a(788868),
    p = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function f() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return (0, u.v)(e?.id) ?? null
}
let b = e => (0, i.bG)([_.A], () => {
    if (null == e) return null;
    let t = _.A.getUserProfile(e);
    return t?.premiumSince
});

function g() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, l.YE)(e, m.PremiumTypes.TIER_2),
        a = (0, i.bG)([s.A], () => {
            let e = s.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        r = b(e?.id);
    return a ?? r
}
let C = () => {
        let e = Object.values(m.VD),
            t = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            a = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription());
        if (!(0, l.YE)(t, m.PremiumTypes.TIER_2) || null == a || null == a.premiumSince) return null;
        let r = o()(),
            n = o()(a.premiumSince).add(1, "day"),
            c = r.diff(n, "months");
        return e.reduce((e, t) => {
            let {
                id: a,
                tenureReqNumMonths: r
            } = t;
            return c >= r ? a : e
        }, null)
    },
    h = () => {
        let e, t, a = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            r = x(a?.id),
            n = (e = f(), t = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, c.Xr)(e, t.premiumSince)),
            o = g();
        return null != r ? {
            ...r,
            earnedOnDate: n,
            status: "earned"
        } : null != o ? {
            ...Object.values(m.VD)[0],
            status: "upcoming"
        } : null
    },
    x = e => {
        let t = (0, u.v)(e);
        return null == t ? null : m.VD[t]
    }