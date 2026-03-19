/** chunk id: 740076 params = (module,exports,require) **/
n.d(t, {
    I: () => s
});
var r = n(334279),
    a = n(311907),
    i = n(166403),
    l = n(985018);
let s = e => {
    let t = (0, a.bG)([i.A], () => {
        let e = i.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0
    });
    return e === r.j.PREMIUM_TIER_2_3_DAY ? {
        isDisabled: t,
        disabledReason: t ? l.intl.string(l.t.NbveHD) : null
    } : {
        isDisabled: !1,
        disabledReason: null
    }
}