/** chunk id: 740076 params = (module,exports,require) **/
a.d(t, {
    I: () => i
});
var n = a(334279),
    l = a(311907),
    r = a(166403),
    s = a(985018);
let i = e => {
    let t = (0, l.bG)([r.A], () => {
        let e = r.A.getPremiumSubscription();
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