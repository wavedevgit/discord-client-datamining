/** chunk id: 190187 params = (module,exports,require) **/
n.d(t, {
    i: () => _
});
var i = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(287809),
    s = n(474090),
    o = n(526292),
    c = n(89366),
    d = n(851746),
    u = n(788868);
let _ = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, o.k5)(),
        _ = (0, c.QQ)(),
        A = (0, a.A)(),
        m = t?.verified === !0 && (0, s.YE)(t, u.PremiumTypes.TIER_2) && A.fetched && A.fractionalState !== u.xc.FP_ONLY && !n && !_;
    i.useEffect(() => {
        m && !e && d.A.checkAndFetchReferralsRemaining()
    }, [m, e])
}