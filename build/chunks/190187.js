/** chunk id: 190187 params = (module,exports,require) **/
n.d(e, {
    i: () => E
});
var i = n(64700),
    l = n(311907),
    r = n(531260),
    s = n(287809),
    a = n(474090),
    o = n(526292),
    c = n(89366),
    d = n(851746),
    u = n(788868);
let E = function() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.k5)(),
        E = (0, c.QQ)(),
        _ = (0, r.A)(),
        T = e?.verified === !0 && (0, a.YE)(e, u.PremiumTypes.TIER_2) && _.fetched && _.fractionalState !== u.xc.FP_ONLY && !n && !E;
    i.useEffect(() => {
        T && !t && d.A.checkAndFetchReferralsRemaining()
    }, [T, t])
}