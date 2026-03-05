/** chunk id: 899728, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(311907),
    s = n(988506),
    l = n(97352),
    a = n(166403),
    r = n(927578),
    o = n(580630),
    d = n(231855),
    c = n(88001),
    u = n(518582),
    _ = n(985018);
let g = (e, t) => {
    let n, g = e === s.qT.MEMBER,
        m = (0, d.A)({
            useCachedData: !0,
            fetch: g
        }),
        A = (0, i.bG)([a.A], () => a.A.getPremiumGroupSubscription());
    return e === s.qT.UNSPECIFIED ? null : {
        subheaderString: null == (n = e === s.qT.PRIMARY ? (e => {
            if (null == e) return null;
            let t = e.planIdFromItems;
            if (null == t) return null;
            let n = l.A.get(t);
            if (null == n) return null;
            let i = r.Ay.getPrice(t),
                s = (0, o.$g)(i.amount, i.currency),
                a = n.interval,
                d = n.intervalCount;
            return (0, o.CE)(s, a, d)
        })(A) : null == m ? null : _.intl.format(u.default.Nu9LNm, {
            primaryName: m,
            premiumGroupProductName: (0, c.DP)()
        })) ? "..." : n,
        bodyString: e === s.qT.PRIMARY ? _.intl.format(u.default["+R/K74"], {
            helpCenterLink: c.TE,
            premiumGroupProductName: (0, c.DP)()
        }) : _.intl.format(t ? u.default["xF+upx"] : u.default.qqfnOm, {
            helpCenterLink: c.TE
        })
    }
}