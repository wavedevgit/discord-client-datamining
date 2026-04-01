/** chunk id: 190187 params = (module,exports,require) **/
"use strict";
s.d(t, {
    i: () => d
});
var r = s(64700),
    i = s(311907),
    n = s(531260),
    a = s(287809),
    l = s(474090),
    c = s(526292),
    u = s(89366),
    o = s(851746),
    E = s(788868);
let d = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        s = (0, c.k5)(),
        d = (0, u.QQ)(),
        _ = (0, n.A)(),
        R = t?.verified === !0 && (0, l.YE)(t, E.PremiumTypes.TIER_2) && _.fetched && _.fractionalState !== E.xc.FP_ONLY && !s && !d;
    r.useEffect(() => {
        R && !e && o.A.checkAndFetchReferralsRemaining()
    }, [R, e])
}