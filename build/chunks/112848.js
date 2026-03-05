/** chunk id: 112848 params = (module,exports,require) **/
r.d(t, {
    $F: () => I,
    Lh: () => f,
    Wo: () => c,
    Xb: () => b,
    bu: () => C,
    p3: () => A,
    rG: () => g
});
var a, n = r(989349),
    i = r.n(n),
    o = r(311907),
    _ = r(439174),
    l = r(622543),
    d = r(287809),
    u = r(166403),
    s = r(474090),
    m = r(416654),
    p = r(788868),
    c = ((a = {}).UPCOMING = "upcoming", a.EARNED = "earned", a);

function f() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return (0, m.v)(e?.id) ?? null
}
let g = e => (0, o.bG)([l.A], () => {
    if (null == e) return null;
    let t = l.A.getUserProfile(e);
    return t?.premiumSince
});

function b() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, s.YE)(e, p.PremiumTypes.TIER_2),
        r = (0, o.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        a = g(e?.id);
    return r ?? a
}
let C = () => {
        let e = Object.values(p.VD),
            t = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
            r = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, s.YE)(t, p.PremiumTypes.TIER_2) || null == r || null == r.premiumSince) return null;
        let a = i()(),
            n = i()(r.premiumSince).add(1, "day"),
            _ = a.diff(n, "months");
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
            a = A(r?.id),
            n = (e = f(), t = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, _.Xr)(e, t.premiumSince)),
            i = b();
        return null != a ? {
            ...a,
            earnedOnDate: n,
            status: "earned"
        } : null != i ? {
            ...Object.values(p.VD)[0],
            status: "upcoming"
        } : null
    },
    A = e => {
        let t = (0, m.v)(e);
        return null == t ? null : p.VD[t]
    }