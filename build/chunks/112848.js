/** chunk id: 112848 params = (module,exports,require) **/
t.d(r, {
    $F: () => g,
    Lh: () => b,
    Wo: () => s,
    Xb: () => C,
    bu: () => h,
    p3: () => x,
    rG: () => f
});
var a, o = t(989349),
    _ = t.n(o),
    i = t(311907),
    n = t(439174),
    l = t(622543),
    d = t(287809),
    u = t(166403),
    p = t(474090),
    c = t(416654),
    m = t(788868),
    s = ((a = {}).UPCOMING = "upcoming", a.EARNED = "earned", a);

function b() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return (0, c.v)(e?.id) ?? null
}
let f = e => (0, i.bG)([l.A], () => {
    if (null == e) return null;
    let r = l.A.getUserProfile(e);
    return r?.premiumSince
});

function C() {
    let e = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        r = (0, p.YE)(e, m.PremiumTypes.TIER_2),
        t = (0, i.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && r ? e.premiumSince : null
        }, [r]),
        a = f(e?.id);
    return t ?? a
}
let h = () => {
        let e = Object.values(m.VD),
            r = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            t = (0, i.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, p.YE)(r, m.PremiumTypes.TIER_2) || null == t || null == t.premiumSince) return null;
        let a = _()(),
            o = _()(t.premiumSince).add(1, "day"),
            n = a.diff(o, "months");
        return e.reduce((e, r) => {
            let {
                id: t,
                tenureReqNumMonths: a
            } = r;
            return n >= a ? t : e
        }, null)
    },
    g = () => {
        let e, r, t = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            a = x(t?.id),
            o = (e = b(), r = (0, i.bG)([u.A], () => u.A.getPremiumTypeSubscription()), null == e || null == r || null == r.premiumSince ? null : (0, n.Xr)(e, r.premiumSince)),
            _ = C();
        return null != a ? {
            ...a,
            earnedOnDate: o,
            status: "earned"
        } : null != _ ? {
            ...Object.values(m.VD)[0],
            status: "upcoming"
        } : null
    },
    x = e => {
        let r = (0, c.v)(e);
        return null == r ? null : m.VD[r]
    }