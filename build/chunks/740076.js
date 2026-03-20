/** chunk id: 740076 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var a = n(334279),
    i = n(311907),
    l = n(166403),
    r = n(985018);
let o = e => {
    let t = (0, i.bG)([l.A], () => {
        let e = l.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0
    });
    return e === a.j.PREMIUM_TIER_2_3_DAY ? {
        isDisabled: t,
        disabledReason: t ? r.intl.string(r.t.NbveHD) : null
    } : {
        isDisabled: !1,
        disabledReason: null
    }
}