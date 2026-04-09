/** chunk id: 915516 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Fu: () => u,
    GZ: () => _,
    __: () => m,
    rn: () => d
});
var a = n(496431),
    i = n(773669),
    r = n(975571),
    o = n(927578),
    l = n(788868),
    c = n(652215),
    s = n(985018);

function _(e, t, n, a) {
    switch (e) {
        case l.pe.TIER_0:
            return t.days > 0 ? s.intl.formatToPlainString(s.t.sP5OqC, {
                days: t.days
            }) : t.hours > 0 ? s.intl.formatToPlainString(s.t["7Lhfu7"], {
                hours: t.hours
            }) : s.intl.formatToPlainString(s.t.coDiS0, {
                minutes: Math.max(t.minutes, 1)
            });
        case l.pe.TIER_2:
            return t.days > 0 ? s.intl.formatToPlainString(s.t.GPqVWT, {
                days: t.days,
                trialPeriod: n,
                termsUrl: a
            }) : t.hours > 0 ? s.intl.formatToPlainString(s.t.WFMtg1, {
                hours: t.hours,
                trialPeriod: n,
                termsUrl: a
            }) : s.intl.formatToPlainString(s.t.SxXB42, {
                minutes: Math.max(t.minutes, 1),
                trialPeriod: n,
                termsUrl: a
            });
        default:
            throw Error(`Unsupported subscription tier: ${e}`)
    }
}
let u = e => {
    let t = e.expires_at,
        n = (0, a.A)(null != t ? Date.parse(t) : 0, 1e3),
        i = e?.subscription_trial?.sku_id;
    return null == t || null == i ? null : _(i, n, (0, o.re)({
        intervalType: e.subscription_trial?.interval,
        intervalCount: e.subscription_trial?.interval_count
    }), r.A.getArticleURL(e.trial_id === l.yo ? c.MVz.NITRO_TRIAL_FOR_ALL : c.MVz.PREMIUM_TRIAL))
};

function d(e, t) {
    let n = new Intl.NumberFormat(i.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(t / 100);
    return e.days > 0 ? s.intl.formatToPlainString(s.t["7mw8CZ"], {
        days: e.days,
        discountPercentage: n
    }) : e.hours > 0 ? s.intl.formatToPlainString(s.t["0hYT6o"], {
        hours: e.hours,
        discountPercentage: n
    }) : s.intl.formatToPlainString(s.t["2rh7rw"], {
        minutes: Math.max(e.minutes, 1),
        discountPercentage: n
    })
}
let m = e => {
    let t = e.expires_at,
        n = (0, a.A)(null != t ? Date.parse(t) : 0, 1e3);
    return null == t ? null : d(n, Number(e.discount.amount))
}