/** chunk id: 112848, original params: e,t,r (module,exports,require) **/
r.d(t, {
    $F: () => N,
    Lh: () => p,
    Wo: () => x,
    Xb: () => g,
    bu: () => _,
    p3: () => b,
    rG: () => f
});
var n, a = r(989349),
    l = r.n(a),
    s = r(311907),
    i = r(439174),
    d = r(622543),
    u = r(287809),
    o = r(166403),
    c = r(474090),
    m = r(416654),
    h = r(788868),
    x = ((n = {}).UPCOMING = "upcoming", n.EARNED = "earned", n);

function p() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    return (0, m.v)(e?.id) ?? null
}
let f = e => (0, s.bG)([d.A], () => {
    if (null == e) return null;
    let t = d.A.getUserProfile(e);
    return t?.premiumSince
});

function g() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, c.YE)(e, h.PremiumTypes.TIER_2),
        r = (0, s.bG)([o.A], () => {
            let e = o.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        n = f(e?.id);
    return r ?? n
}
let _ = () => {
        let e = Object.values(h.VD),
            t = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            r = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, h.PremiumTypes.TIER_2) || null == r || null == r.premiumSince) return null;
        let n = l()(),
            a = l()(r.premiumSince).add(1, "day"),
            i = n.diff(a, "months");
        return e.reduce((e, t) => {
            let {
                id: r,
                tenureReqNumMonths: n
            } = t;
            return i >= n ? r : e
        }, null)
    },
    N = () => {
        let e, t, r = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            n = b(r?.id),
            a = (e = p(), t = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, i.Xr)(e, t.premiumSince)),
            d = (() => {
                let e = g(),
                    t = Object.values(h.VD);
                if (null == e || null == t) return null;
                let r = l()().diff(e, "days"),
                    n = t[0],
                    a = 30 * n.tenureReqNumMonths - r;
                return a <= 0 ? null : {
                    ...n,
                    daysLeft: a,
                    status: "upcoming"
                }
            })();
        return null != n ? {
            ...n,
            earnedOnDate: a,
            status: "earned"
        } : null != d ? d : null
    },
    b = e => {
        let t = (0, m.v)(e);
        return null == t ? null : h.VD[t]
    }