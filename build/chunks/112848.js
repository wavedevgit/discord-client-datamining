/** chunk id: 112848, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $F: () => x,
    Lh: () => p,
    Wo: () => _,
    Xb: () => T,
    bu: () => g,
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
let g = () => {
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
    x = () => {
        let e, t, n = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            r = A(n?.id),
            a = (e = p(), t = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, s.Xr)(e, t.premiumSince)),
            u = (() => {
                let e = T(),
                    t = Object.values(E.VD);
                if (null == e || null == t) return null;
                let n = l()().diff(e, "days"),
                    r = t[0],
                    a = 30 * r.tenureReqNumMonths - n;
                return a <= 0 ? null : {
                    ...r,
                    daysLeft: a,
                    status: "upcoming"
                }
            })();
        return null != r ? {
            ...r,
            earnedOnDate: a,
            status: "earned"
        } : null != u ? u : null
    },
    A = e => {
        let t = (0, o.v)(e);
        return null == t ? null : E.VD[t]
    }