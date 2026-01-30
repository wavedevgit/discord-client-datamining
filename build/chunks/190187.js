/** chunk id: 190187, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => p
});
var r = n(64700),
    i = n(311907),
    l = n(531260),
    a = n(287809),
    s = n(474090),
    o = n(526292),
    c = n(89366),
    u = n(851746),
    d = n(788868);
let p = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, o.k5)(),
        p = (0, c.QQ)(),
        m = (0, l.A)(),
        f = (null == t ? void 0 : t.verified) === !0 && (0, s.YE)(t, d.PremiumTypes.TIER_2) && m.fetched && m.fractionalState !== d.xc.FP_ONLY && !n && !p;
    r.useEffect(() => {
        f && !e && u.A.checkAndFetchReferralsRemaining()
    }, [f, e])
}