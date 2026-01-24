/** Chunk was on web.js **/
/** chunk id: 90526, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(287809),
    d = n(166403),
    f = n(927578),
    p = n(526292),
    _ = n(422936),
    h = n(234419),
    m = n(511484),
    g = n(156601),
    E = n(788868),
    y = n(985018),
    b = n(26212);

function O(e) {
    var t;
    let {
        defaultPriceString: n,
        subscriptionPlan: i,
        discountOffer: a
    } = e, s = (0, m.N1)(i);
    return (0, r.jsx)(r.Fragment, {
        children: y.intl.format(y.t.sJTwHQ, {
            numMonths: null != (t = a.discount.user_usage_limit) ? t : E.OJ,
            discountedPrice: s,
            regularPrice: n
        })
    })
}

function v(e) {
    let {
        isGift: t,
        premiumTier: n,
        offerTierMatchesCard: i,
        offerType: s,
        showYearlyPrice: m,
        priceOptions: v,
        textVariant: A,
        className: I,
        isApplicationHome: S,
        enablePremiumBrandRefresh: T,
        headerClassName: C,
        headingVariant: N = "heading-md/normal",
        headingColor: w
    } = e, R = (0, l.bG)([d.A], () => d.A.getPremiumTypeSubscription()), P = (0, l.bG)([u.default], () => u.default.getCurrentUser()), D = (0, p.k5)(), x = (0, p.nf)(), L = n === E.PremiumTypes.TIER_0 ? E.pe.TIER_0 : E.pe.TIER_2, j = (null == R ? void 0 : R.hasActiveTrial) ? null == P ? void 0 : P.premiumType : D ? E.PremiumTypes.TIER_2 : null, M = (0, h.V)(), k = (0, _.O)(), U = null == M ? void 0 : M.subscription_trial;
    if (!S && !t && null != j && n === j && null != R && null != R.planIdFromItems) {
        let e = null != R.trialEndsAt ? o()(null == R ? void 0 : R.trialEndsAt).diff(o()(), "d") : 0,
            t = E.hd[R.planIdFromItems],
            n = f.Ay.formatPriceString(f.Ay.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return s === E.Vk.PREMIUM_TRIAL ? y.intl.format(y.t["2CGBri"], {
                    remainingTime: e,
                    price: n
                }) : R.planIdFromItems === E.gD.PREMIUM_YEAR_TIER_2 ? y.intl.format(y.t["+qqh6g"], {
                    percent: null != (t = null == x ? void 0 : x.percentage) ? t : E.Cq,
                    regularPrice: n
                }) : y.intl.formatToPlainString(y.t["3ZiutU"], {
                    percent: null != (r = null == x ? void 0 : x.percentage) ? r : E._$,
                    regularPrice: n,
                    numMonths: null != (i = null == x ? void 0 : x.duration) ? i : E.OJ
                })
            };
        return (0, r.jsx)(c.Heading, {
            variant: N,
            color: w,
            className: a()(b.K, C),
            children: i()
        })
    }
    if (!S && !t && i) {
        let e = f.Ay.formatPriceString(f.Ay.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2), E.WT.MONTH);
        if (s === E.Vk.PREMIUM_TRIAL) {
            var G, V, F, B;
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: w,
                className: a()(b.K, C),
                children: y.intl.format(y.t["9vyovu"], {
                    planName: (0, f.RH)(null != (G = E.En[null != (V = null == U ? void 0 : U.sku_id) ? V : E.pe.NONE]) ? G : E.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, f.re)({
                        intervalType: null != (F = null == U ? void 0 : U.interval) ? F : E.WT.DAY,
                        intervalCount: null != (B = null == U ? void 0 : U.interval_count) ? B : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            })
        }
        if (null != k) return (0, r.jsx)(c.Heading, {
            variant: N,
            color: w,
            className: a()(b.K, C),
            children: (0, r.jsx)(O, {
                defaultPriceString: e,
                subscriptionPlan: E.gD.PREMIUM_MONTH_TIER_2,
                discountOffer: k
            })
        })
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.A, {
            subscriptionTier: L,
            isGift: t,
            className: null != I ? I : b.q,
            priceOptions: v,
            variant: A,
            isApplicationHome: S,
            enablePremiumBrandRefresh: T
        }), m && (0, r.jsx)(g.A, {
            subscriptionTier: L,
            interval: E.WT.YEAR,
            className: null != I ? I : b.q,
            isGift: t,
            priceOptions: v,
            variant: A,
            isApplicationHome: S,
            enablePremiumBrandRefresh: T
        })]
    })
}