/** chunk id: 740076 params = (module,exports,require) **/
a.d(n, {
    I: () => s
});
var t = a(334279),
    i = a(311907),
    l = a(166403),
    r = a(985018);
let s = e => {
    let n = (0, i.bG)([l.A], () => {
        let e = l.A.getPremiumSubscription();
        return e?.isPurchasedExternally === !0
    });
    return e === t.j.PREMIUM_TIER_2_3_DAY ? {
        isDisabled: n,
        disabledReason: n ? r.intl.string(r.t.NbveHD) : null
    } : {
        isDisabled: !1,
        disabledReason: null
    }
}