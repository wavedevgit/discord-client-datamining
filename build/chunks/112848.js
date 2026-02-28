/** chunk id: 112848, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $F: () => I,
    Lh: () => f,
    Wo: () => p,
    Xb: () => b,
    bu: () => y,
    p3: () => A,
    rG: () => C
});
var r, i = n(989349),
    l = n.n(i),
    o = n(311907),
    u = n(439174),
    a = n(622543),
    _ = n(287809),
    s = n(166403),
    d = n(474090),
    c = n(416654),
    m = n(788868),
    p = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function f() {
    let e = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    return (0, c.v)(e?.id) ?? null
}
let C = e => (0, o.bG)([a.A], () => {
    if (null == e) return null;
    let t = a.A.getUserProfile(e);
    return t?.premiumSince
});

function b() {
    let e = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        t = (0, d.YE)(e, m.PremiumTypes.TIER_2),
        n = (0, o.bG)([s.A], () => {
            let e = s.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        r = C(e?.id);
    return n ?? r
}
let y = () => {
        let e = Object.values(m.VD),
            t = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
            n = (0, o.bG)([s.A], () => s.A.getPremiumTypeSubscription());
        if (!(0, d.YE)(t, m.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = l()(),
            i = l()(n.premiumSince).add(1, "day"),
            u = r.diff(i, "months");
        return e.reduce((e, t) => {
            let {
                id: n,
                tenureReqNumMonths: r
            } = t;
            return u >= r ? n : e
        }, null)
    },
    I = () => {
        let e, t, n = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
            r = A(n?.id),
            i = (e = f(), t = (0, o.bG)([s.A], () => s.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, u.Xr)(e, t.premiumSince)),
            l = b();
        return null != r ? {
            ...r,
            earnedOnDate: i,
            status: "earned"
        } : null != l ? {
            ...Object.values(m.VD)[0],
            status: "upcoming"
        } : null
    },
    A = e => {
        let t = (0, c.v)(e);
        return null == t ? null : m.VD[t]
    }