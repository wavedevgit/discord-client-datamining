/** chunk id: 740076 params = (module,exports,require) **/
r.d(t, {
    I: () => a
});
var n = r(334279),
    l = r(311907),
    i = r(166403),
    s = r(985018);
let a = e => {
    let t = (0, l.bG)([i.A], () => {
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