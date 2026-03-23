/** chunk id: 452910 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(927578),
    o = n(545334),
    d = n(422936),
    c = n(234419),
    u = n(396375),
    _ = n(543233),
    m = n(76707),
    g = n(788868),
    A = n(985018),
    x = n(296388);
let h = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        subtitle: h,
        description: p,
        descriptionCta: T,
        isPremiumGetCta: E,
        onCtaClick: S,
        cardVariant: f
    } = e, C = (0, c.V)(), b = C?.subscription_trial, N = (0, d.O)(), I = (0, r.FY)({
        intervalType: b?.interval,
        intervalCount: b?.interval_count
    }), v = (0, o.G)({
        defaultResponse: A.intl.string(A.t["8x0jKT"]),
        onNonTier2Subscriber: A.intl.string(A.t.IJI7yk),
        onTier2TrialOffer: I,
        onTier0TrialOffer: I,
        onDiscountOffer: A.intl.formatToPlainString(A.t.bkQ4bH, {
            percent: N?.discount.amount
        })
    }), j = (0, _.Q)(f);
    return (0, i.jsxs)("div", {
        className: l()(x.L_, j?.overlayContainer?.className),
        children: [(0, i.jsx)(m.A, {
            title: t,
            cardVariantStyleInfo: j,
            titleClassName: n,
            subtitle: h,
            description: p,
            isOverlay: !0
        }), E && (0, i.jsx)(u.A, {
            className: s,
            look: a.$n.Looks.BLANK,
            color: a.$n.Colors.CUSTOM,
            subscriptionTier: g.pe.TIER_2,
            textOptions: {
                textOverride: v
            },
            showGradient: !0
        }), null != T && null != S && (0, i.jsx)(a.$n, {
            "data-migration-pending": !0,
            className: s,
            onClick: S,
            children: T
        })]
    })
}