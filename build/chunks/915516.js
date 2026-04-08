/** chunk id: 915516 params = (module,exports,require) **/
n.d(e, {
    Fu: () => d,
    GZ: () => _,
    __: () => p,
    rn: () => u
});
var i = n(496431),
    r = n(773669),
    a = n(975571),
    l = n(927578),
    s = n(788868),
    o = n(652215),
    c = n(985018);

function _(t, e, n, i) {
    switch (t) {
        case s.pe.TIER_0:
            return e.days > 0 ? c.intl.formatToPlainString(c.t.sP5OqC, {
                days: e.days
            }) : e.hours > 0 ? c.intl.formatToPlainString(c.t["7Lhfu7"], {
                hours: e.hours
            }) : c.intl.formatToPlainString(c.t.coDiS0, {
                minutes: Math.max(e.minutes, 1)
            });
        case s.pe.TIER_2:
            return e.days > 0 ? c.intl.formatToPlainString(c.t.GPqVWT, {
                days: e.days,
                trialPeriod: n,
                termsUrl: i
            }) : e.hours > 0 ? c.intl.formatToPlainString(c.t.WFMtg1, {
                hours: e.hours,
                trialPeriod: n,
                termsUrl: i
            }) : c.intl.formatToPlainString(c.t.SxXB42, {
                minutes: Math.max(e.minutes, 1),
                trialPeriod: n,
                termsUrl: i
            });
        default:
            throw Error(`Unsupported subscription tier: ${t}`)
    }
}
let d = t => {
    let e = t.expires_at,
        n = (0, i.A)(null != e ? Date.parse(e) : 0, 1e3),
        r = t?.subscription_trial?.sku_id;
    return null == e || null == r ? null : _(r, n, (0, l.re)({
        intervalType: t.subscription_trial?.interval,
        intervalCount: t.subscription_trial?.interval_count
    }), a.A.getArticleURL(t.trial_id === s.yo ? o.MVz.NITRO_TRIAL_FOR_ALL : o.MVz.PREMIUM_TRIAL))
};

function u(t, e) {
    let n = new Intl.NumberFormat(r.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(e / 100);
    return t.days > 0 ? c.intl.formatToPlainString(c.t["7mw8CZ"], {
        days: t.days,
        discountPercentage: n
    }) : t.hours > 0 ? c.intl.formatToPlainString(c.t["0hYT6o"], {
        hours: t.hours,
        discountPercentage: n
    }) : c.intl.formatToPlainString(c.t["2rh7rw"], {
        minutes: Math.max(t.minutes, 1),
        discountPercentage: n
    })
}
let p = t => {
    let e = t.expires_at,
        n = (0, i.A)(null != e ? Date.parse(e) : 0, 1e3);
    return null == e ? null : u(n, Number(t.discount.amount))
}