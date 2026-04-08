/** chunk id: 740076 params = (module,exports,require) **/
a.d(t, {
    I: () => l
});
var n = a(334279),
    r = a(311907),
    i = a(166403),
    s = a(985018);
let l = e => {
    let t = (0, r.bG)([i.A], () => {
        let e = i.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0
    });
    return e === n.j.PREMIUM_TIER_2_3_DAY ? {
        isDisabled: t,
        disabledReason: t ? s.intl.string(s.t.NbveHD) : null
    } : {
        isDisabled: !1,
        disabledReason: null
    }
}