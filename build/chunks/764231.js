/** chunk id: 764231, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => i
}), n(439174), n(112848);
var r = n(788868),
    a = n(985018);
let i = (e, t) => {
    switch (e) {
        case r.Ac.PREMIUM_TENURE_1_MONTH:
        case r.Ac.PREMIUM_TENURE_3_MONTH:
        case r.Ac.PREMIUM_TENURE_6_MONTH:
            return a.intl.formatToPlainString(a.t.erUSmA, {
                months: t
            });
        case r.Ac.PREMIUM_TENURE_12_MONTH:
        case r.Ac.PREMIUM_TENURE_24_MONTH:
        case r.Ac.PREMIUM_TENURE_36_MONTH:
        case r.Ac.PREMIUM_TENURE_60_MONTH:
        case r.Ac.PREMIUM_TENURE_72_MONTH:
            return a.intl.formatToPlainString(a.t.qOdyDe, {
                years: t / 12
            });
        default:
            return null
    }
}