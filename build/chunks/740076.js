/** Chunk was on web.js **/
/** chunk id: 740076, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => o
});
var r = n(334279),
    i = n(311907),
    a = n(166403),
    s = n(985018);
let o = e => {
    let t = (0, i.bG)([a.A], () => {
        let e = a.A.getPremiumSubscription();
        return (null == e ? void 0 : e.isPurchasedExternally) === !0
    });
    return e === r.j.PREMIUM_TIER_2_3_DAY ? {
        isDisabled: t,
        disabledReason: t ? s.intl.string(s.t.NbveHD) : null
    } : {
        isDisabled: !1,
        disabledReason: null
    }
}