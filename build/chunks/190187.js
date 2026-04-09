/** chunk id: 190187 params = (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => d
});
var a = n(64700),
    i = n(311907),
    r = n(531260),
    o = n(287809),
    l = n(474090),
    c = n(526292),
    s = n(89366),
    _ = n(851746),
    u = n(788868);
let d = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        n = (0, c.k5)(),
        d = (0, s.QQ)(),
        m = (0, r.A)(),
        b = t?.verified === !0 && (0, l.YE)(t, u.PremiumTypes.TIER_2) && m.fetched && m.fractionalState !== u.xc.FP_ONLY && !n && !d;
    a.useEffect(() => {
        b && !e && _.A.checkAndFetchReferralsRemaining()
    }, [b, e])
}