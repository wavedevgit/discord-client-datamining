/** chunk id: 915516 params = (module,exports,require) **/
n.d(t, {
    Fu: () => u,
    GZ: () => c,
    __: () => A,
    rn: () => h
});
var i = n(496431),
    l = n(773669),
    s = n(975571),
    a = n(927578),
    r = n(788868),
    o = n(652215),
    d = n(985018);

function c(e, t, n, i) {
    switch (e) {
        case r.pe.TIER_0:
            return t.days > 0 ? d.intl.formatToPlainString(d.t.sP5OqC, {
                days: t.days
            }) : t.hours > 0 ? d.intl.formatToPlainString(d.t["7Lhfu7"], {
                hours: t.hours
            }) : d.intl.formatToPlainString(d.t.coDiS0, {
                minutes: Math.max(t.minutes, 1)
            });
        case r.pe.TIER_2:
            return t.days > 0 ? d.intl.formatToPlainString(d.t.GPqVWT, {
                days: t.days,
                trialPeriod: n,
                termsUrl: i
            }) : t.hours > 0 ? d.intl.formatToPlainString(d.t.WFMtg1, {
                hours: t.hours,
                trialPeriod: n,
                termsUrl: i
            }) : d.intl.formatToPlainString(d.t.SxXB42, {
                minutes: Math.max(t.minutes, 1),
                trialPeriod: n,
                termsUrl: i
            });
        default:
            throw Error(`Unsupported subscription tier: ${e}`)
    }
}
let u = e => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        l = e?.subscription_trial?.sku_id;
    return null == t || null == l ? null : c(l, n, (0, a.re)({
        intervalType: e.subscription_trial?.interval,
        intervalCount: e.subscription_trial?.interval_count
    }), s.A.getArticleURL(e.trial_id === r.yo ? o.MVz.NITRO_TRIAL_FOR_ALL : o.MVz.PREMIUM_TRIAL))
};

function h(e, t) {
    let n = new Intl.NumberFormat(l.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(t / 100);
    return e.days > 0 ? d.intl.formatToPlainString(d.t["7mw8CZ"], {
        days: e.days,
        discountPercentage: n
    }) : e.hours > 0 ? d.intl.formatToPlainString(d.t["0hYT6o"], {
        hours: e.hours,
        discountPercentage: n
    }) : d.intl.formatToPlainString(d.t["2rh7rw"], {
        minutes: Math.max(e.minutes, 1),
        discountPercentage: n
    })
}
let A = e => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3);
    return null == t ? null : h(n, Number(e.discount.amount))
}