/** chunk id: 112848 params = (module,exports,require) **/
r.d(t, {
    $F: () => I,
    Lh: () => f,
    Wo: () => p,
    Xb: () => b,
    bu: () => C,
    p3: () => A,
    rG: () => g
});
var n, a = r(989349),
    i = r.n(a),
    o = r(311907),
    _ = r(439174),
    l = r(622543),
    d = r(287809),
    u = r(166403),
    s = r(474090),
    c = r(416654),
    m = r(788868),
    p = ((n = {}).UPCOMING = "upcoming", n.EARNED = "earned", n);

function f() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return (0, c.v)(e?.id) ?? null
}
let g = e => (0, o.bG)([l.A], () => {
    if (null == e) return null;
    let t = l.A.getUserProfile(e);
    return t?.premiumSince
});

function b() {
    let e = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, s.YE)(e, m.PremiumTypes.TIER_2),
        r = (0, o.bG)([u.A], () => {
            let e = u.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        n = g(e?.id);
    return r ?? n
}
let C = () => {
        let e = Object.values(m.VD),
            t = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
            r = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription());
        if (!(0, s.YE)(t, m.PremiumTypes.TIER_2) || null == r || null == r.premiumSince) return null;
        let n = i()(),
            a = i()(r.premiumSince).add(1, "day"),
            _ = n.diff(a, "months");
        return e.reduce((e, t) => {
            let {
                id: r,
                tenureReqNumMonths: n
            } = t;
            return _ >= n ? r : e
        }, null)
    },
    I = () => {
        let e, t, r = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
            n = A(r?.id),
            a = (e = f(), t = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, _.Xr)(e, t.premiumSince)),
            i = b();
        return null != n ? {
            ...n,
            earnedOnDate: a,
            status: "earned"
        } : null != i ? {
            ...Object.values(m.VD)[0],
            status: "upcoming"
        } : null
    },
    A = e => {
        let t = (0, c.v)(e);
        return null == t ? null : m.VD[t]
    }