/** chunk id: 112848, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $F: () => N,
    Lh: () => p,
    Wo: () => x,
    Xb: () => f,
    bu: () => g,
    p3: () => b,
    rG: () => _
});
var r, a = n(989349),
    l = n.n(a),
    s = n(311907),
    i = n(439174),
    d = n(622543),
    u = n(287809),
    o = n(166403),
    c = n(474090),
    m = n(416654),
    h = n(788868),
    x = ((r = {}).UPCOMING = "upcoming", r.EARNED = "earned", r);

function p() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    return (0, m.v)(e?.id) ?? null
}
let _ = e => (0, s.bG)([d.A], () => {
    if (null == e) return null;
    let t = d.A.getUserProfile(e);
    return t?.premiumSince
});

function f() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, c.YE)(e, h.PremiumTypes.TIER_2),
        n = (0, s.bG)([o.A], () => {
            let e = o.A.getPremiumSubscription();
            return null != e && t ? e.premiumSince : null
        }, [t]),
        r = _(e?.id);
    return n ?? r
}
let g = () => {
        let e = Object.values(h.VD),
            t = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            n = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription());
        if (!(0, c.YE)(t, h.PremiumTypes.TIER_2) || null == n || null == n.premiumSince) return null;
        let r = l()(),
            a = l()(n.premiumSince).add(1, "day"),
            i = r.diff(a, "months");
        return e.reduce((e, t) => {
            let {
                id: n,
                tenureReqNumMonths: r
            } = t;
            return i >= r ? n : e
        }, null)
    },
    N = () => {
        let e, t, n = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            r = b(n?.id),
            a = (e = p(), t = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()), null == e || null == t || null == t.premiumSince ? null : (0, i.Xr)(e, t.premiumSince)),
            d = (() => {
                let e = f(),
                    t = Object.values(h.VD);
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
        } : null != d ? d : null
    },
    b = e => {
        let t = (0, m.v)(e);
        return null == t ? null : h.VD[t]
    }